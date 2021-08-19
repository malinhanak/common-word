import React, { useEffect } from "react";
import styled from "styled-components";
import { checkFileExtension } from "./checkFileExtension";
import { findMostCommonWord } from "./findMostCommonWord";
import { UploadButton } from "./UploadButton";

export const Uploader = ({ text, isUploading, setText, setMostCommon, setIsUploading }: any) => {
  const uploadInput = React.useRef<HTMLInputElement>(null);

  const handleFileUpLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
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

  useEffect(() => {
    if (text) setIsUploading(false);
  }, [text, setIsUploading]);

  return (
    <UploaderWrapper>
      <Input
        type="file"
        id="randomText"
        name="randomText"
        ref={uploadInput}
        onChange={handleFileUpLoad}
      />
      <UploadButton inputRef={uploadInput} isUploading={isUploading} />
    </UploaderWrapper>
  );
};

const UploaderWrapper = styled.section`
  width: 200px;
  padding: 1rem;
  display: flex;
`;

const Input = styled.input`
  flex: 1 1 50%;
  display: none;
`;
