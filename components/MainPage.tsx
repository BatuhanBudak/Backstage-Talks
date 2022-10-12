import React from "react";
import { useEffect, useState } from "react";
import one from "../public/1.png";
import two from "../public/2.png";
import three from "../public/3.png";
import four from "../public/4.png";
import five from "../public/5.png";
import six from "../public/6.png";
import useResize from "../hooks/useResize";
import { useInView } from "react-intersection-observer";
import Magazine from "./Magazine";

export default function MainPage() {
  const [className, setClassName] = useState("");
  const isDesktopScreen = useResize();

  const [firstRef, inViewFirst] = useInView({
    threshold: 0.5,
  });
  const [secondRef, inViewSecond] = useInView({
    threshold: 0.5,
  });
  const [thirdRef, inViewThird] = useInView({
    threshold: 0.5,
  });

  const [fourthRef, inViewFourth] = useInView({
    threshold: 0.5,
  });
  const [fifthRef, inViewFifth] = useInView({
    threshold: 0.5,
  });
  const [sixthRef, inViewSixth] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    function changeClassName() {
      if (inViewFirst) {
        setClassName("first");
      } else if (inViewSecond) {
        setClassName("second");
      } else if (inViewThird) {
        setClassName("third");
      } else if (inViewFourth) {
        setClassName("fourth");
      } else if (inViewFifth) {
        setClassName("fifth");
      } else if (inViewSixth) {
        setClassName("sixth");
      }
    }
    changeClassName();
  }, [
    inViewFirst,
    inViewSecond,
    inViewThird,
    inViewFourth,
    inViewFifth,
    inViewSixth,
  ]);

  return (
    <main className={className}>
      <Magazine id="six" issuePic={one} issueNumber={6} ref={firstRef} />
      <Magazine id="five" issuePic={two} issueNumber={5} ref={secondRef} />
      <Magazine id="four" issuePic={three} issueNumber={4} ref={thirdRef} />
      <Magazine id="three" issuePic={four} issueNumber={3} ref={fourthRef} />
      <Magazine id="two" issuePic={five} issueNumber={2} ref={fifthRef} />
      <Magazine id="one" issuePic={six} issueNumber={1} ref={sixthRef} />
      {isDesktopScreen && (
        <ul className="issues-menu">
          <li>
            <a href="#six">Issue #6</a>
          </li>
          <li>
            <a href="#five">Issue #5</a>
          </li>
          <li>
            <a href="#four">Issue #4</a>
          </li>
          <li>
            <a href="#three">Issue #3</a>
          </li>
          <li>
            <a href="#two">Issue #2</a>
          </li>
          <li>
            <a href="#one">Issue #1</a>
          </li>
        </ul>
      )}
    </main>
  );
}
