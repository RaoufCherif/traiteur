"use client";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import rice from "../../../public/rice.jpg";
import Link from "next/link";
import Inscription from "../inscription/page";
import signInImage from "../../../public/signIn_image.jpeg";
import GoogleSignIn from "../components/GoogleSignIn";

function SignIn() {
  return (
    //

    //
    //     <label htmlFor="" classNameName='p-1'>Email :
    //     <input type="email"  required classNameName='p-1 my-1 mx-4'/>
    //     </label>

    //     <label htmlFor="">Mot de passe :
    //     <input type="password" required classNameName='p-1 my-1 mx-4'/>
    //     </label>

    //    </section>

    //    <section  id='inscription' classNameName='flex flex-col w-1/2 gap-4   bg-gradient-to-b from-purple-800 to-purple-500 p-8 rounded-xl'>
    //     <label htmlFor="" classNameName='p-1 my-1 mx-4'>Email :
    //     <input type="email" required classNameName='p-1 my-1 mx-4'/>
    //     </label>

    //     <label htmlFor="">Mot de passe :
    //     <input type="password" required classNameName='p-1 my-1 mx-4 '/>
    //     </label>

    //     <label htmlFor="">Confimer mot de passe :
    //     <input type="password" required classNameName='p-1 my-1 mx-4'/>
    //     </label>

    //    </section>

    //    </div>

    <div
      className={clsx(
        "flex flex-raw h-screen justify-center ",
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800"
      )}
    >
      <section
        id="signIn"
        className="flex flex-col h-full  gap-4 p-8 justify-center items-center   w-1/2 "
      >
        <div className="flex min-h-full flex-col justify-center lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">
              Connexion
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-blue-700"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-blue-700"
                  >
                    Email adresse
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
                    autocomplete="current-password"
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
              vous n'êtes pas inscrits?
              <Link
                href={{ pathname: "inscription" }}
                className="font-semibold leading-6 text-indigo-100 hover:text-orange-500 text-blue-900"
              >
                {" "}
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

export default SignIn;
