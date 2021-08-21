import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback";
import { TextReader } from "../components/file-loader/TextReader";
import { Uploader } from "../components/file-loader/Uploader";
import { FileDisplay } from "../components/FileUpload";
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
