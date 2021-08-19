export const filterOutCommonWords = (words: string[], commons: string[]): string[] => {
  return words.filter((word: string) => !commons.includes(word.toLowerCase()));
};
