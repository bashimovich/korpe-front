export function SmalltruncateText(text) {
    return text.length > 25 ? text.slice(0, 25) + '...' : text;
}
export function truncateText(text) {
    return text.length > 35 ? text.slice(0, 35) + '...' : text;
}
export function truncateBigText(text) {
    return text.length > 200 ? text.slice(0, 200) + '...' : text;
}