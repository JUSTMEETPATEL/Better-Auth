"use client";

import { redirect } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { handler } from "./action";

const Page = () => {
  const session = useSession();
  if (!session) {
    return redirect("/");
  }

  return (
    <div>
      <Button
          onClick={handler}
          className="w-full mt-4"
          variant="outline"
        >
          Add a passkey
        </Button>
    </div>
  );
};

export default Page;
