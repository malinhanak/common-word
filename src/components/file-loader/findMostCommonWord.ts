import { commonWordArray } from "./commonWords";
import { createArrayFromText } from "./createArrayFromText";
import { filterOutCommonWords } from "./filterOutCommonWords";

export const findMostCommonWord = (text: string) => {
  if (text) {
    const wordArray = createArrayFromText(text).split(" ");

    return filterOutCommonWords(wordArray, commonWordArray)
      .sort(
        (currentWord: string, nextWord: string) =>
          wordArray.filter((word: string) => word === currentWord).length -
          wordArray.filter((word: string) => word === nextWord).length
      )
      .pop();
  } else throw new Error("No text to handle");
};
