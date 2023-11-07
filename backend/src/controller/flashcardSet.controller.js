import { createNewSet } from "../model/flashcardSet.model.js";


export async function postNewSet(req, res) {
    try {
        const { title, description } = req.body;
        const { userId } = req.user.id;

        const newEntry = {
            title,
            description,
            createdBy: userId,
        };

        const entry = await createNewSet(newEntry);

        res.status(201).send(entry);

    } catch (error) {
        console.error(error);
        res.status(500).end();
    };
};