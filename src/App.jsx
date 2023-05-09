import { useState } from "react";

import logo from "./assets/logo.svg";
import arrow from "./assets/icon-arrow-down.svg";
import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";
import sun from "./assets/icon-sun.svg";
import smile from "./assets/smile.png";

import Heading from "./Heading";
import Content from "./Content";
import Source from "./Source";
import axios from "axios";

function App() {
  const [active, setActive] = useState(true);
  const [searchBar, setSearchBar] = useState("");
  const [results, setResults] = useState(null);
  const [font, setFont] = useState(true);
  const [fontName, setFontName] = useState("Sans Serif");
  const [empty, setEmpty] = useState("");
  const [error, setError] = useState(true);
  console.log(results);

  function themeChange() {
    setActive(!active);
  }
  const fontHandle = () => {
    setFont(!font);
  };
  const fontChoose = (event) => {
    const choosed = event.target.textContent;
    setFontName(choosed);
  };

  const searchWord = async () => {
    if (searchBar === "") {
      const ops = "Whoops, can’t be empty…";
      setEmpty(ops);
    }
    if (searchBar !== "") {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/` + searchBar
      );
      setResults(response.data[0]);
      const reset = "";
      setSearchBar(reset);
    } catch {
      setError(false);
      console.log("error");
      setResults(null);
      const reset = "";
      setSearchBar(reset);
    }
  }
  };

  const heading = () => {
    const audio = results?.phonetics.find((phone) => phone.audio !== "").audio;

    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
  };

  function overlay() {
    setFont(!font);
  }

  return (
    <>
      <main
        className="overflow-x-hidden w-full min-h-screen flex flex-col bg-[#050505] px-6 pt-6 pb-20 transition  duration-700 md:pt-16 md:px-10 md:pb-28 xl:px-[365px]"
        style={{
          background: active ? "#050505" : "white",
          fontFamily:
            fontName === "Sans Serif"
              ? "'Inter', sans-serif"
              : fontName === "Serif"
              ? "'Lora', serif"
              : fontName === "Mono"
              ? "'Inconsolata', monospace"
              : null,
        }}
      >
        <div className="flex flex-row w-full items-center justify-between relative  ">
          <img src={logo} />
          <div
            className={`bg-[#1F1F1F] flex flex-col  z-10 transition  duration-1000   rounded-2xl shadow-[0px_5px_30px_#A445ED;] py-4 pl-6 w-40 h-36 right-28 md:w-[180px] md:h-[150px]  absolute md:right-[133px] top-10 ${
              !active ? "bg-white shadow-[0px_5px_30px_rgba(0,0,0,0.1)]" : null
            }`}
            style={{ display: font ? "none" : "flex" }}
          >
            <span
              onClick={fontChoose}
              className={` font-bold mt-3 cursor-pointer ${
                !active ? "text-[#2D2D2D]" : "text-white"
              } hover:text-[#A445ED] `}
            >
              Sans Serif
            </span>
            <span
              onClick={fontChoose}
              className={` font-bold mt-3  cursor-pointer ${
                !active ? "text-[#2D2D2D]" : "text-white"
              } hover:text-[#A445ED] `}
            >
              Serif
            </span>
            <span
              onClick={fontChoose}
              className={` font-bold mt-3  cursor-pointer ${
                !active ? "text-[#2D2D2D]" : "text-white"
              } hover:text-[#A445ED] `}
            >
              Mono
            </span>
          </div>
          <div
            className="  w-screen min-h-screen absolute"
            onClick={overlay}
            style={{ display: font ? "none" : "block" }}
          ></div>
          <div className="flex flex-row items-center relative">
            <span
              onClick={fontHandle}
              className="font-bold text-base leading-6 text-white xl:text-xl cursor-pointer"
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              {fontName}
            </span>
            <img
              src={arrow}
              onClick={fontHandle}
              className="ml-4 cursor-pointer"
            />
            <div className="h-8 w-[1px] bg-[#E9E9E9] ml-4 md:ml-7"></div>
            <div
              className="w-10 h-5  rounded-xl bg-[#A445ED] ml-4 px-1 py-1 flex flex-row justify-end items-center cursor-pointer md:ml-7 "
              style={{
                justifyContent: active ? "flex-end" : "flex-start",
                background: active ? "#A445ED " : "#757575",
              }}
              onClick={themeChange}
            >
              <div className="bg-white w-[14px] h-[14px] rounded-full  "></div>
            </div>
            <img src={active ? sun : moon} className="ml-3 ml:6" />
          </div>
        </div>
        {/* search bar */}
        <div
          className="w-full py-4 pl-6 pr-4 bg-[#1F1F1F] rounded-2xl mt-6 flex flex-row justify-between items-center md:mt-12"
          style={{ background: active ? "#1F1F1F" : "#F4F4F4" }}
        >
          <input
            value={searchBar}
            type="text"
            onChange={(event) => {
              setSearchBar(event.target.value);
              const reset = "";
              setEmpty(reset);
            }}
            placeholder="Search for any word…"
            className="font-bold text-base leading-5 text-white md:text-xl outline-none w-full "
            style={{
              color: active ? "white" : "#2D2D2D",
              background: active ? "#1F1F1F" : "#F4F4F4",
            }}
          />
          <img src={search} onClick={searchWord} className="cursor-pointer" />
        </div>
        <span className="text-[#FF5252] ml-3 mt-1"> {empty} </span>

        {results?.meanings?.length > 0 ? (
          <>
            <Heading active={active} {...heading()} />
            {results.meanings.map((content, index) => (
              <Content active={active} {...content} key={index} />
            ))}
            <Source active={active} results={results} />
          </>
        ) : results === null ? (
          <div
            className="w-full h-full pt-28 flex flex-col items-center"
            style={{ display: error ? "none" : "flex" }}
          >
            <img src={smile} alt="Smiling emoji" />
            <span
              className="mt-8 font-bold text-base leading-6"
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              No Definitions Found
            </span>
            <span
              className="mt-4 text-center font-normal text-base leading-6"
              style={{ color: active ? "#757575" : "#757575" }}
            >
              Sorry, we couldn't find definitions for the word you were looking
              for. You can try the search again later or head to the web
              instead.
            </span>
          </div>
        ) : null}
      </main>
    </>
  );
}

export default App;
