import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { z }  from "zod"; 
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const createUsersChema = z.object({
    nom: z.string().regex(/^[a-z0-9_-]{3,15}$/g, 'Format incorrect'),
    prenom: z.string().regex(/^[a-z0-9_-]{3,15}$/g, 'Format incorrect'),
    email:z.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, 'Format incorrect' ),
    password:z.string().min(5, "Mots de passe doit avoir 5 caractère minimum"),
  })
  
  


export default async function createUser(
    req: NextApiRequest,
    res: NextApiResponse
) {

const { email, password} = createUsersChema.parse(req.body);

const user = await prisma.user.findUnique({where: {email}})

if (user !== null ) {
    res.send({user: null, message: "Email déjà existant"});
}


const saltRounds = 10;

const hashPassword = async (mdp: any) => {
  try {
    const hash = await bcrypt.hash(mdp, saltRounds);
    return hash;
  } catch (error) {
    throw error;
  }
};

const hp = await hashPassword(password);



const newUser =await prisma.user.create({
    data: { nom: nom, prenom: prenom, email: email, password: hp },
})


return res.send({user: newUser, message:"Utilisateur enregistré avec succès"})

}