import React from "react";

const Main = ({ value, isClicked, showAnimation }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[85vh] text-center text-white">
      {showAnimation && <div className="color-burst"></div>}
      <div>
        <h1 className="text-6xl w-[80%] lg:w-[60%] mx-auto">
          {isClicked && value ? (
            <div>
              Happy Holi,{" "}
              <span className="text-orange-500 font-bold">{value}</span>. Let's
              Paint the{" "}
              <span className="text-orange-500 font-bold">Town Together.</span>
            </div>
          ) : (
            <div>
              Discover the Magic of{" "}
              <span className="text-orange-500 font-bold">Holi's Colors</span>
            </div>
          )}
        </h1>
        <p className="w-[60%] mx-auto text-xl mt-5 text-slate-200">
          Welcome to HoliFestJoy, your ultimate destination to immerse yourself
          in the joyous festivities of Holi, the festival of colors!
        </p>
        <div className="">
          <button className="bg-orange-600 px-3 py-2 border-2 border-orange-600">
            Copy & Share
          </button>
          <button className="border-2 px-3 py-2 ml-3 mt-5">
            Know About Holi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
