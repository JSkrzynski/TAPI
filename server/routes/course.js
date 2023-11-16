import express from "express";
import courses from "../../data/courses.json" assert {type: "json"};

export const courseRouter = express.Router();

courseRouter.get('/all', (req,res) => {
    // #swagger.tags = ['Courses']
    res.send({
        courses
    });
})
courseRouter.get('/:id', (req,res) => {
    // #swagger.tags = ['Courses']
    const course = courses.at(req.params.id-1)
    res.send({course});
})