import express from 'express';
import { router } from '../src/routes/api'




const server = express();
server.use(express.json());
server.use(router);



server.listen(4000, () => console.log('listening on port 4000'))