"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifySchema } from "@/schema/verify";

import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";

export default function Verify() {
  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof verifySchema>) {
    console.log(data);
    redirect("/success");
  }

  return (
    <div className="w-full h-full p-1 flex flex-col items-center overflow-scroll">
      <div className="flex items-center gap-2 pb-4">
        <Image src="/images/logo-green.png" alt="logo" height={25} width={25} />
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Verify Your Email Address</b>
      <p className="text-center w-3/4 text-mm pb-5">
        We&apos;ve sent a 6-digit verification code to your email. Please enter the
        code to complete your registration.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full max-w-sm items-center gap-1.5 pb-3"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="pin" className="!text-mm">
                  Enter 6-digit verification code
                </Label>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={0}
                      className="p-6 border rounded-md text-lg"
                    />
                    <InputOTPSlot
                      index={1}
                      className="p-6 border rounded-md text-lg"
                    />
                    <InputOTPSlot
                      index={2}
                      className="p-6 border rounded-md text-lg"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator className="text-gray-400" />
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={3}
                      className="p-6 border rounded-md text-lg"
                    />
                    <InputOTPSlot
                      index={4}
                      className="p-6 border rounded-md text-lg"
                    />
                    <InputOTPSlot
                      index={5}
                      className="p-6 border rounded-md text-lg"
                    />
                  </InputOTPGroup>
                </InputOTP>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pb-2"></div>

          <Button type="submit" variant={"secondary"} className="!text-mm py-5">
            Continue
          </Button>
        </form>
      </Form>

      <div>
        <span className="text-mm">Didn&apos;t receive the code? </span>
        <a href="" className="text-mm text-green-500">
          Resend
        </a>
      </div>
    </div>
  );
}
