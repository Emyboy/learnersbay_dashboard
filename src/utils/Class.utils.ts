export const displayPrice = (price: number) => {
    const formatter = new Intl.NumberFormat("en-US");
    return `${formatter.format(price)}`;
};
