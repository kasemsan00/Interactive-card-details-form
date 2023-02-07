import FormInput from "./FormInput";
import ThankYou from "./ThankYou";
import { useRef, useState } from "react";

function App() {
  const cardFontRef = useRef<HTMLImageElement>(null);
  const [inputComplete, setInputComplete] = useState(false);
  const [inputForm, setInputForm] = useState({
    cardHolderName: "Kasemsan Chompuwised",
    cardNumber: "0000 0000 0000 0000",
    expMonth: "00",
    expYear: "YY",
    cvc: "000",
  });
  return (
    <div className="flex flex-col xl:flex-row inline-block h-screen w-screen ">
      <div
        className={
          "fixed xl:left-0 top-0 h-full " +
          "inline-block z-[-1] " +
          "xl:bg-desktop xl:w-[483px] xl:h-full " +
          "lg:bg-mobile lg:w-full lg:h-[240px] " +
          "md:bg-mobile md:w-full md:h-[240px] " +
          "sm:bg-mobile sm:w-full sm:h-[240px]"
        }
      />
      <div className="w-full xl:w-1/2 h-full flex flex-1 justify-center items-center">
        <div className="lg:hidden md:hidden xl:flex sm:hidden flex flex-1 flex-col gap-7 justify-center items-center">
          <div className="z-50 w-[447px] h-[245px] p-7 bg-frontCard">
            <img src={"../images/card-logo.svg"} alt={"card logo"} />
            <div className="text-left mt-10">
              <label className={"text-white text-[28px] z-20 tracking-widest"}>
                {inputForm.cardNumber}
              </label>
            </div>
            <div className="text-left w-full mt-6 bottom-0">
              <label className={"text-white text-[16px] z-20"}>{inputForm.cardHolderName}</label>
              <label className={"text-white text-[16px] float-right w z-20"}>
                {inputForm.expMonth}/{inputForm.expYear}
              </label>
            </div>
          </div>
          <div className="float-right z-50 w-[447px] h-[245px] p-7 bg-backCard self-end">
            <div className="text-right mt-[70px] mr-3">
              <label className={"text-white text-[28px] z-20 tracking-widest"}>
                {inputForm.cvc}
              </label>
            </div>
          </div>
        </div>
        <div className="w-[600px] p-8 h-full lg:block md:block xl:hidden">
          <div className="float-right z-30 w-[447px] h-[245px] p-7 bg-backCard self-end">
            <div className="text-right mt-[70px] mr-3">
              <label className={"text-white text-[28px] z-20 tracking-widest"}>
                {inputForm.cvc}
              </label>
            </div>
          </div>
          <div className="absolute mt-28 z-50 w-[447px] h-[245px] p-7 bg-frontCard">
            <img src={"../images/card-logo.svg"} alt={"card logo"} />
            <div className="text-left mt-10">
              <label className={"text-white text-[28px] z-20 tracking-widest"}>
                {inputForm.cardNumber}
              </label>
            </div>
            <div className="text-left w-full mt-6 bottom-0">
              <label className={"text-white text-[16px] z-20"}>{inputForm.cardHolderName}</label>
              <label className={"text-white text-[16px] float-right w z-20"}>
                {inputForm.expMonth}/{inputForm.expYear}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
						xl:w-1/2
						lg:w-full
						md:w-full
						sm:w-full
						flex flex-1 justify-center items-center
						sm:p-6
						"
      >
        <FormInput
          inputForm={inputForm}
          setInputForm={setInputForm}
          inputComplete={inputComplete}
          setInputComplete={setInputComplete}
        />
        <ThankYou show={inputComplete} />
      </div>
    </div>
  );
}

export default App;
