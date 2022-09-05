import { Request, Response } from "express";
import { UserService } from '../services/UserService'

export const all = async (req: Request, res: Response) => {
    const users = await UserService.findAll();
    res.json({ users })
}

export const one = async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await UserService.findOne(id);
    if (user) {
        res.json({ user })
    }else {
        res.json({error: 'User not found'});
    }
}

export const login = async (req: Request, res: Response) => {
    const {id} = req.body;
    const user = await UserService.findOne(id);
    if (user) {
        res.json({ user })
    }else {
        res.json({error: 'User not found'});
    }
}

export const create = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;

    if(name && email && password) {
        const user = await UserService.create({name, email, password});
        res.status(200).json({user});
    }else {
        res.json({error: 'Data missing'});
    }
}

export const editUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {name, email, password} = req.body;

    const user = await UserService.findOne(id);
    if (user) {
        const userUpdated = await UserService.update(
            user.id,
            {   name,
                email,
                password
            }
        );
        res.json({user: userUpdated});

    } else {
        res.json({error: 'User not found'});
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await UserService.findOne(id);
    if (user) {
        await UserService.delete(id)
        res.json({status: 'User Deleted'})
    } else {
        res.json({error: 'User not found'});
    }
};