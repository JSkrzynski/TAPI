import express from "express";
import {faker} from "@faker-js/faker";

export const studentRouter = express.Router();
const schedule = [];

studentRouter.get('/:id/plan', (req,res) => {
    for (let i = 0; i < 5; i++){
        schedule[i] = {
            date: faker.date.anytime(),
            subject: faker.commerce.productName(),
            classroom: faker.number.int({min:101,max:600})
        }
    }
    res.json({
        name: faker.person.fullName(),
        schedule: schedule
    });
})
studentRouter.get('/:id/plan/:from/:to', (req,res) => {
    for (let i = 0; i < 2; i++){
        schedule[i] = {
            date: faker.date.between({ from: req.params.from+'T08:00:00.000Z', to: req.params.to+'T20:00:00.000Z' }),
            subject: faker.commerce.productName(),
            classroom: faker.number.int({min:101,max:600})
        }
    }
    res.json({
        name: faker.person.fullName(),
        schedule: schedule
    });
})
