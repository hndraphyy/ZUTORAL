import { useEffect } from "react";

const BRAND_NAME = " | ZUTORAL";

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title + BRAND_NAME
    }, [title]);
}

export default usePageTitle