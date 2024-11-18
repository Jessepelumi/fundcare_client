"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, FormField} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { newPasswordSchema } from "@/schema/newPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordStrength from "@/components/custom/passwordStrenght";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [criteria, setCriteria] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
    },
    mode: "onSubmit",
  });

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setCriteria({
      minLength: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      specialChar: /\W/.test(value),
    });

    form.trigger("password");
  };

  const isPasswordValid = Object.values(criteria).every(Boolean);
  const isFormValid = form.formState.isValid && isPasswordValid;

  function onSubmit(values: z.infer<typeof newPasswordSchema>) {
    console.log(values);
    console.log("Password Entered:", password);
    redirect("/login");
  }

  return (
    <div className="w-full h-full p-1 flex flex-col items-center overflow-scroll">
      <div className="flex items-center gap-2 pb-4">
        <Image src="/images/logo-green.png" alt="logo" height={25} width={25} />
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Enter New Password</b>
      <p className="text-center w-3/4 text-mm pb-5">
        Enter a new password to reset the old one.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full max-w-sm items-center gap-1.5 pb-3"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <div className="grid w-full max-w-sm items-center gap-1.5 pb-0">
                <Label htmlFor="password" className="!text-mm">
                  Create New Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password (min. 8 characters)"
                  {...field}
                  className="!text-mm"
                  onChange={(e) => {
                    field.onChange(e);
                    handlePasswordChange(e.target.value);
                  }}
                />
              </div>
            )}
          />
          <p className="text-mm text-gray-400">Password Strenght</p>
          <div className="border border-green-300 rounded-lg p-2 bg-green-50">
            <PasswordStrength
              text="At least 8 characters long"
              isValid={criteria.minLength}
            />
            <PasswordStrength
              text="Includes uppercase and lowercase"
              isValid={criteria.uppercase && criteria.lowercase}
            />
            <PasswordStrength
              text="Contains at least one number"
              isValid={criteria.number}
            />
            <PasswordStrength
              text="Has one special character (e.g., !, @, #, $)"
              isValid={criteria.specialChar}
            />
          </div>
          <div className="pb-3"></div>
          {isFormValid ? (
            <Button
              type="submit"
              variant={"outline"}
              className="!text-mm text-white w-full py-5 bg-green-500 hover:bg-green-400 hover:text-white"
            >
              Reset Password
            </Button>
          ) : (
            <Button
              type="button"
              variant={"secondary"}
              className="!text-mm w-full py-5"
              disabled
            >
              Reset Password
            </Button>
          )}
        </form>
      </Form>
      <div>
        <span className="text-mm">Already have an account? </span>
        <Link href="/login" className="text-mm text-green-500">
          Sign in
        </Link>
      </div>
    </div>
  );
}
