import { getAll, getOne, create, remove, update } from '../models/Project.js';
import { response, request } from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

export const getAllProjects = async (req = request, res = response) => {

    try {
        const id = req.cookies.ID;

        const Project = await getAll(Number(id));
        res.render("dashboard", {
            email: req.cookies.EMAIL,
            Projects: Project,
            id: req.cookies.ID
        });

    } catch (e) {
        console.log(e);
    }

}

export const getOneProject = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const Project = await getOne(Number(id));
        res.render("editProject", {
            Project: Project,
            id: req.cookies.ID,
            email: req.cookies.EMAIL
        });

    } catch (e) {
        console.log(e);
    }

}

export const createProject = async (req = request, res = response) => {

    const { name, url, select, description} = req.body
    const id = req.cookies.ID;

    try {
        const createProject = await create(name, url, description, Number(select), Number(id))

        res.redirect('/dashboard');

        return

    } catch (error) {
        console.log(error);
    }
}

export const updateProject = async (req = request, res = response) => {

    const { name, url, select, description} = req.body
    
    const { id } = req.params;

    try {

        const updateProject = await update( Number(id), name, url, description, Number(select))

        res.redirect('/dashboard');


    } catch (error) {
        console.log(error);
    }


}

export const deleteProject = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const removeProject = await remove(Number(id));

        res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
    }
}
