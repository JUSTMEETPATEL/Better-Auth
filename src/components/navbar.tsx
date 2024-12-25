import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="border-b px-4">
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <h1 className="font-bold">Secure App</h1>
        <div>
            <Link href='/signin' className={buttonVariants()}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
