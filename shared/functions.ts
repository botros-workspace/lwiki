export function capatalizedText(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function capatalizeAndRemoveUnderScore(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1).replace(/_/gi, ' ').toLowerCase();
}
