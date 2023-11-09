import express from "express";
import groups from "../data/groups.json"

export const groupRouter = express.Router();

groupRouter.get('/all', (req,res) => {
    res.send({
        groups
    });
})