import React, { Dispatch, PropsWithChildren, ReactElement, SetStateAction, useState } from "react";

export interface EnrichedChildren {
  text?: string;
  setText?: Dispatch<SetStateAction<string>>;
  mostCommon?: string;
  setMostCommon?: Dispatch<SetStateAction<string>>;
  isUploading?: boolean;
  setIsUploading?: Dispatch<SetStateAction<boolean>>;
}

export const FileDisplay = ({ children }: any) => {
  const [text, setText] = useState("");
  const [mostCommon, setMostCommon] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  return (
    <>
      {React.Children.map(children, (child: ReactElement<PropsWithChildren<EnrichedChildren>>) => {
        return React.cloneElement(child, {
          text,
          mostCommon,
          isUploading,
          setText,
          setMostCommon,
          setIsUploading,
        });
      })}
    </>
  );
};
