"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "./Reseau";
import { redirect } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logo.png";

import LogInButton from "./LogInButton";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import LogOutButton from "./LogOutButton";
import SignUpButton from "./SignUpButton";

const Header = () => {
  const { data: session, status } = useSession();

  const logOut = async () => {
    await signOut();
  };

  const router = useRouter();

  const handleclick = () => {
    router.push("signIn");
  };

  return (
    <div className="flex flex-raw   header ">
      <div className=" absolute left-0 ml-8 mt-8  text-white   hover:bg-orange-700 p-2 rounded-md"> 
      <a href="/"> Clafête </a></div>
      <nav className="bg-gray-800   p-4  ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.
            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block h-6 w-96"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-left justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href="#"
                    className=" text-white hover:bg-orange-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Accueil
                  </a>
                  <a
                    href="#sectionSale"
                    className="text-gray-300 hover:bg-orange-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Salé
                  </a>
                  <a
                    href="#sectionSucre"
                    className="text-gray-300 hover:bg-orange-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Sucré
                  </a>
                  <a
                    href="#patisserie"
                    className="text-gray-300 hover:bg-orange-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Patisserie
                  </a>
                  <a
                    href="#traditionnel"
                    className="text-gray-300 hover:bg-orange-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Traditionnel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className=" absolute right-0 inset-y-0  flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0  mt-12 ">
        {status === "authenticated" ? (
          
            <div className=" absolute text-gray-300 right-0 hover:text-white rounded-md  py-2 text-sm font-medium  ">
              {session?.user.nom}
              <LogOutButton />
            </div>
         
          
        ) : (
          <div className=" absolute right-0 flex gap-6  pr-12">
            <LogInButton />
            <SignUpButton />
         
            </div>
        
        )}
      </div>
    </div>
  );
};

export default Header;
