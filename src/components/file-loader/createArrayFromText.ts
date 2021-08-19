export const createArrayFromText = (text: string) => {
  return text
    .replace(/[0-9&\\#,=+()$~%.'":*?<>{}]/gim, "")
    .replace(/\n/gim, "")
    .replace(/\s\s+/gim, "")
    .trim();
};
