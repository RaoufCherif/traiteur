import React from 'react';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
    const body = await request.json();
    const { id, token, email } = body;

    const newUser = await prisma.user.findUnique({
        where: {
            id: parseInt(body.data.id),
        },
    })

    if (!body.data.id || !body.data.token || !body.data.email) {
        return new NextResponse(' Une erreur est survenue ', { status: 400 });
    }

    if (newUser?.id === parseInt(body.data.id) && newUser?.confirmationToken === body.data.token && newUser?.email === body.data.email) {

        const switchconfirmToTrue = await prisma.user.update({
            data: {
                emailConfirmed: true
            },
            where: {
                id: newUser?.id
            }
        })
    }

    return NextResponse.json(newUser);

}
