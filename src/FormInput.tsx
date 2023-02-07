import React, { useRef, useState } from "react";

interface InputForm {
  cardHolderName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}

interface Props {
  inputForm: InputForm;
  setInputForm: (arg0: InputForm) => void;
  inputComplete: boolean;
  setInputComplete: (arg0: boolean) => void;
}

export default function FormInput({
  inputForm,
  setInputForm,
  inputComplete,
  setInputComplete,
}: Props) {
  const cardHolderNameRef = useRef<HTMLLabelElement>(null);
  const cardNumberErrorRef = useRef<HTMLLabelElement>(null);
  const cardExpMonthYear = useRef<HTMLLabelElement>(null);
  const cardExpCVC = useRef<HTMLLabelElement>(null);

  const handleCardHolderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputForm({ ...inputForm, cardHolderName: value });
  };
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const format = cc_format(value);
    setInputForm({ ...inputForm, cardNumber: format });
  };
  const handleCardMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputForm({ ...inputForm, expMonth: value });
  };
  const handleCardYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputForm({ ...inputForm, expYear: value });
  };
  const handleCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputForm({ ...inputForm, cvc: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputForm.cardHolderName.trim() === "") {
      cardHolderNameRef.current?.classList.remove("hidden");
    }
    if (isNaN(Number(inputForm.cardNumber))) {
      cardNumberErrorRef.current?.classList.remove("hidden");
    }
    if (isNaN(Number(inputForm.expMonth))) {
      cardExpMonthYear.current?.classList.remove("hidden");
    }
    if (isNaN(Number(inputForm.expYear))) {
      cardExpMonthYear.current?.classList.remove("hidden");
    }
    if (isNaN(Number(inputForm.cvc))) {
      cardExpCVC.current?.classList.remove("hidden");
      return;
    }
    setInputComplete(true);
  };

  const cc_format = (value: string) => {
    let v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  return (
    <div
      className={`flex flex-col gap-3 xl:w-[500px] lg:w-full sm:w-full ${
        !inputComplete ? null : "hidden"
      }`}
    >
      <div className="flex flex-col justify-items-start items-start inline-block flex">
        <label className="my-1">CARD HOLDER NAME</label>
        <input
          className="focus:outline-veryDarkViolet focus:outline-[1px]
                            border-[1px] border-lightGrayishViolet px-3 py-2
                            rounded-md w-full"
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={handleCardHolderName}
          value={inputForm.cardHolderName}
        />
        <div className="flex flex-1 justify-center items-center min-h-[20px] mt-1">
          <label className="text-xs text-red hidden" ref={cardHolderNameRef}>
            Can't be blank
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-items-start items-start">
        <label className="my-1">CARD NUMBER</label>
        <input
          className="focus:outline-veryDarkViolet focus:outline-[1px]
                            border-[1px] border-lightGrayishViolet px-3 py-2
                            rounded-md w-full"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleCardNumberChange}
          value={inputForm.cardNumber}
        />
        <div className="flex flex-1 justify-center items-center min-h-[20px] mt-1">
          <label className="text-xs text-red hidden" ref={cardNumberErrorRef}>
            Wrong format, numbers only
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-items-start items-start">
        <div className="flex flex-1 flex-row gap-2">
          <div className="flex flex-1 flex-col items-start">
            <label className="my-1">EXP. DATE(MM/YY)</label>
            <div className="flex flex-1 items-start gap-2">
              <input
                className="inline-block focus:outline-veryDarkViolet focus:outline-[1px]
                                border-[1px] border-lightGrayishViolet px-3 py-2
                                rounded-md w-1/2"
                type="text"
                placeholder={"MM"}
                onChange={handleCardMonth}
                value={inputForm.expMonth}
              />
              <input
                className="inline-block focus:outline-veryDarkViolet focus:outline-[1px]
                                border-[1px] border-lightGrayishViolet px-3 py-2
                                rounded-md w-1/2"
                type="text"
                placeholder={"YY"}
                onChange={handleCardYear}
                value={inputForm.expYear}
              />
            </div>
            <div className="flex flex-1 justify-center items-center min-h-[20px] mt-1">
              <label className="text-xs text-red hidden" ref={cardExpMonthYear}>
                Can't be blank
              </label>
            </div>
          </div>
          <div className="flex flex-1 items-start flex-col ">
            <label className="my-1">CVC</label>
            <input
              className="inline-block focus:outline-veryDarkViolet focus:outline-[1px]
                            border-[1px] border-lightGrayishViolet px-3 py-2 sm:w-[180px]
                            rounded-md"
              type="text"
              placeholder={"e.g. 123"}
              onChange={handleCardCVC}
              value={inputForm.cvc}
            />
            <div className="flex flex-1 justify-center items-center min-h-[20px] mt-1">
              <label className="text-xs text-red hidden" ref={cardExpCVC}>
                Can't be blank
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-items-start items-start">
        <button
          className="bg-veryDarkViolet text-white w-full py-3 rounded-md"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
