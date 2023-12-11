import React from "react";
import Image from "next/image";
import resaeu from "public/reseau.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

const Reseau = () => {
  return (
    // <Image
    // src={resaeu}
    // alt="background image"
    // width={200}
    // height={200}
    // className="relative cursor-pointer rounded-2xl transition ease-in-out p-1  hover:scale-110
    // focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
    // focus:ring-offset-gray-800 	 "
    //  />
    <>
      <Link href="/">
        <div className="flex flex-raw gap-2">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-purple-300 z-50"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="  text-purple-300 z-50"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="  text-purple-300 z-50"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="  text-purple-300 z-50"
          />
        </div>
      </Link>
    </>
  );
};

export default Reseau;
