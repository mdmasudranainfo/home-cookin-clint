import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Home Cookin`;
  }, []);
};

export default useTitle;
