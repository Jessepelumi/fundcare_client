"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { onboardingSchema } from "@/schema/onboarding";
import OnboardingTile from "@/components/custom/onbaordingTile";
import Image from "next/image";

export default function Onboarding() {
  const form = useForm<z.infer<typeof onboardingSchema>>({
    resolver: zodResolver(onboardingSchema),
  });

  function onSubmit(data: z.infer<typeof onboardingSchema>) {
    console.log(data);
  }

  return (
    <div className="h-screen flex flex-col items-center pt-16">
      <div className="flex items-center gap-2 pb-4">
        <Image src="/images/logo-green.png" alt="logo" height={25} width={25} />
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Welcome to Fund Care!</b>
      <p className="text-center w-1/4 !text-mm text-gray-400 pb-5">
        Let&apos;s get started by slecting your role. This helps us personalize your
        experience.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3 ">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-start justify-between border p-3 rounded-lg space-x-3 space-y-0">
                      <OnboardingTile
                        role="Individual Donor"
                        about="Support health causes that matter to you and make a real impact."
                      />
                      <FormControl>
                        <RadioGroupItem value="all" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="flex items-start justify-between border p-3 rounded-lg space-x-3 space-y-0">
                      <OnboardingTile
                        role="Health Organizations"
                        about="Create campaigns, raise funds and reach a broader audience for your health project."
                      />
                      <FormControl>
                        <RadioGroupItem value="mentions" />
                      </FormControl>
                    </FormItem>
                    <FormItem className="flex items-start justify-between border p-3 rounded-lg space-x-3 space-y-0">
                      <OnboardingTile
                        role="Medical Professionals"
                        about="Connect with peers, mentor and contribute to health initiatives."
                      />
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"secondary"}
            className="py-5 !text-mm w-full"
            disabled
          >
            Continue
          </Button>
        </form>
      </Form>

      <div className="pt-3">
        <span className="text-mm">Not sure which role to choose? </span>
        <a href="" className="text-mm text-green-500">
          Learn more
        </a>
      </div>
    </div>
  );
}
