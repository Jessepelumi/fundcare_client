"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schema/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordStrength from "@/components/custom/passwordStrenght";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [password, setPassword] = useState("");
  const [criteria, setCriteria] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setCriteria({
      minLength: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      specialChar: /[!@#$%^&*]/.test(value),
    });
  };

  const isPasswordValid = Object.values(criteria).every(Boolean);
  const isFormValid = form.formState.isValid && isPasswordValid;

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
    console.log("Password Entered:", password);
    redirect("/verify");
  }

  return (
    <div className="w-full h-full p-1 flex flex-col items-center overflow-scroll">
      <div className="flex items-center pb-4">
        <img src="/images/logo-green.png" alt="logo" className="pr-2" />
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Join the Fund Care Community</b>
      <p className="text-center w-3/4 text-mm pb-5">
        Create an account to support health causes, connect with professionals,
        or fund your community&apos;s healthcare projects.
      </p>
      <Button variant={"outline"} className="!text-mm px-24 py-5">
        <img src="/images/google-icon.png" alt="google logo" /> Continue with
        Google
      </Button>
      <div className="p-3 flex items-center gap-2 w-full max-w-sm">
        <div className="flex-grow h-px bg-gray-400"></div>
        <span className="text-mm text-gray-600">OR</span>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full max-w-sm items-center gap-1.5 pb-3"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <div className="grid w-full max-w-sm items-center gap-1.5 pb-3">
                <Label htmlFor="fullName" className="!text-mm">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  placeholder="John Smith"
                  {...field}
                  className="!text-mm"
                />
                <FormMessage className="text-sm" />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div className="grid w-full max-w-sm items-center gap-1.5 pb-3">
                <Label htmlFor="password" className="!text-mm">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="john.smith@fundcare.com"
                  {...field}
                  className="!text-mm"
                />
                <FormMessage className="text-sm" />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <div className="grid w-full max-w-sm items-center gap-1.5 pb-0">
                <Label htmlFor="password" className="!text-mm">
                  Create Password
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
              className="!text-mm w-full py-5"
            >
              Create Account
            </Button>
          ) : (
            <Button
              type="button"
              variant={"secondary"}
              className="!text-mm w-full py-5"
              disabled
            >
              Create Account
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
