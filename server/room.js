import express from "express";
import rooms from "../data/rooms.json" assert {type: "json"};

export const roomRouter = express.Router();

roomRouter.get('/:id/plan', (req,res) => {
    res.send({
        rooms
    });
})