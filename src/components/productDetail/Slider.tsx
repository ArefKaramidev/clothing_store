import { useState } from "react";

import slide1 from "/slide1.webp";
import slide2 from "/slide2.webp";
import slide3 from "/slide3.webp";
import Slide from "./Slide";

const Slider = () => {
  const [focus, setFocus] = useState(null);
  const [slide, setSlide] = useState(slide3);

  return (
    <div className=" flex items-start gap-x-20 mt-32 ">
      <div className="flex flex-col gap-y-5">
        <Slide
          src={slide1}
          setFocus={setFocus}
          setSlide={setSlide}
          focus={focus}
        />
        <Slide
          src={slide2}
          setFocus={setFocus}
          setSlide={setSlide}
          focus={focus}
        />
        <Slide
          src={slide3}
          setFocus={setFocus}
          setSlide={setSlide}
          focus={focus}
        />
      </div>
      <div>
        {slide && (
          <div>
            <img
              src={slide}
              loading="lazy"
              alt="five product image"
              className="w-[26rem] h-[26rem] rounded-md xl:w-[35rem] xl:h-[35rem]"
              width={400}
              height={400}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
