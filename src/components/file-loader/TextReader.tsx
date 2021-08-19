import htmr from "htmr";
import styled from "styled-components";

export const TextReader = ({ text, mostCommon, isUploading }: any) => {
  const replacedWord = `<span class="common-word">${mostCommon}</span>`;
  const alteredText = text.replace(new RegExp(mostCommon, "gi"), replacedWord);

  return (
    <TextContainer>
      {mostCommon && !isUploading && <MostCommon>{mostCommon}</MostCommon>}
      <Text>{text && htmr(alteredText)}</Text>
    </TextContainer>
  );
};

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
  margin-bottom: 8rem;

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
