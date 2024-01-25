"use client";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSignIn } from "@fortawesome/free-solid-svg-icons";

const LogInButton = () => {
 

  return (
    <button  title="Connexion" className="text-gray-300 hover:bg-orange-700  hover:rounded-md hover:text-white text-md font-medium p-1  "  >
      <Link href={"signIn"}><i className="fa-solid fa-right-to-bracket"></i>  <FontAwesomeIcon icon={faSignIn }  className=' w-5 text-white z-50' /></Link>
    </button>
  );
};

export default LogInButton;
