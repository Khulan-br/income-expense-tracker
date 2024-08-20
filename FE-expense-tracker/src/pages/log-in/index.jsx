import { LogoIcon } from "@/components/icon/LogoIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const formRef = useRef();
  const router = useRouter();
  const [error, setError] = useState();
  const BASE_URL = "http://localhost:8000";

  const onSubmit = async (event) => {
    event.preventDefault();
    const [email, password] = formRef.current;

    try {
      console.log(email.value, password.value)
  
      const res = await axios.post('http://localhost:8000/auth/signin', {email: email.value, password: password.value});
      console.log(res)

      if (res.success = true) {
        router.push("/dashboard/main");
      }

    } catch (error) {
      setError(error);
      console.log(error)
    }
  };

  return (
    <div className="grid h-screen w-full grid-cols-2 ">
      <div className="flex items-center justify-center">
        <form
          className="flex flex-col items-center gap-8 w-[384px]"
          onSubmit={onSubmit}
          ref={formRef}
        >
          <LogoIcon />

          <div className="space-y-4 pb-5 text-center">
            <h1 className="text-2xl font-semibold text-slate-900">
              Create Geld account
            </h1>
            <p className="text-slate-700">
              Welcome back, Please enter your details
            </p>
          </div>

          <div className="w-full space-y-3">
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
            <Button type="submit" className="w-full rounded-2xl bg-[#0166FF]">
              Log in
            </Button>
          </div>
          <div className="flex gap-4">
            <p>Don’t have account?</p>
            <Link className="text-[#0166FF]" href="/sign-up">
              Sign up
            </Link>
          </div>
        </form>
      </div>
      <div className="bg-[#0166FF]" />
    </div>
  );
};

export default LoginPage;
