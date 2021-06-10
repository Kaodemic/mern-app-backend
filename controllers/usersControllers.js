import get from 'lodash/get.js';
import { UserModel } from '../models/userModel.js';

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.find({ userName: 'admin' });
        res.status(200).json({ data: user[0], status: 200, message: 'success' });
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

export const createUser = async (req, res) => {
    try {
        // const createUser = new UserModel({
        //     userName: "tai.votan",
        //     email: "tai@admin.com",
        //     firstName: "Tài",
        //     lastName: "Võ Tấn",
        //     birthday: "2021-06-09T21:43:10+07:00",
        //     gender: "0",
        //     phone: "0000000000",
        //     password: "admin",
        //     roles: "admin",
        //     avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        //     isActive: true,
        // });
        // createUser.save();
        // const user = await UserModel.find();
        // res.status(200).json({ user });
    } catch (err) {
        console.log('err', err);
    }

}

export const deleteUser = (req, res) => {
    res.send({ 'SUCCESS': true })
}

export const userLogin = async (req, res) => {
    try {
        const { body: { userName, password } } = req;
        const user = await UserModel.find({ userName });
        const userDB = get(user, '[0].userName');
        const pwdDB = get(user, '[0].password');

        if (user.length === 0){
            res.status(400).json({
                status: 400,
                message: 'ERROR',
                data: {}
            });
        }

        if(userDB === userName && pwdDB === password) {
            res.json({
                status: 200,
                message: 'Success',
                data: user[0] || {},
            })
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}
