import express from "express";
import { getUser, createUser, deleteUser, userLogin } from '../controllers/usersControllers.js';

const router = express.Router();

router.get('/user/currentUser', getUser);

router.post('/user/login', userLogin);

router.post('/user', createUser);

router.delete('/user/:email', deleteUser);

export default router;
