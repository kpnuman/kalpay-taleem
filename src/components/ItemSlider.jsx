/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
// import './style.css';
import { Container } from "react-bootstrap";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ItemsSlider = ({ title, children }) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollBy({
      left: shift,
      behavior: "smooth",
    });

    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <>
      <Container fluid className="py-3 ">
        <div className="item-slider">
          <div ref={scrl} onScroll={scrollCheck} className="item-container">
            {children}
          </div>
        </div>
      </Container>
      <div className="d-flex align-items-center justify-content-lg-end justify-content-center gap-3" style={{width: '90%'}}>
        <div
          onClick={() => slide(-100)}
          className={`d-flex justify-content-center align-items-center left-arrow-left ${
            scrollX < 1 ? "is-disabled-hide" : ""
          }`}
        >
          <KeyboardArrowLeftIcon
            style={{
              color: "black",
              borderRadius: "5px",
              background: "#FFD844",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          className={`right-arrow-right ${
            !scrollEnd ? "" : "is-disabled-hide"
          }`}
          onClick={() => slide(+100)}
        >
          <KeyboardArrowRightIcon
            style={{
              color: "white",
              borderRadius: "5px",
              background: "#BC263A",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ItemsSlider;
