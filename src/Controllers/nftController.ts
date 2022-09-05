import { Request, Response } from "express";
import { NftService } from '../services/NftService'

export const all = async (req: Request, res: Response) => {
    const nft = await NftService.findAll();
    res.json({ nft })
}

export const one = async (req: Request, res: Response) => {
    const {id} = req.params;
    const nft = await NftService.findOne(id);
    if (nft) {
        res.json({ nft })
    }else {
        res.json({error: 'nft not found'});
    }
}

export const create = async (req: Request, res: Response) => {
    const {name, value, owner} = req.body;

    if(name || value || owner) {
        const user = await NftService.create({name, value, owner});
        res.status(200).json({user});
    }else {
        res.json({error: 'Data missing'});
    }
}

export const editNft = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {value, ownerId} = req.body;

    const nft = await NftService.findOne(id);
    if (nft) {
        const nftUpdated = await NftService.update(
            nft.id,
            {   value, 
                ownerId
            }
        );
        res.json({nft: nftUpdated});

    } else {
        res.json({error: 'nft not found'});
    }
}

export const deleteNft = async (req: Request, res: Response) => {
    const { id } = req.params;
    const nft = await NftService.findOne(id);
    if (nft) {
        await NftService.delete(id)
        res.json({status: 'nft Deleted'})
    } else {
        res.json({error: 'nft not found'});
    }
};