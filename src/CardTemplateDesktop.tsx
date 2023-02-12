interface Props {
  inputForm: {
    cardNumber: string;
    cardHolderName: string;
    expMonth: string;
    expYear: string;
    cvc: string;
  };
}

export default function CardTemplateDesktop({ inputForm }: Props) {
  return (
    <div className="hidden lg:hidden md:hidden xl:flex sm:hidden flex flex-1 flex-col gap-7 justify-center items-center">
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
          <label className={"text-white text-[28px] z-20 tracking-widest"}>{inputForm.cvc}</label>
        </div>
      </div>
    </div>
  );
}
