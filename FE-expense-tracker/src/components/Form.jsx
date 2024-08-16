import { LogoIcon } from "./icon/LogoIcon";
import { Button } from "./ui/button";
import { forwardRef, useRef } from "react";
import { Input } from "./ui/input";
import Link from "next/link";

export const Form = forwardRef(({ onSubmit }, ref ) => {

  return (
    <form className="flex flex-col items-center gap-6" onSubmit={onSubmit} ref={ref}>

      <LogoIcon />

      <div className="space-y-4 pb-7 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Create Geld account
        </h1>
        <p className="text-slate-700">
        Sign up below to create your Wallet account
        </p>
      </div>

      <div className="w-full space-y-3">
        <Input placeholder="Name" className="w-full bg-[#F3F4F6]" />
        <Input
          placeholder="Email"
          type="email"
          className="w-full bg-[#F3F4F6]"
        />
        <Input
          placeholder="Password"
          type="password"
          className="w-full bg-[#F3F4F6]"
        />
        <Input
          placeholder="Re-password"
          type="password"
          className="w-full bg-[#F3F4F6]"
        />
        <Button  className="w-full rounded-2xl bg-[#0166FF]">
          Sign up
        </Button>
      </div>
      <div className="flex gap-4">
        <p>Already have account?</p>
        <Link href="/log-in" className="text-[#0166FF]">Log in</Link>
      </div>
    </form>
  );
});

Form.displayName = "Form"
