import Prisma from "../config/db.js";

const repeat = async (email) => {

    const isRepeat = await Prisma.user.count({
        where: {
            email: email
        }
    });

    if (isRepeat > 0) {
        return true
    }

    return false;
}

export const createUser = async (name, email, password) => {

    const isRepeat = await repeat(email);

    if (isRepeat == true) {
        return false;
    }

    try {
        const user = await Prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
        })
        return true;

    } catch (error) {
        console.log(error);
        return false;
    }

}

export const userLogin = async (email, password) => {

    try {

        const isLogin = await Prisma.user.findFirst({
            where: {
                email: email,
            },
        })
    
        if (isLogin == null) {
            return false
        }

        if (isLogin.password === password) {
            return isLogin
        }


    } catch (error) {
        console.log(error);
        return false;
    }


};


