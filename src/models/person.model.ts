import { model, Schema } from "mongoose";

export type Person = {
    name: string;
    surname: string;
    city: string;
    address: string;
    phone: string;
};

const personSchema = new Schema<Person>(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        city: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

export const Person = model<Person>("Person", personSchema);
