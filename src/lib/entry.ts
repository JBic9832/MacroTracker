import { collection, doc, setDoc } from "firebase/firestore";
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

// Will hold a collection of entries in the database
export interface JournalEntry {
    creationDate: Date;
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


