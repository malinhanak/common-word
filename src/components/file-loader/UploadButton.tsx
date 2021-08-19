import { Plus } from "react-feather";
import styled from "styled-components";

export const UploadButton = ({ inputRef, isUploading }: any) => {
  const uploadFile = () => {
    if (inputRef.current) {
      return inputRef?.current.click();
    }
  };

  return (
    <Button onClick={uploadFile} disabled={isUploading}>
      <Add />
      {isUploading ? "...Loading file" : "Choose a file"}
    </Button>
  );
};

const Button = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 8px;

  color: ${(props) => props.theme.colors.main};
  font-size: 0.9rem;
  font-weight: 700;
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
