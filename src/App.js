import { ModalPokemon } from "./components/Modal.js/index.";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router />
        <ModalPokemon />
      </ChakraProvider>
    </div>
  );
}

export default App;
