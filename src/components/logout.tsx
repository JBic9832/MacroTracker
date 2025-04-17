import { logout } from "@/lib/authenticate";
import React from "react";

const LogoutButton = () => {
    return (
        <button onClick={logout} className="cursor-pointer">Sign out</button>
    )
}

export default LogoutButton;