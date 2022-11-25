import  express  from "express";
const router = express.Router();

import {   
    getAllProjects,
    getOneProject,
    createProject
} from "../controllers/ProjectController.js";

import {   
    paginaInicio,
    error404,
    dashboard,
    Login,
    register,
    createProjects,
    editProject
} from "../controllers/PaginasController.js";

import {   
    create, 
    login
} from "../controllers/UserController.js";


// PAGES ROUTES
router.get('/', paginaInicio);
router.get('/login', Login);
router.get('/register', register);
router.get('/dashboard/createProjects', createProjects);
router.get('/dashboard/editProject/:id', editProject);
router.get('/dashboard', getAllProjects);
router.get('/*',error404);

// PROJECTS ROUTES
router.get('/dashboard/projects/:id', getOneProject);
router.post('/dashboard/createProject/:id',createProject);

// USER ROUTES
router.post('/register', create);
router.post('/login', login);



export default router;