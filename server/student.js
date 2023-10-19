import express from "express";
import {faker} from "@faker-js/faker";

export const studentRouter = express.Router();

studentRouter.get('/:id', (req,res) => {
    const id = req.params.id;
    res.send("Student "+id);
});
studentRouter.get('/:id/plan', (req,res) => {
    res.json({
        name: faker.person.fullName(),
        date: faker.date.anytime,
        subject: faker.commerce.productName(),
        classroom: faker.number.int({min:101,max:600})
    });
})
studentRouter.get('/:id/plan/:from/:to', (req,res) => {
    res.json({
        name: faker.person.fullName(),
        date: faker.date.between({ from: req.params.from+'T08:00:00.000Z', to: req.params.to+'T20:00:00.000Z' }),
        subject: faker.commerce.productName(),
        classroom: faker.number.int({min:101,max:600})
    });
})
