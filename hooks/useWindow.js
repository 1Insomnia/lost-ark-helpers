import { useState, useEffect } from "react";

const useWindow = () => {
  const [w, setW] = useState(undefined);

  useEffect(() => {
    window !== undefined ? setW(window.document.body) : setW(undefined);
  }, []);

  return w;
};

export { useWindow };
