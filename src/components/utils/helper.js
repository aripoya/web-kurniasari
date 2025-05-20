export const priceFormat = (price) => new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(price)
export const scrollToId = (id) => {
    const element = document.getElementById(id);
    const header = document.getElementById("header"); // Get header

    if (!element) return;

    const headerHeight = header?.clientHeight || 0; // Get height of header
    const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
};