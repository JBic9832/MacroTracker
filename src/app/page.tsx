import { useAuth } from "@/lib/auth_context";

export default function Home() {

  const { user } = useAuth();

  // TODO ADD LOGIC FOR SIGNING USER IN

  if (user) {
    return (

      <div>
        <h1>Hello world</h1>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={ }>Sign in with google</button>
      </div>
    )
  }

}
