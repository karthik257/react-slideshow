import React, { useEffect, useState,useCallback } from "react";

export const Slideshow = (props) => {
  const [index, setIndex] = useState(0);
 

  const handleNext = useCallback(() => {
     setIndex((prev) => {
       return prev < props.images.length - 1 ? prev + 1 : 0;
     });
  });

  useEffect(() => {
    if (props.auto) {
      setTimeout(() => {
        handleNext();
      }, 2000);
    }
  }, [handleNext]);

  const handlePrev = () => {
    setIndex((prev) => {
      return prev > 0 ? prev - 1 : props.images.length - 1;
    });
  };

console.log("Left to Right",props.direction)

  return (
    <>
      {!props.auto && (
        <div>
          <h1>Manual Slideshow</h1>
          <img
            src={props.images[index].url}
            alt="cat"
            height={props.height}
            width={props.width}
          />
          <div>
            <br />
            <button onClick={handlePrev}>Prev</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {props.auto && (
        <div>
          <h1>Auto Slideshow</h1>

          <img
            src={props.images[index].url}
            alt="cat"
            height={props.height}
            width={props.width}
          />
        </div>
      )}
    </>
  );
};
