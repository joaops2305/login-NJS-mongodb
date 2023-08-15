import express from 'express';
const router = express.Router();

//Controllers
import Acesso from './Controllers/Acesso.js';
import Users from './Controllers/Usuarios.js';

router.get('/', (req, res) => {
    res.send(JSON.stringify({}));
});

router.post('/', Acesso.connect);

router.get('/logout', Acesso.desconecta);

router.get('/users', Acesso.conectado, async (req, res) => {
    return await Users.index(req, res);
});

router.get('/users/:id', Acesso.conectado, async (req, res) => {     
    return await Users.show(req, res);
});

router.post('/users/', Acesso.conectado, async (req, res) => {      
    return await Users.store(req, res);
});

router.put('/users/:id', Acesso.conectado, async (req, res) => {  
    return await Users.update(req, res);
});

router.delete('/users/:id', Acesso.conectado, async (req, res) => {  
    return await Users.delete(req, res);
});

export default router;