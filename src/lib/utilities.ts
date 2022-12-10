export const pageChangeCheck = (isForward: boolean, page: number) => {
    if (isForward && page + 1 < 3) {
        return page + 1;
    } else if (!isForward && page - 1 >= 0) {
        return page - 1;
    } else {
        return undefined;
    }
};
