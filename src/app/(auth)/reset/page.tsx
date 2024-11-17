"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { passwordResetSchema } from "@/schema/passwordReset";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";

export default function ResetPassword() {
  const form = useForm<z.infer<typeof passwordResetSchema>>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof passwordResetSchema>) {
    console.log(values);
    redirect("/login");
  }

  return (
    <div className="w-full h-full p-1 flex flex-col items-center overflow-scroll">
      <div className="flex items-center gap-2 pb-4">
        <Image src="/images/logo-green.png" alt="logo" height={25} width={25} />
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Reset Your Password</b>
      <p className="text-center w-3/4 text-mm pb-5">
        Enter your registered email address, and we&apos;ll send you
        instructions to reset your password.
      </p>

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
                  Email Address
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

          {form.formState.isValid ? (
            <Button
              type="submit"
              variant={"outline"}
              className="!text-mm text-white w-full py-5 bg-green-500"
            >
              Reset Password
            </Button>
          ) : (
            <Button
              type="submit"
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
