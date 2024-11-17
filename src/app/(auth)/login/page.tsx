"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [password, setPassword] = useState("");
  const [criteria, setCriteria] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
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

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    console.log("Password Entered:", password);
    redirect("/home");
  }

  return (
    <div className="w-full h-full p-1 flex flex-col items-center overflow-scroll">
      <div className="flex items-center gap-2 pb-4">
        <Image src="/images/logo-green.png" alt="logo" height={25} width={25}/>
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Welcome Back to Fund Care</b>
      <p className="text-center w-3/4 text-mm pb-5">
        Log in to continue supporting health causes or managing your projects.
      </p>
      <Button variant={"outline"} className="!text-mm px-24 py-5">
        <Image src="/images/google-icon.png" alt="google logo" height={20} width={20} /> Continue with
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
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
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

          <div className="flex justify-between py-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms2" disabled />
              <label
                htmlFor="terms2"
                className="!text-mm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Stay signed in
              </label>
            </div>

            <a href="" className="text-mm text-green-500">
              Forgot Password?
            </a>
          </div>

          {isFormValid ? (
            <Button
              type="submit"
              variant={"outline"}
              className="!text-mm w-full py-5"
            >
              Log in
            </Button>
          ) : (
            <Button
              type="button"
              variant={"secondary"}
              className="!text-mm w-full py-5"
              disabled
            >
              Log in
            </Button>
          )}
        </form>
      </Form>
      <div>
        <span className="text-mm">Don&apos;t have an account yet? </span>
        <Link href="/register" className="text-mm text-green-500">
          Create one
        </Link>
      </div>
    </div>
  );
}
