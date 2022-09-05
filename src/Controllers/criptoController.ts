import { Request, Response } from "express";
import { CriptoService } from '../services/CriptoService'

export const all = async (req: Request, res: Response) => {
    const cripto = await CriptoService.findAll();
    res.json({ cripto })
}

export const one = async (req: Request, res: Response) => {
    const {id} = req.params;
    const cripto = await CriptoService.findOne( parseInt(id) );
    if (cripto) {
        res.json({ cripto })
    }else {
        res.json({error: 'cripto not found'});
    }
}

export const create = async (req: Request, res: Response) => {
    const {name, value} = req.body;

    if(name && value) {
        const cripto = await CriptoService.create({name, value});
        res.status(200).json({cripto});
    }else {
        res.json({error: 'Data missing'});
    }
}

export const editCripto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {value} = req.body;

    const cripto = await CriptoService.findOne(parseInt(id));
    if (cripto) {
        const criptoUpdated = await CriptoService.update(
            cripto.id,
            {value}
        );
        res.json({nft: criptoUpdated});

    } else {
        res.json({error: 'cripto not found'});
    }
}

export const deleteCripto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cripto = await CriptoService.findOne(parseInt(id));
    if (cripto) {
        await CriptoService.delete(parseInt(id))
        res.json({status: 'cripto Deleted'})
    } else {
        res.json({error: 'cripto not found'});
    }
};