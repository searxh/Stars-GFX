import React from "react";

const useMediaQuery = (query: string) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = React.useState<boolean>(mediaMatch.matches);
    React.useEffect(() => {
        mediaMatch.addEventListener("change", (e) => {
            setMatches(e.matches);
        });
        return () =>
            mediaMatch.removeEventListener("change", (e) => {
                setMatches(e.matches);
            });
    }, []);
    return matches;
};

export default useMediaQuery;
