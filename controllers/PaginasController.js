import { response, request } from 'express'

const paginaInicio = async (req, res) => {
  try {
    res.clearCookie('EMAIL');
    res.render("inicio", {email: req.cookies.EMAIL});
  } catch (error) {
    console.log('ERRROR INICIO \n'+ error);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie('EMAIL');
    res.redirect('/');
  } catch (error) {
    console.log('ERRROR INICIO \n'+ error);
  }
};

const error404 = async(req, res) => {
  res.sendStatus(404);
}

const dashboard = async(req, res) => {
  try {
    res.render("dashboard", {email: req.cookies.EMAIL});
  } catch (error) {
    console.log('ERRROR DASHBOARD \n'+ error);
  }
};

const Login = async(req, res) => {
  try {
    res.render("login", {email: req.cookies.EMAIL});
  } catch (error) {
    console.log('ERRROR LOGIN \n'+ error);
  }
};

const register = async(req, res) => {
  try {
    res.render("register", {email: req.cookies.EMAIL});
  } catch (error) {
    console.log('ERRROR REGISTER \n'+ error);
  }
};

const createProjects = async(req, res = response) => {
  try {
    res.render("newProjects", {id: req.cookies.ID, email: req.cookies.EMAIL});
  } catch (error) {
    console.log('ERRROR CREATE PROJECT \n'+ error);
  }
};

const editProject = async(req, res) => {
  try {
    res.render("editProject", {idUser: req.cookies.ID, email: req.cookies.EMAIL});
  } catch (error) {
    console.log('ERRROR EDIT PROJECT \n'+ error);
  }
};

export { paginaInicio, error404, dashboard, Login, register, createProjects, editProject, logout };
