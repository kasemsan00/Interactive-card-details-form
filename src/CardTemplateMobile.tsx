interface Props {
  inputForm: {
    cardHolderName: string;
    cardNumber: string;
    expMonth: string;
    expYear: string;
    cvc: string;
  };
}

export default function CardTemplateMobile({ inputForm }: Props) {
  return (
    <div
      className="mt-20 w-[375px]
	    sm:w-[375px] sm:mt-[40px]
	    md:w-[640px]
			lg:w-[640px]
			xl:w-[640px]
			w-[375px]
	    sm:p-0
	    md:p-8
			lg:p-8
			xl:p-8
      p-2 h-full lg:block md:block xl:hidden"
    >
      <div
        className="absolute z-30 w-[447px] h-[245px]
	      sm:p-0 sm:w-[280px] sm:right-0 sm:mr-[20px]
		    md:p-0 md:w-[640px] md:right-[5%]
				lg:p-0 lg:w-[640px] lg:right-[30%]
				xl:p-0 xl:w-[640px] xl:right-[30%]
        self-end"
      >
        <img src={"../images/bg-card-back.png"} alt="back card" />
        <div className="text-right mt-[70px] mr-3">
          <label className={"text-white text-[28px] z-20 tracking-widest"}>{inputForm.cvc}</label>
        </div>
      </div>
      <div
        className="absolute mt-[138px] z-50
        sm:left-[0] sm:w-[280px] sm:mt-[80px] sm:ml-5
        md:left-[0]
        lg:left-[20%]
        xl:left-[20%]
      "
      >
        <div
          className="absolute p-7 w-full h-full
        sm:p-4
        md:p-4
        lg:p-7
        xl:p-7
        "
        >
          <img className="sm:w-[60px]" src={"../images/card-logo.svg"} alt={"card logo"} />
          <div
            className="text-left
          sm:mt-6
          md:mt-6

          "
          >
            <label
              className="text-white
            text-[30px]
            sm:text-[15px]
            tracking-widest"
            >
              {inputForm.cardNumber}
            </label>
          </div>
          <div className="text-left flex flex-1 items-center w-full mt-3 bottom-0 flex flex-1">
            <label
              className="self-start text-white
             text-[20px]
             sm:text-[12px]
             md:text-[12px]
             z-20"
            >
              {inputForm.cardHolderName}
            </label>
            <label
              className="absolute right-0 mr-6 text-white
							text-[20px]
              sm:text-[12px]
              md:text-[12px]
              z-20"
            >
              {inputForm.expMonth}/{inputForm.expYear}
            </label>
          </div>
        </div>
        <img src={"../images/bg-card-front.png"} alt="front card" />
      </div>
    </div>
  );
}
