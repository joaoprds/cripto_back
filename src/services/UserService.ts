import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

type createDataUserProp = {
    name: string;
    email: string;
    password?: string;
}

type updateDataUserProp = {
    name?: string;
    email?: string;
    password?: string;
    
}

export const UserService = {
    findAll: async () => {
        return await prisma.user.findMany({})
    },

    findOne: async (id: string) => {
        return await prisma.user.findUnique({ where:{id}})
    },

    create: async (data: createDataUserProp) => {
        return await prisma.user.create({data})
    },

    login: async (id: string) => {
        return await prisma.user.findUnique({ where:{id}})
    },

    update: async (id: string, data: updateDataUserProp) => {
        return await prisma.user.update({where: {id},data })
    },

    delete: async (id: string) => {
        return await prisma.user.delete({where: {id}})
    },
}

