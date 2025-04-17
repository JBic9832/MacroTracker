'use client'
import { useAuth } from "@/lib/auth_context";


const Journal = () => {

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <h1>loading...</h1>
        )
    }

    if (user) {
        return (
            <div>
                <h1>Here lies the journal</h1>
            </div>
        )
    } else {
        return (
            <h1>Please log in to your account.</h1>
        )
    }


}


export default Journal;