import React from "react";
import play from "./assets/icon-play.svg";
import { useRef } from "react";

export const Heading = ({ active, results, word, phonetic }) => {
  const ref = useRef();

  const handlePlay = () => {
    ref.current?.play();
  };
  const findAudio = () => {
    const audio = results?.phonetics?.find((phone) => phone.audio !== "");
    return audio?.audio;
  };

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center mt-6 md:mt-12">
        <div className="flex flex-col ">
          <span
            className="text-white text-xl leading-10 font-bold md:text-6xl"
            style={{ color: active ? "white" : "#2D2D2D" }}
          >
            {word}
          </span>
          <span className="text-[#A445ED] mt-2 font-normal text-base leading-6 md:mt-3 md:text-2xl md:leading-7">
            {phonetic}
          </span>
        </div>
        {results?.phonetics?.map((sound, index) => {
          if (sound.audio !== "" && index === 1) {
            // only show the first non-empty audio element
            return (
              <>
                <img
                  src={play}
                  className="w-12 h-12 md:w-20 md:h-20 cursor-pointer"
                  onClick={handlePlay}
                />
                <audio className="hidden" ref={ref} src={findAudio()} />
              </>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default Heading;
