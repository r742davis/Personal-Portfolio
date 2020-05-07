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

  return (
    render && (
      <div
        style={{ animation: `${show ? enter : exit} 0.5s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Animation;