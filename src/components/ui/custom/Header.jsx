import React from "react";
import { Link } from "react-router";
import { Button } from "../button";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <Link to={'/'}>
      <img src="/logo.svg" width={100} height={100}  />
      </Link>

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
         <Link to={'/dashboard'}> <Button variant="outline" >Dashboard</Button></Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
