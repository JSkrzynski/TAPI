import express from "express";
import lecturers from "../../data/lecturers.json" assert {type: "json"};

export const lecturerRouter = express.Router();

lecturerRouter.get('/all', (req,res) => {
    // #swagger.tags = ['Lecturers']

    res.send({
        lecturers
    });
})