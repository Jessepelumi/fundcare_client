"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Completed() {
  const router = useRouter();

  function handleOnboardingRedirect() {
    router.push("/onboarding");
  }

  return (
    <div className="w-full h-full px-1 py-20 flex flex-col items-center overflow-scroll">
      <div className="flex items-center gap-2 pb-4">
        <Image src="/images/logo-green.png" alt="logo" height={25} width={25} />
        <b className="text-md">Fund Care</b>
      </div>
      <b className="pb-2">Reset Your Password</b>
      <p className="text-center w-3/4 text-mm pb-5">
        A password reset link has been sent to your mail. Check you inbox (or
        spam folder) and follow the instructions to reset your password.
      </p>

      <Button
        onClick={handleOnboardingRedirect}
        className="!text-mm bg-green-500 hover:bg-green-400 py-5 px-28"
      >
        Go back to Login
      </Button>
      <div className="pb-3"></div>

      <div>
        <span className="text-mm">Didn&apos;t receive the email? </span>
        <Link href="" className="text-mm text-green-500">
          Resend
        </Link>
      </div>
    </div>
  );
}
