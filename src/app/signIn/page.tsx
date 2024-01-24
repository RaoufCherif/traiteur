"use client";
import clsx from "clsx";
import React, { useState } from "react";
import Image from "next/image";
import rice from "../../../public/rice.jpg";
import Link from "next/link";
import Inscription from "../inscription/page";
import signInImage from "../../../public/logo.png";
import GoogleSignIn from "../components/GoogleSignIn";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

function ConnexionPage() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password:"",
  });

    const handleConnection = async (e : {preventDefault: () => void} ) => {
          e.preventDefault();

          signIn('credentials', {
          
            ...data,
            redirect: false,
          });
            
          router.push("dashboard");
    }
    return(
    <div
      className={clsx(
        "flex flex-raw h-screen justify-center ",
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800",
      )}
    >
      <section
        id="signIn"
        className="flex flex-col h-full  gap-4 p-8 justify-center items-center   w-1/2 "
      >
        <div className="flex min-h-full flex-col justify-center lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">
              Connexion
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleConnection} method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-blue-700"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value }) }
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-blue-700"
                  >
                    Mot de passe
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-100 hover:text-orange-500   text-blue-700"
                    >
                      Mot de passe oublier
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value }) }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-blue-700">
              vous n&apos;êtes pas inscrits?
              <Link
                href={{ pathname: "signUp" }}
                className="font-semibold leading-6 text-indigo-100 hover:text-orange-500 text-blue-900"
              >
                Inscrivez-vous
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Image
        id="image_rice"
        src={signInImage}
        alt="background image"
        className="w-1/2 h-screen"
      />
    </div>
  );
}

export default ConnexionPage;
