import { Router } from "express";
import { Person } from "../models/person.model";

const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const personId = req.params.id;

        const person = await Person.findById(personId);
        if (!person) return res.status(404).json({ error: "Person not found" });

        res.json(person);
    } catch (err) {
        res.json(err);
    }
});

router.post("/add-person", async (req, res) => {
    try {
        const newPerson = new Person({ ...req.body });
        await newPerson.save();
        res.json(newPerson);
    } catch (err) {
        res.json(err);
    }
});

router.put("/edit-person/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPerson = req.body;

        const person = await Person.findById(personId);
        if (!person) return res.status(404).json({ error: "Person not found" });

        const updatePersonInDB = await Person.updateOne(
            { _id: personId },
            updatedPerson
        );
        res.json(updatePersonInDB);
    } catch (err) {
        res.json(err);
    }
});

router.delete("/delete-person/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const person = await Person.findById(personId);
        if (!person) return res.status(404).json({ error: "Person not found" });

        const deletePerson = await Person.deleteOne({ _id: personId });
        res.json(deletePerson);
    } catch (err) {
        res.json(err);
    }
});

export default router;
