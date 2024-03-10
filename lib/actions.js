'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(prevState, formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if(!meal.title || meal.title.trim() === '') return {message: "Invalid Title"}
    // validation for other fields

    await saveMeal(meal);
    redirect('/meals');
}