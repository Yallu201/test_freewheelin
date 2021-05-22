import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [isTrue, setIsTrue] = useState(initialValue);
  const toggle = useCallback(() => setIsTrue((state) => !state), []);
  return [isTrue, toggle];
};
export default useToggle;
