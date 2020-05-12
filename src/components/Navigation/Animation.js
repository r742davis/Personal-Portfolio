import React, { useEffect, useState } from "react";
import "./Animations.css";

const Animation = ({ show, enter, exit, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  const style = {
    animation: `${show ? enter : exit}`,
  }

  return (
    render && (
      <div
        style={style}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Animation;