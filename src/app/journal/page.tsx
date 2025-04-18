'use client'
import { useAuth } from "@/lib/auth_context";
import { currentDayCreated } from "@/lib/checkEntryDate";
import { createJournalEntry, getJournalEntries } from "@/lib/database";
import { useEffect, useState } from "react";


const Journal = () => {

    const [dailyEntryExists, setExists] = useState(false);

    const { user, loading } = useAuth();

    const handleCreateEntry = async () => {
        await createJournalEntry(user.uid);
        const entries = await getJournalEntries(user.uid);
    }

    useEffect(() => {
        const checkDate = async () => {
            const exists = await currentDayCreated(user.uid);
            setExists(exists);
        }


        if (user) {
            checkDate();
        }

    });

    if (loading) {
        return (
            <h1>loading...</h1>
        )
    }

    if (user) {
        return (
            <div>
                <h1>Here lies the journal</h1>
                {!dailyEntryExists && (
                    <div>
                        <p>It looks like no entry exists for today</p>
                        <button onClick={handleCreateEntry}>Create todays entry</button>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <h1>Please log in to your account.</h1>
        )
    }


}


export default Journal;