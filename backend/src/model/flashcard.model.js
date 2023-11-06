import { Schema, model } from "mongoose";

const flashcardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: "Vocabularies"
    },
    isLearned: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

const Flashcard = model("Flashcard", flashcardSchema);

export default Flashcard;

export async function createNewCard(data) {
    const newCard = new Flashcard(data);
    const entry = await newCard.save();
    return entry;
};

