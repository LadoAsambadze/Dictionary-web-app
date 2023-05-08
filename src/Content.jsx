import React from "react";

export const Content = ({ active, partOfSpeech, definitions, synonyms }) => {
  return (
    <>
      <div className="w-full flex flex-row items-center mt-10">
        <span
          className="text-white font-bold text-base leading-5 md:text-2xl md:leading-6"
          style={{ color: active ? "white" : "#2D2D2D" }}
        >
          {partOfSpeech}
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
          {definitions.map((def, index) => (
           
            <li

              key={index}
              className="text-white md:text-xl "
              style={{ color: active ? "white" : "#2D2D2D" }}
            >
              {def.definition}
            </li>
          ))}
        </ul>
        {synonyms.length > 0 ? (
          <div className="w-full flex flex-row items-center mt-7 flex-wrap ">
            <span className="font-normal text-base leading-5 text-[#757575] md:text-xl mr-2 ml-1">
              Synonyms
            </span>
            {synonyms.map((syn, index) => (
              <span
                key={index}
                className=" text-[#A445ED] text-base font-bold leading-5 md:text-xl mx-1 my-1"
              >
                {syn}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Content;
