import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { v4 as uuidv4 } from "uuid";

function generateToken() {
  return uuidv4();
}

const prisma = new PrismaClient();

export async function POST(request: NextRequest, res: NextResponse) {
  const token = generateToken();
  const body = await request.json();
  const { nom, prenom, email, password } = body;
  if (
    !body.data.nom ||
    !body.data.prenom ||
    !body.data.email ||
    !body.data.password
  ) {
    return new NextResponse("Un des champs manquants ! ", {
      status: 400,
    });
  }

  const exist = await prisma.user.findUnique({
    where: { email: body.data.email },
  });

  if (exist) {
    return new NextResponse("L'utilisateur existe déjà! ");
  }
  const hashedPassword = await bcrypt.hash(body.data.password, 10);

  const newUser = await prisma.user.create({
    data: {
      nom: body.data.nom,
      prenom: body.data.prenom,
      email: body.data.email,
      password: hashedPassword,
      confirmationToken: token,
    },
  });

  const lastRecord = await prisma.user.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  const lastRecordId = lastRecord?.id;

  const lastRegisteredUser = await prisma.user.findUnique({
    where: { id: lastRecordId },
  });


  console.log(process.env.SENDGRID_API_KEY, "JE suis api_key");

  if (request.method != "POST") {
    return new NextResponse("Method Invalide");
  }
 
// Use the nullish coalescing operator (??) to provide a default string if the value is undefined
  const sgMailTypeNotUndefind = "";
  const sendGridMailUn: never[] = [];

    sgMail.setApiKey( sgMailTypeNotUndefind ??  process.env.SENDGRID_API_KEY  ) ;

  const sendGridMail = {
    to: body.data.email,
    from: process.env.EMAIL_SENT_FROM,
    templateId: process.env.TEMPLATEID,

    dynamic_template_data: {
      id: lastRegisteredUser?.id,
      prenom: lastRegisteredUser?.prenom,
      nom: lastRegisteredUser?.nom,
      email: lastRegisteredUser?.email,
      token: lastRegisteredUser?.confirmationToken,
    },
  };

  await sgMail.send(sendGridMailUn ?? sendGridMail);

  return NextResponse.json(newUser);
}
