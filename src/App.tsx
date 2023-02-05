import FormInput from "./FormInput";
import ThankYou from "./ThankYou";
import { useState } from "react";

function App() {
    const [inputComplete, setInputComplete] = useState(false);
    return (
        <div className="flex flex-row h-screen">
            <img
                className="fixed left-0 h-full"
                src={"../images/bg-main-desktop.png"}
                alt="background"
            />
            <div className="w-1/2 h-full flex flex-1 justify-center items-center">
                <div className="flex flex-1 flex-col gap-7 justify-center items-center">
                    <div className="mr-20">
                        <img
                            className="relative"
                            src={"../images/bg-card-front.png"}
                            alt="card front"
                        />
                    </div>
                    <div className="ml-20">
                        <img
                            className="relative"
                            src={"../images/bg-card-back.png"}
                            alt="card back"
                        />
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-1 justify-center items-center">
                <FormInput inputComplete={inputComplete} setInputComplete={setInputComplete} />
                <ThankYou show={inputComplete} />
            </div>
        </div>
    );
}

export default App;
