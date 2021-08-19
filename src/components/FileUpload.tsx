import React, { Dispatch, PropsWithChildren, ReactElement, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Plus } from "react-feather";
import { commonWordArray } from "./file-loader/commonWords";

interface EnrichedChildren {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  mostCommon: string;
  setMostCommon: Dispatch<SetStateAction<string>>;
}

const FileDisplay = ({ children }: any) => {
  const [text, setText] = useState("");
  const [mostCommon, setMostCommon] = useState("");
  return (
    <>
      {React.Children.map(children, (child: ReactElement<PropsWithChildren<EnrichedChildren>>) => {
        return React.cloneElement(child, { text, mostCommon, setText, setMostCommon });
      })}
    </>
  );
};

const checkExtension = (file: File) => {
  const extensionDot = file.name.lastIndexOf(".");
  const extension = file.name.substring(extensionDot + 1);
  const allowedFileExtensions: string[] = ["text/rtf", "rtf", "md", "file", "txt", "text/plain"];
  return allowedFileExtensions.includes(extension);
};

const createArrayFromText = (text: string) => {
  return text
    .replace(/[0-9&\\#,=+()$~%.'":*?<>{}]/gim, "")
    .replace(/\n/gim, "")
    .replace(/\s\s+/gim, "")
    .trim();
};

const filterOutCommonWord = (words: string[]) => {
  return words.filter((word: string) => !commonWordArray().includes(word.toLowerCase()));
};

const Uploader = ({ setText, setMostCommon }: any) => {
  const uploadInput = React.useRef<HTMLInputElement>(null);

  const handleFileUpLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const target: HTMLInputElement = event.target;
    const file: File = (target.files as FileList)[0];

    if (checkExtension(file)) {
      reader.onload = (e: any) => {
        const fileResult = e.target.result;
        if (fileResult === "") setText("Woopsie, it seems this file was empty!");

        const findMostCommonWord = (text: string) => {
          if (text) {
            const wordArray = createArrayFromText(text).split(" ");

            return filterOutCommonWord(wordArray)
              .sort(
                (currentWord: string, nextWord: string) =>
                  wordArray.filter((word: string) => word === currentWord).length -
                  wordArray.filter((word: string) => word === nextWord).length
              )
              .pop();
          } else throw new Error("No text to handle");
        };
        let yourMostCommonWord = findMostCommonWord(fileResult);
        console.log(yourMostCommonWord);
        setText(reader.result);
        // let withThis = `<strong>foo</strong>${yourMostCommonWord}<strong>bar</strong>`;
        // mostCommon.innerText = yourMostCommonWord;
        // fileView.innerHTML = reader.result.replace(new RegExp(yourMostCommonWord, "gi"), withThis);
      };
    } else {
      setText(`${file.type} is not supported`);
    }
    reader.readAsText(file, "ISO-8859-1");

    // reader.onloadend = () => {
    //   console.log(reader.result);
    //   setText(reader.result);
    // };
    // reader.readAsText(file);
  };

  return (
    <UploaderWrapper>
      <Input
        type="file"
        id="randomText"
        name="randomText"
        ref={uploadInput}
        onChange={handleFileUpLoad}
      />
      <Button inputRef={uploadInput} />
    </UploaderWrapper>
  );
};

const Button = ({ inputRef }: any) => {
  const uploadFile = () => {
    if (inputRef.current) {
      return inputRef?.current.click();
    }
  };

  return (
    <UploadButton onClick={uploadFile}>
      <Add />
      Choose a file
    </UploadButton>
  );
};

const TextReader = ({ text }: any) => {
  return <TextContainer>{text}</TextContainer>;
};

const UploaderWrapper = styled.section`
  max-width: 150px;
  padding: 1rem;
  display: flex;
`;

const TextContainer = styled.section`
  max-width: 50%;
  color: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
`;

const Input = styled.input`
  flex: 1 1 50%;
  display: none;
`;

const UploadButton = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 8px;

  color: ${(props) => props.theme.colors.main};
  font-size: 0.7rem;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 100%;

  padding: 1rem;
  margin: 0 auto;
`;

const Add = styled(Plus)`
  color: ${(props) => props.theme.colors.main}; ;
`;

export { FileDisplay, Uploader, TextReader };
