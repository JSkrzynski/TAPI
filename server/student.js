import express from "express";
import {faker} from "@faker-js/faker";
import data from "../data/data.json" assert {type: "json"};

export const studentRouter = express.Router();
const schedule = [];
const listOfAllStudents = [];

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

studentRouter.get('/plan', (req,res) => {
    for (let i = 0; i < 50; i++){
        for (let j = 0; j < 5; j++) {
            schedule[j] = {
                date: faker.date.anytime(),
                subject: faker.commerce.productName(),
                lecturer: faker.person.fullName(),
                classroom: faker.number.int({min:101,max:600})
            }
        }
        listOfAllStudents[i] = {
            id: i + 1 ,
            group: faker.number.int({min: 10, max: 20}),
            name: faker.person.fullName(),
            schedule: schedule
        }
    }
    // res.json({
    //     Students: listOfAllStudents
    // });
    res.send(data)
})
