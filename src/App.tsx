import FormInput from "./FormInput";
import ThankYou from "./ThankYou";
import { useRef, useState } from "react";
import CardTemplateMobile from "./CardTemplateMobile";
import CardTemplateDesktop from "./CardTemplateDesktop";

function App() {
  const [inputComplete, setInputComplete] = useState(false);
  const [inputForm, setInputForm] = useState({
    cardHolderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  return (
    <div className="flex flex-col xl:flex-row inline-block h-screen  ">
      <div
        className={
          "fixed xl:left-0 top-0" +
          "inline-block z-[-1] " +
          "xl:bg-desktop xl:w-[483px] xl:h-full " +
          "lg:bg-desktop lg:w-full lg:h-[240px] " +
          "md:bg-mobile md:w-full md:h-[200px] " +
          "sm:bg-mobile sm:w-full sm:h-[200px] " +
          "bg-mobile h-[240px] w-full"
        }
      />
      <div
        className="w-full h-full flex flex-1 justify-center items-center
	      sm:w-full
				md:w-full
	      lg:w-full
	      xl:w-1/2"
      >
        <CardTemplateDesktop inputForm={inputForm} />
        <CardTemplateMobile inputForm={inputForm} />
      </div>
      <div
        className="
						xl:w-1/2
						lg:w-full
						md:w-full
						sm:w-full sm:px-6 sm:mt-[-150px]
						flex flex-1 justify-center items-center
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
