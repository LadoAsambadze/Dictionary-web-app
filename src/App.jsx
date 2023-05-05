import { useState } from "react";
import axios, { isAxiosError } from "axios";
import logo from "./assets/logo.svg";
import arrow from "./assets/icon-arrow-down.svg";
import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";
import play from "./assets/icon-play.svg";
import sun from "./assets/icon-sun.svg";

function App() {
  const [active, setActive] = useState(true);
  const [searchBar, setSearchBar] = useState("qegqeg");
  const [data, setData] = useState(null);

  const searchWord = async (event) => {
    event.preventDefault();
    const reset = "";
    setSearchBar(reset);
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchBar}`
      );
      const info = response.data;
      setData(info);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  function themeChange() {
    setActive(!active);
  }

  return (
    <>
      <main
        className=" w-screen min-h-screen flex flex-col bg-[#050505] px-6 pt-6 pb-20 transition  duration-700
        md:pt-16 md:px-10 md:pb-28 xl:px-[365px]"
        style={{ background: active ? "#050505" : "white" }}
      >
        <div className="flex flex-row w-full items-center justify-between ">
          <img src={logo} />
          <div className="flex flex-row items-center ">
            <span
              className="font-bold text-base leading-6 text-white xl:text-xl"
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              Sans Serif
            </span>
            <img src={arrow} className="ml-4 cursor-pointer" />
            <div
              className="h-8 w-[1px] bg-[#E9E9E9] ml-4
            md:ml-7"
            ></div>
            <div
              className="w-10 h-5  rounded-xl bg-[#A445ED] ml-4 px-1 py-1 flex flex-row justify-end items-center cursor-pointer 
              md:ml-7 "
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
          className="w-full py-4 pl-6 pr-4 bg-[#1F1F1F] rounded-2xl mt-6 flex flex-row justify-between items-center
          md:mt-12"
          style={{ background: active ? "#1F1F1F" : "#F4F4F4" }}
        >
          <input
            value={searchBar}
            type="text"
            onInput={(event) => setSearchBar(event.target.value)}
            placeholder="Search for any word…"
            className="font-bold text-base leading-5 text-white md:text-xl outline-none w-full "
            style={{
              color: active ? "white" : "#2D2D2D",
              background: active ? "#1F1F1F" : "#F4F4F4",
            }}
          />

          <img src={search} onClick={searchWord} />
        </div>
        {/* get word, can play */}
        <div className="w-full flex flex-row justify-between items-center mt-6 md:mt-12">
          <div className="flex flex-col ">
            <span
              className="text-white text-xl leading-10 font-bold md:text-6xl"
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              {searchBar}
            </span>
            <span className="text-[#A445ED] mt-2 font-normal text-base leading-6 md:mt-3 md:text-2xl md:leading-7">
              /ˈkiːbɔːd/
            </span>
          </div>
          <img
            src={play}
            className="w-12 h-12 md:w-20 md:h-20 cursor-pointer"
          />
        </div>
        {/* noun */}
        <div className="w-full flex flex-row items-center mt-10">
          <span
            className="text-white font-bold text-base leading-5 md:text-2xl md:leading-6"
            style={{ color: active ? "white" : "#2D2D2D" }}
          >
            noun
          </span>
          <hr
            className="bg-[#3A3A3A] w-full ml-5"
            style={{ background: active ? "#3A3A3A" : "#E9E9E9" }}
          />
        </div>
        <div className="mt-8 w-full flex flex-col">
          <span className="font-normal text-base leading-5 text-[#757575] md:text-xl">
            Meaning
          </span>
          <ul className=" list-disc pl-5  mt-4">
            <li
              className="text-white md:text-xl "
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li
              className="text-white mt-4 md:text-xl"
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li
              className="text-white mt-4 md:text-xl"
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device. vbnm,
            </li>
          </ul>
          <div className="w-full flex flex-row items-center mt-7">
            <span className="font-normal text-base leading-5 text-[#757575] md:text-xl">
              Synonyms
            </span>
            <span className="ml-6 text-[#A445ED] text-base font-bold leading-5 md:text-xl">
              Electronic keyboard
            </span>
          </div>
        </div>
        {/* verb */}
        <div className="w-full flex flex-row items-center mt-10">
          <span
            className="text-white font-bold text-base leading-5 md:text-2xl"
            style={{ color: active ? "white" : "#2D2D2D" }}
          >
            verb
          </span>
          <hr
            className="bg-[#3A3A3A] w-full ml-5"
            style={{ background: active ? "#3A3A3A" : "#E9E9E9" }}
          />
        </div>
        <div className="mt-8 w-full flex flex-col">
          <span className="font-normal text-base leading-5 text-[#757575] md:text-xl">
            Meaning
          </span>
          <ul className=" list-disc pl-5  mt-4">
            <li
              className="text-white md:text-xl  "
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              To type on a computer keyboard.
            </li>
            <span className="font-normal text-base leading-5 text-[#757575] md:text-xl ">
              “Keyboarding is the part of this job I hate the most.”
            </span>
          </ul>
        </div>
        <hr className="bg-[#3A3A3A] w-full mt-8" />
        <div className="flex flex-col md:flex-row md:items-center md:mt-5">
          <span className="font-normal text-base leading-5 text-[#757575] mt-6 md:mt-0">
            Source
          </span>
          <span
            className="mt-2 font-normal text-white text-base leading-5  underline md:mt-0 md:ml-6 cursor-pointer"
            style={{ color: active ? "white" : "#2D2D2D" }}
          >
            https://en.wiktionary.org/wiki/keyboard
          </span>
        </div>
      </main>
    </>
  );
}

export default App;
