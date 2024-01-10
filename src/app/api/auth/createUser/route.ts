import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function  POST(request: NextRequest, res:NextResponse) {
            const body = await request.json();
            const {nom, prenom, email, password} = body;
        if(!body.data.nom || !body.data.prenom || !body.data.email || !body.data.password  ) {
            return new NextResponse("Un des champs manquants ! ", {
                status: 400,
            });
        }

        console.log(body.data.nom)

    const exist = await prisma.user.findUnique({
        where: { email: body.data.email},
    });


    if(exist) {
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

    return NextResponse.json(newUser)
}