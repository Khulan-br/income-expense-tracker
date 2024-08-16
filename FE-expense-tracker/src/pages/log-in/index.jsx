import { LogoIcon } from "@/components/icon/LogoIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/router";


const LoginPage = () => {

  // const [error, setError] = useState();
  // const BASE_URL = "http://localhost:8000";
  // const formRef = useRef();

  // const onSubmit = async (event) => {

  //     event.preventDefault();
      
  //     const [id, email, name, currency_type] = formRef.current;

  //     if (password.value != rePassword.value) {
  //         alert("password doesnt match")
  //         return;
  //     }

  //     try {
  //         const res = await axios.post(BASE_URL + "/signup", {id, email, name, currency_type})
  //         console.log(res);
  //     } catch (error) {
  //         setError(error);
  //     }
  // }

  return (
    <div className="grid h-screen w-full grid-cols-2 ">
      <div className="flex items-center justify-center">
        <form
          className="flex flex-col items-center gap-8 w-[384px]">
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
              tupe="email"
              className="w-full bg-[#F3F4F6]"
            />
            <Input
              placeholder="Password"
              tupe="password"
              className="w-full bg-[#F3F4F6]"
            />
            <Button type="submit" className="w-full rounded-2xl bg-[#0166FF]">
              Sign up
            </Button>
          </div>
          <div className="flex gap-4">
            <p>Don’t have account?</p>
            <Link className="text-[#0166FF]" href="/sign-up">Sign up</Link>
          </div>
        </form>
      </div>
      <div className="bg-[#0166FF]" />
    </div>
  );
};

export default LoginPage;
