import  { prisma }  from "@/db";

export function getUsers() {
    return prisma?.user?.findMany();
}