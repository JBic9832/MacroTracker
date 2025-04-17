import { signIn } from "@/lib/authenticate";
import React from "react";

const SignInButton = () => {
    return (
        <button onClick={signIn} className="inline-flex items-center gap-2 cursor-pointer bg-white text-black font-bold p-2 shadow-md">
            <img src="google.svg" alt="" width={32} /> <span>Google sign in</span>
        </button>
    );
}

export default SignInButton;