import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";

interface Position {
  x: number;
  y: number;
}

export const useMousePosition = (): Position => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const updateMousePosition = useCallback(
    debounce((e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 10),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  return position;
};
