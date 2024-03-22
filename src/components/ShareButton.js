import React from "react";
import { IoMdShareAlt } from "react-icons/io";

const ShareButton = ({ url, title }) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          url: url,
        });
        console.log("Shared successfully");
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button
      className="fixed bottom-10 right-10 text-3xl border-2 p-2 rounded-full hover:bg-orange-500 text-white"
      onClick={handleShare}
    >
      <IoMdShareAlt />
    </button>
  );
};

export default ShareButton;
