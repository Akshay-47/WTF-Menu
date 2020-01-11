import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [postNumber, setPostNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const baseUrl = `https://jsonplaceholder.typicode.com/posts/`;
    async function getData(postNum) {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await axios(baseUrl + postNum);
        setData(res.data);
      } catch (e) {
        console.log(e);
        setIsError(true);
      }
      setIsLoading(false);
    }
    getData(postNumber);
  }, [postNumber]);

  const renderPagination = () => {
    console.log("rendering pagination");
    let pageUI = [];
    for (let i = 1; i <= 10; i++) {
      pageUI.push(
        <button value={i} onClick={e => setPostNumber(e.target.value)}>
          {i}
        </button>
      );
    }
    return pageUI;
  };

  return (
    <div>
      <h1>I am test</h1>
      {isError && <div>Oops something went wrong</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <b>{data.id}-----</b>
          {data.title}
          {renderPagination().map((page, index) => (
            <div key={index}>{page}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Test;
