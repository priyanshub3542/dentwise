import { Button } from "@/components/ui/button";
import { SignUpButton, SignOutButton, Show } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return <div>
    <h1>Home page</h1>
    <Show when="signed-out">
      <SignUpButton mode="modal">
        <Button>Sign Up</Button>
      </SignUpButton>
    </Show>

    <Show when="signed-in">
      <SignOutButton>
        <button>Logout</button>
      </SignOutButton>
    </Show>
  </div>
}
