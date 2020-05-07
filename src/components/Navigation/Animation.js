import React, { useEffect, useState } from "react";
import "./Animations.css";

const Animation = ({ show, enter, exit, modifiers, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  const style = {
    animation: `${show ? enter : exit} 0.5s`,
    zIndex: "120",
    color: "blue",
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