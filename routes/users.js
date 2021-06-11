import express from "express";
import { authToken } from '../services/TokenAuth.js';
import { getCurrentUser, createUser, deleteUser, userLogin } from '../controllers/usersControllers.js';

const router = express.Router();

router.get('/user/currentUser', authToken, getCurrentUser);

router.post('/user/login', userLogin);

router.post('/user', createUser);

router.delete('/user/:email', deleteUser);

export default router;
