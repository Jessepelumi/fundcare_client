"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Success() {
  const router = useRouter();

  function handleOnboardingRedirect() {
    router.push("/onboarding");
  }

  return (
    <div className="w-full h-full px-1 py-20 flex flex-col items-center overflow-scroll">
      <div className="flex items-center pb-4">
        <img src="/images/logo-green.png" alt="logo" className="pr-2" />
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Email Verified Successfully!</b>
      <p className="text-center w-3/4 text-mm pb-5">
        Your email has been verified, and your account is now active. You're all
        set to start supporting and managing health initiatives on Fund Care.
      </p>

      <Button
        onClick={handleOnboardingRedirect}
        className="!text-mm bg-green-500 hover:bg-green-400 py-5 px-24"
      >
        Continue to Onboarding
      </Button>
    </div>
  );
}