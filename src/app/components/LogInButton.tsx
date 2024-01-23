"use client";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSignIn } from "@fortawesome/free-solid-svg-icons";

const LogInButton = () => {
 

  return (
    <Button variant="text" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium " data-testid={'logInButton'} >
      <Link href={"signIn"}><i className="fa-solid fa-right-to-bracket"></i>  <FontAwesomeIcon icon={faSignIn }  className=' w-7 text-white z-50' /></Link>
    </Button>
  );
};

export default LogInButton;
