import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { v4 as uuidv4 } from 'uuid';

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
    },
  });
  console.log(process.env.SENDGRID_API_KEY, "JE suis api_key")

  console.log("************************************")
  console.log(request.method , "je suis request.method")

  if (request.method != "POST") {
    return new NextResponse("Method Invalide");
  }


  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  


  const sendGridMail = {
    to: "yahia19raouf@gmail.com",
    from: "raouf.etapweb@gmail.com",
    templateId: "d-2aec903079e145ee922c474052bf02cb",
    dynamic_template_data: {
        prenom: body.data.prenom,
        nom: body.data.nom,
        email: body.data.email,
    },
  };

   await sgMail.send(sendGridMail);
   res.json(); 
  

  return NextResponse.json(newUser);
}
