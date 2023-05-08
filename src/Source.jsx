import React from "react";

export const Source = ({ active, results }) => {
  return (
    <>
      {results ? (
        <div>
          <hr className="bg-[#3A3A3A] w-full mt-8" />
          <div className="flex  flex-wrap flex-col md:flex-row md:items-center md:mt-5">
            <span className="font-normal text-base leading-5 text-[#757575] mt-6 md:mt-0">
              Source
            </span>
            {results.sourceUrls.map((url, index) => (
              <a
                key={index}
                href={url}
                className="w-full h-full font-normal text-white text-base my-1 leading-5 underline cursor-pointer"
                style={{ color: active ? "white" : "#2D2D2D" }}
              >
                {url}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Source;
