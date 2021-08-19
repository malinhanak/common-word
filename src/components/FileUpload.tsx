import React, { Dispatch, PropsWithChildren, ReactElement, SetStateAction, useState } from "react";

export interface EnrichedChildren {
  text?: string;
  setText?: Dispatch<SetStateAction<string>>;
  mostCommon?: string;
  setMostCommon?: Dispatch<SetStateAction<string>>;
}

export const FileDisplay = ({ children }: any) => {
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
