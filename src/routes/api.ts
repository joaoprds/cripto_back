import { Router } from "express";
import * as CriptoController from "../Controllers/criptoController"
import * as NftController from "../Controllers/nftController"
import * as UserController from "../Controllers/userController"


const router = Router();

// Create routes to GET method //
router.get('/users', UserController.all)
router.get('/users/:id', UserController.one)
router.get('/nfts', NftController.all)
router.get('/nfts/:id', NftController.one)
router.get('/criptos', CriptoController.all)
router.get('/criptos/:id', CriptoController.one)

// Create routes to POST method //
router.post('/users', UserController.create)
router.post('/login', UserController.login)
router.post('/nfts', NftController.create)
router.post('/criptos', CriptoController.create)

// Create routes to PUT method //
router.put('/users/:id', UserController.editUser)
router.put('/nfts/:id', NftController.editNft)
router.put('/criptos/:id', CriptoController.editCripto)

// Create routes to DELETE method //
router.delete('/users/:id', UserController.deleteUser)
router.delete('/nfts/:id', NftController.deleteNft)
router.delete('/criptos/:id', CriptoController.deleteCripto)

export {router}
