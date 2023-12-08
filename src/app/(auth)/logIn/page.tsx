"use client";
import SignInform from "@/app/components/forms/SignInform";
import clsx from "clsx";
import { stringify } from "querystring";
import React, { useState } from "react";

function LogIn() {
  return (
    <main
      className={clsx(
        "flex flex-col  justify-center items-center h-full ",
        "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900"
      )}
    >
      <SignInform />
    </main>
  );
}

export default LogIn;
