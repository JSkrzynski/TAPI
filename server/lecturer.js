import express from "express";
import lecturers from "../data/lecturers.json"

export const lecturerRouter = express.Router();

lecturerRouter.get('/all', (req,res) => {
    res.send({
        lecturers
    });
})