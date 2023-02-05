function App() {

    return (
        <div className="App flex flex-row">
	        <div className="w-1/2">
		        <img className="object-fill" src={"../images/bg-main-desktop.png"} alt="background"/>
		        <img src={"../images/bg-card-front.png"} alt="card front"/>
		        <img src={"../images/bg-card-back.png"} alt="card back"/>
	        </div>
	        <div className="w-1/2">
		        <div className="flex flex-1 flex-col w-[400px] gap-4">
			        <div className="flex flex-col justify-items-start items-start">
				        <label className="text-[10px] font-bold">CARD HOLDER NAME</label>
				        <input className="border-[1px] border-lightGrayishViolet rounded-md p-1 text-sm" type="text" placeholder="e.g. Jane Appleseed" />
			        </div>
			        <div className="flex flex-col justify-items-start items-start">
				        <label className="text-[10px] font-bold">CARD NUMBER</label>
				        <input className="border-[1px] border-lightGrayishViolet rounded-md p-1 text-sm" type="text" placeholder="e.g. 1234 5678 9123 0000" />
			        </div>
		        </div>
	        </div>
        </div>
    );
}

export default App;
