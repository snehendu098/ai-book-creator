import Book from "@/components/Book";
import Inputs from "@/components/Inputs";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(null);

  useEffect(() => {
    if (loading) {
      setPages(null);
    }
  }, [loading]);

  const handleClick = async () => {
    try {
      setLoading(true);
      // api req
      console.log("hello");
      const res = await axios.post("/api/generate", values);
      setPages(res.data.story);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-center h-screen overflow-hidden">
      <div className="w-4/6 h-full px-10">
        <div className="w-full h-full flex items-center">
          {loading && (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className="loader"></span>
              <p className="font-bold uppercase text-blue-gray-700">
                Please wait for a few minutes
              </p>
            </div>
          )}
          {!loading && pages && <Book pages={pages} />}
        </div>
      </div>
      <Inputs values={values} setValues={setValues} handleClick={handleClick} />
    </div>
  );
}
