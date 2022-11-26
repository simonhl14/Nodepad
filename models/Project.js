import Prisma from "../config/db.js";

export const getAll = async (id) => {
    const projects = await Prisma.project.findMany({
        where: {
            userId: id,
        },
        include: {
            user: true,
        }
    })

    return projects;
}

export const getOne = async (id) => {
    const project = await Prisma.project.findUnique({
        where: {
            id: id,
        },
    })

    return project;
}


export const create = async (name, url, desc, select, id) => {

    try {
        const Project = await Prisma.project.create({
            data: {
                name: name,
                active: select,
                img_path: url,
                userId: id,
                description: desc,
            },
        })
        return true;

    } catch (error) {
        console.log(error);
        return false;
    }
}

export const update = async (id, name, url, desc, select) => {

    try {

        const updateProject = await Prisma.project.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                active: select,
                img_path: url,
                description: desc,
            },
        })

        return true;

    } catch (error) {
        console.log('ERROR EDITANDO: ' + error);
        return false;
    }

}

export const remove = async (id) => {

    try {

        const deleteUser = await Prisma.project.delete({
            where: {
                id: id,
            },
        })
        return true;

    } catch (error) {
        console.log('ERROR ELIMINANDO: ' + error);
        return false;
    }

}
