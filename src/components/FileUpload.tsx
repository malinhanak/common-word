import React, { Dispatch, PropsWithChildren, ReactElement, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Plus } from "react-feather";
import htmr from "htmr";
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
        setMostCommon(findMostCommonWord(fileResult));
        setText(reader.result);
      };
    } else {
      setText(`${file.type} is not supported`);
    }
    reader.readAsText(file, "ISO-8859-1");
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

const TextReader = ({ text, mostCommon }: any) => {
  const replacedWord = `<span class="common-word">${mostCommon}</span>`;
  const alteredText = text.replace(new RegExp(mostCommon, "gi"), replacedWord);

  return (
    <TextContainer>
      <MostCommon>{mostCommon}</MostCommon>
      <Text>{htmr(alteredText)}</Text>
    </TextContainer>
  );
};

const UploaderWrapper = styled.section`
  max-width: 150px;
  padding: 1rem;
  display: flex;
`;

const TextContainer = styled.section`
  width: 60%;
  height: 50vh;
  color: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
  overflow-x: auto;
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
`;

const Text = styled.p`
  font-weight: 200;
  font-family: "Roboto";
  text-align: justify;

  span.common-word {
    font-weight: 700;
    &:before {
      content: "foo";
      color: ${(props) => props.theme.colors.primary};
    }
    &:after {
      content: "bar";
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const MostCommon = styled.p`
  font-weight: 700;
  font-family: "Poppins";
  text-align: justify;

  &:before {
    content: "Most frequently used word:";
    color: ${(props) => props.theme.colors.primary};
    margin-right: 0.3rem;
  }
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
