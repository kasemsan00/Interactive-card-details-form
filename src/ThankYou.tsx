interface Props {
    show: boolean;
}
export default function ThankYou({ show }: Props) {
    return (
        <div className={`w-[400px] ${show ? null : "hidden"}`}>
            <div className="flex flex-1 justify-center items-center">
                <img alt="complete" src={"../images/icon-complete.svg"} />
            </div>
            <div className="my-5">
                <label className="font-semibold text-2xl">THANK YOU!</label>
            </div>
            <label className="text-xs text-darkGrayishViolet">We've added your card details</label>
            <div className="flex flex-col justify-items-start items-start w-full mt-8">
                <button className="bg-veryDarkViolet text-white w-full py-3 rounded-md">
                    Confirm
                </button>
            </div>
        </div>
    );
}
