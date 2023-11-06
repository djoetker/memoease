import { Schema, model } from "mongoose";

const flashcardSetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    flashcards: [{
        type: Schema.Types.ObjectId,
        ref: "Flashcard"
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    isPublic: {
        type: Boolean,
        default: false
    },
});

const FlashcardSet = model("FlashcardSet", flashcardSetSchema);

export default FlashcardSet;

export async function createNewSet(data) {
    const newSet = new FlashcardSet(data);
    const entry = await newSet.save();
    return entry;
};

export async function getSetsByUserId(userId) {
    const sets = await FlashcardSet.find({ createdBy: userId });
    return sets;
};

export async function getSetBySetId(setId) {
    const set = await FlashcardSet.findOne({ _id: setId });
    return set;
};

export async function getPublicSets() {
    const publicSets = await FlashcardSet.find({ isPublic: true });
    return publicSets;
};

