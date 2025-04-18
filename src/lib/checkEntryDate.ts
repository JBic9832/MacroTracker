import { isToday } from "./currentDate"
import { getJournalEntries } from "./database";

export const currentDayCreated = async (userId: string): Promise<boolean> => {
    let exists: boolean = false;

    const snapshot = await getJournalEntries(userId);

    if (!snapshot.empty) {
        snapshot.forEach(doc => {
            const docDate = doc.data().creationDate.toDate();
            if (isToday(docDate)) {
                exists = true;
            }
        })
    }

    return exists;
};