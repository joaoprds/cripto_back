import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

type createDataCriptoProp = {
    name: string;
    value: number;
}

type updateDataCriptoProp = {
    value?: number;
};


export const CriptoService = {
    findAll: async () => {
        return await prisma.cripto.findMany({})
    },

    findOne: async (id: number) => {
        return await prisma.cripto.findUnique(
            { 
                where:
                {
                    id
                }
            })
    },

    create: async (data: createDataCriptoProp) => {
        return await prisma.cripto.create({data})
    },
    update: async (id: number, data: updateDataCriptoProp) => {
        return await prisma.cripto.update({where: {id},data })
    },
    delete: async (id: number) => {
        return await prisma.cripto.delete({where: {id}})
    }
}

