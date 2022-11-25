import { createUser, userLogin } from '../models/User.js';
import { response, request } from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

export const create = async (req = request, res = response) => {

    const { name, email, password } = req.body

    const IsCreated = await createUser(name, email, password);

    if (!IsCreated) {
        res.render('register', { msg: "error creando el usuario" })
        return
    }

    res.redirect('/')
}

export const login = async (req = request, res = response) => {

    const { email, password } = req.body;

    const isLogin = await userLogin(email, password);

    if (!isLogin) {
        res.render('login', { msg: "error iniciando sesion" })
        return
    }
    res.cookie('ID', isLogin.id)
    res.cookie('EMAIL', isLogin.email)


    res.redirect('/dashboard')

}
