"use client";

import React from "react";
import ContainerLayout from "./ContainerLayout";

const Footer = () => {
   return (
      <footer
         className="
            w-full
            border-t-2
            border-solid
            border-dark
            font-medium
            text-lg
      "
      >
         <ContainerLayout
            className="
               py-8
               flex
               items-center
               justify-between
               "
         >
            <span>
               {new Date().getFullYear()} &copy;
               All Rights Reserved.
            </span>
            <div className="flex items-center">
               Build with
               <span
                  className="
                      text-primary 
                      text-2xl 
                      px-1
                      "
               >
                  &#9825;
               </span>
               By&nbsp;<span>Oluwafunmilayo Dada</span>

            </div>

         </ContainerLayout>
      </footer>
   )
};

export default Footer;
