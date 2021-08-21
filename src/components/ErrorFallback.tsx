import styled from "styled-components";

interface IError {
  error: {
    message: string;
  };
}

export const ErrorFallback = ({ error }: IError) => {
  console.log(error);
  return (
    <>
      <ErrorText>{error}</ErrorText>
    </>
  );
};

const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;
