import  express  from "express";
const router = express.Router();

import {   
    getAllProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject
} from "../controllers/ProjectController.js";

import {   
    paginaInicio,
    error404,
    dashboard,
    Login,
    register,
    createProjects,
    logout
} from "../controllers/PaginasController.js";

import {   
    create, 
    login
} from "../controllers/UserController.js";


// PAGES ROUTES
router.get('/', paginaInicio);
router.get('/logout', logout);
router.get('/login', Login);
router.get('/register', register);
router.get('/dashboard/createProjects', createProjects);
router.get('/dashboard/editProject/:id', getOneProject);
router.get('/dashboard', getAllProjects);
router.get('/*',error404);

// PROJECTS ROUTES
router.post('/dashboard/createProject/:id', createProject);
router.post('/dashboard/editProject/:id', updateProject);
router.post('/dashboard/deleteProject/:id', deleteProject);

// USER ROUTES
router.post('/register', create);
router.post('/login', login);



export default router;