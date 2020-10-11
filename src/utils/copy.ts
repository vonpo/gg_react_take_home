// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
export const copy = (text: string) => navigator.clipboard.writeText(text);
