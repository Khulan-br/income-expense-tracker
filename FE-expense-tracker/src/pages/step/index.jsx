import { LogoIcon } from "@/components/icon/LogoIcon";
import { useRouter } from "next/router";
import { useState } from "react";
import { Currency } from "./Currency";
import { Cash } from "./Cash";
import { Done } from "./Done";
import { Button } from "@/components/ui/button";

const styles = {
  grayTag: 'size-6 bg-[#E5E7EB] rounded-full text-center',
  blueTag: 'size-6 bg-[#0166FF] rounded-full text-center text-white',
  Line: 'w-[220px] h-1 bg-[#E5E7EB] absolute left-6 top-2.5 z-[-1]',
  blueLine: 'w-[118px] h-1 bg-[#0166FF] absolute left-6 top-2.5 z-[-1]',
  grayLine: 'w-[220px] h-1 bg-[#0166FF] absolute left-6 top-2.5 z-[-1]',
  container: 'flex flex-col items-center gap-[141px] mt-10',
  topContainer: 'flex flex-col items-center gap-12',
  stepContainer: 'flex gap-12 relative',
  step: 'flex flex-col items-center gap-1',
  showStep: 'flex flex-col items-center w-[352px]',
  button: 'w-full h-12 p-4 rounded-[20px] bg-[#0166FF] text-[#FFFFFF]',
};
const Process = ['Currency', 'Balance', 'Finish'];

const Stepper = () => {
  const router = useRouter();
  const [showSelect, setShowSelect] = useState(1);

  const handlerClick = () => {
    setShowSelect(showSelect + 1);
    if (showSelect >= 3) {
      router.push('/dashboard');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <LogoIcon />
        <div className={styles.stepContainer}>
          {Process.map((el, i) => (
            <div className={styles.step}>
              <div
                className={i + 1 <= showSelect ? styles.blueTag : styles.grayTag}
              >{i + 1}</div>
              <div className={styles.Line}></div>
              <div
                className={showSelect >= 2 ? styles.blueLine : <></>}
              ></div>
              <div
                className={showSelect >= 3 ? styles.grayLine : <></>}
              ></div>
              <p>{el}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.showStep}>
        {showSelect === 1 ? <Currency /> : <></>}
        {showSelect === 2 ? <Cash /> : <></>}
        {showSelect === 3 ? <Done /> : <></>}
      <Button className={styles.button} onClick={handlerClick}>
        Confirm
      </Button>
      </div>
    </div>
  );
};

export default Stepper;