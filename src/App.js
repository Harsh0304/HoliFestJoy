import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ShareButton from "./components/ShareButton";

function App() {
  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const shareUrl = "https://holi-fest-joy.netlify.app/";
  const shareTitle = "Check out this awesome website!";

  return (
    <div className={!showAnimation ? "bg" : value ? "bg__gif" : "bg"}>
      <div className="w-[95%] lg:w-[90%] h-[95vh] mx-auto ">
        <Header
          setValue={setValue}
          setIsClicked={setIsClicked}
          setShowAnimation={setShowAnimation}
        />
        <Main
          value={value}
          isClicked={isClicked}
          showAnimation={showAnimation}
        />
        <ShareButton url={shareUrl} title={shareTitle} />
      </div>
    </div>
  );
}

export default App;
