import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-end items-center py-4 px-6 h-20 bg-background">
        {" "}
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="h-screen w-full flex items-center flex-col justify-center  space-y-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Joke Tax Chronicles
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-xl text-center">
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>

        <div className="flex justify-center space-x-3 items-center">
          <Link href="/sign-in">
            <Button variant="secondary">Se connecter</Button>
          </Link>

          <Link href="/sign-up">
            <Button>Sinscrire</Button>
          </Link>
        </div>
        <ModeToggle />
      </div>
    </>
  );
}
