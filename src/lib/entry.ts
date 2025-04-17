import { ref, set } from "firebase/database";
import { database } from "./firebase";

export enum Meal {
    Breakfast = 0,
    Lunch,
    Dinner,
    Snack
};

// Defines one meal in a daily journal entry
export interface MealEntry {
    creationDate: Date;
    name: string;
    meal: Meal;
    protien: number;
    fat: number;
    carbs: number;
    calories: number;
};

// Defines a list of entries for the whole day
export interface JournalEntry {
    creationDate: Date;
    meals: MealEntry[];
    totalProtien: number;
    totalFat: number;
    totalCarbs: number;
    totalCalories: number;
};

export interface Goal {
    creationDate: Date;
    targetProtien: number;
    targetFat: number;
    targetCarbs: number;
    targetCalories: number;
}

export const createJournalEntry = (userId) => {
    const entry: JournalEntry = {
        creationDate: new Date(),
        meals: [],
        totalProtien: 0,
        totalFat: 0,
        totalCarbs: 0,
        totalCalories: 0
    };

    set(ref(database, "users/" + userId), entry);
}
