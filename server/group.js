import express from "express";
import groups from "../data/groups.json" assert {type: "json"};

export const groupRouter = express.Router();

groupRouter.get('/all', (req,res) => {
    res.send({
        groups
    });
})