import { Form } from "@/components/Form";
import axios from "axios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const SignupPage = () => {
    
  const router = useRouter();
  const [error, setError] = useState();
  const BASE_URL = "http://localhost:8000";
  const formRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();

    const [name, email, password, rePassword, avatar_img, currency_type] =
      formRef.current;

    if (password.value != rePassword.value) {
      alert("password doesnt match");
      return;
    }
    try {
      console.log("working 1");

      const res = await axios.post(BASE_URL + "/auth/signup", {
        name: name.value,
        email: email.value,
        password: password.value,
        avatar_img: avatar_img.value,
        currency_type: currency_type.value,
      });
      console.log("working");
      console.log(res);

      if (res) {
        router.push("/step");
        return;
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="grid h-screen w-full grid-cols-2 ">
      <div className="flex items-center justify-center">
        <Form
          className="flex flex-col items-center gap-7 w-[384px]"
          onSubmit={onSubmit}
          ref={formRef}
        />
      </div>
      <div className="bg-[#0166FF]" />
    </div>
  );
};

export default SignupPage;
