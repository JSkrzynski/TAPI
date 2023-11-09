import express from "express";
import {faker} from "@faker-js/faker";

export const courseRouter = express.Router();

courseRouter.get('/:id/plan', (req,res) => {
    res.json({
        name: faker.person.fullName(),
        schedule: schedule
    });
})