import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

type createDataNftProp = {
    name: string;
    value: number;
    owner: string;
};

type updateDataNftProp = {
    value?: number;
    ownerId?: string;
};

export const NftService = {
    findAll: async () => {
        return await prisma.nft.findMany({})
    },

    findOne: async (id: string) => {
        return await prisma.nft.findUnique({ where:{id}})
    },

    create: async (data: createDataNftProp) => {
        return await prisma.nft.create({data})
    },
    update: async (id: string, data: updateDataNftProp) => {
        return await prisma.nft.update({where: {id},data })
    },
    delete: async (id: string) => {
        return await prisma.nft.delete({where: {id}})
    }
}

