import { useState, useEffect } from "react";

interface Positions {
    x:number;
    y:number;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Positions>({ x: 0, y: 0 });

  const updateMousePosition = (e:MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;