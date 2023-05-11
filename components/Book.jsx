import React from "react";
import HTMLFlipBook from "react-pageflip";

function Book({ pages }) {
  const titles = Object.keys(pages);

  return (
    <div className="bg-gray-600 w-full flex items-center justify-center">
      <HTMLFlipBook size="stretch" width={400} height={600}>
        <div className="demoPage bg-yellow-200 p-6 shadow-inner">
          <div className="flex items-center justify-center w-full h-full p-2 border-blue-gray-300 border-2 ">
            <p className="text-xl">START OF THE TALES</p>
          </div>
        </div>
        {titles.map((item) => (
          <div key={item} className="demoPage bg-yellow-200   p-6 shadow-inner">
            <div className="bg-gray-200 w-full h-full p-2 border-blue-gray-300 border-2 overflow-auto">
              <p className="text-xl font-bold">{item}</p>
              {pages[item].split("\n").map((page) => (
                <p key={page} className="mt-2 text-xs">
                  {page}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="demoPage bg-yellow-200 p-6 shadow-inner">
          <div className="flex items-center justify-center w-full h-full p-2 border-blue-gray-300 border-2 ">
            <p className="text-xl  ">Happy Reading</p>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Book;
