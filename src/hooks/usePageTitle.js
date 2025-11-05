import { useEffect } from "react";

const BRAND_NAME = " | ZOTU";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title + BRAND_NAME;
  }, [title]);
};

export default usePageTitle;
