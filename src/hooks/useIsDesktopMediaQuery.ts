import useMediaQuery from "./useMediaQuery";

const useIsDesktopMediaQuery = (): boolean => {
    return useMediaQuery("(min-width: 960px)");
};

export default useIsDesktopMediaQuery;
