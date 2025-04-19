import express from 'express';
import { contact } from '../controller/contact.controller.js';

const router = express.Router();

// Remove /contact from here, just use "/"
router.post("/", contact);

export default router;
