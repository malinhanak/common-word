import React from "react";
import styled from "styled-components";
import { checkFileExtension } from "./checkFileExtension";
import { findMostCommonWord } from "./findMostCommonWord";
import { UploadButton } from "./UploadButton";

export const Uploader = ({ setText, setMostCommon }: any) => {
  const uploadInput = React.useRef<HTMLInputElement>(null);

  const handleFileUpLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const target: HTMLInputElement = event.target;
    const file: File = (target.files as FileList)[0];

    if (checkFileExtension(file)) {
      reader.onload = (e: any) => {
        const fileResult = e.target.result;
        if (fileResult === "") setText("Woopsie, it seems this file was empty!");

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
      <UploadButton inputRef={uploadInput} />
    </UploaderWrapper>
  );
};

const UploaderWrapper = styled.section`
  max-width: 150px;
  padding: 1rem;
  display: flex;
`;

const Input = styled.input`
  flex: 1 1 50%;
  display: none;
`;
