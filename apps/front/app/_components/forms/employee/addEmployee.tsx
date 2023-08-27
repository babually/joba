"use client"

import React from "react";
import { Button, Input } from "@nextui-org/react";
import CustomModal from "../../customModal";
import { Formiz, useForm } from "@formiz/core";
import { User } from "lucide-react";





export function AddEmpolyeeForm(): JSX.Element {
  const form = useForm();

    return (
      <>
        <div  className="bg-white">
          <Formiz connect={form}>
             <Input
               type="text"
               label="Employee FullName"
               placeholder="Enter Employee FullName"
               labelPlacement="outside"
               endContent={<User/>}

             />
          </Formiz>
          <h1>This is Employee Form Page</h1>
        </div>
        
      </>
        
    );
}