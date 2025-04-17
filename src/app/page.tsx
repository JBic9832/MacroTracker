'use client'
import LogoutButton from "@/components/logout";
import SignInButton from "@/components/sign_in";
import { useAuth } from "@/lib/auth_context";

export default function Home() {

  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (user && !loading) {
    return (
      <div>
        <h1>Hello, {user.displayName}</h1>
        <LogoutButton />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please sign in</h1>
        <SignInButton />
      </div>
    );
  }

}
