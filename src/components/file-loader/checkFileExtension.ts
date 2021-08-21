export const checkFileExtension = (file: File) => {
  const extensionDot = file.name.lastIndexOf(".");
  const extension = file.name.substring(extensionDot + 1);
  const allowedFileExtensions: string[] = ["text/rtf", "rtf", "md", "txt", "text/plain"];
  return allowedFileExtensions.includes(extension);
};
