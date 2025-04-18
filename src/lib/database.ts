import { collection, doc, DocumentData, getDoc, getDocs, QuerySnapshot, setDoc } from "firebase/firestore";
import { JournalEntry } from "./entry";
import { database } from "./firebase";
import { isToday } from "./currentDate";
import { currentDayCreated } from "./checkEntryDate";


export const createJournalEntry = async (userId: string) => {
    const entry: JournalEntry = {
        creationDate: new Date(),
        totalProtien: 0,
        totalFat: 0,
        totalCarbs: 0,
        totalCalories: 0
    };

    const created = await currentDayCreated(userId);

    if (!created) {
        try {
            const userDoc = doc(database, "Users", userId);
            const entriesRef = collection(userDoc, "DailyEntries");

            await setDoc(doc(entriesRef), entry);

            console.log("Created daily entry");
        } catch (error) {
            console.error("Error creating document: ", error);
        }
    } else {
        console.log("Journal exists for today");
    }
};

export const getJournalEntries = async (userId: string): Promise<QuerySnapshot<DocumentData, DocumentData>> => {
    try {

        const userDoc = doc(database, "Users", userId)
        const entriesRef = collection(userDoc, "DailyEntries");
        const snapshot = await getDocs(entriesRef);

        snapshot.forEach(doc => {
            console.log("Doc :", doc);
        })

        return snapshot;

    } catch (error) {
        console.error("Error fetching journal entries ", error);
    }
}