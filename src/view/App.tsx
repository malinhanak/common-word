import { FileDisplay, TextReader, Uploader } from "../components/FileUpload";
import Header from "../components/Header";
import { RootElement } from "../components/RootElements";

function App() {
  return (
    <RootElement>
      <Header />
      <FileDisplay>
        <Uploader />
        <TextReader />
      </FileDisplay>
    </RootElement>
  );
}

export default App;
