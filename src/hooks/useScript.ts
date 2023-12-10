import { useEffect } from "react";

const useScript = (url: string) => {
    useEffect(() => {
        if (url) {
            console.log("test");
            const script = document.createElement("script");

            script.src = url;
            script.async = true;

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [url]);
};

export default useScript;
