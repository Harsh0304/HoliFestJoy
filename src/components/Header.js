import React, { useState } from "react";

const Header = ({ setIsClicked, setValue, setShowAnimation }) => {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setValue(text);
    setText("");
    setIsClicked(true);
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      setText("");
    }, 5000);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between h-[6rem] items-center text-white ">
      <a className="text-[1.8rem] mt-2 lg:mt-0 lg:text-3xl font-bold" href="/">
        HoliFest<span className="text-orange-600">Joy</span>
      </a>
      <div>
        <form onSubmit={handleClick}>
          <input
            type="text"
            className="px-3 py-2 bg-slate-800 border-[2px] shadow-2xl border-slate-800  text-white placeholder:text-stone-300 w-[16rem] lg:w-[25rem] outline-none "
            placeholder="Enter your name to see the magic"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-orange-500 px-3   py-2">Create</button>
        </form>
      </div>
      <div className="text-2xl hidden lg:flex font-bold text-white">
        <span className="text-orange-500"> Harsh Mishra</span>
      </div>
    </div>
  );
};

export default Header;
