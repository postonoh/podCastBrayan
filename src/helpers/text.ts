export const truncate = (str: string, max: number) => {
    if (str.length <= max)
        return str;

    return `${str.substring(0, max)}`
};
