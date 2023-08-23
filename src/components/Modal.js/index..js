import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Container,
} from "@chakra-ui/react";
import { Title, Text } from "./styles";
import { PokemonCardContext } from "../../contexts/PokemonCardContext";
import { useContext } from "react";

export const ModalPokemon = () => {

  const { modalPokemon, setModalPokemon, modalStatus } = useContext(PokemonCardContext);

  return (
    <>
      <Modal isOpen={modalPokemon} onClose={() => setModalPokemon(false)}>
        <ModalOverlay />
        <ModalContent
          top={"16rem"}>
          <ModalCloseButton />
          <Flex
            style={{ borderRadius: "10rem" }}
            height={"25vh"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {modalStatus === 0 ? (
              <Container
                display={"flex"}
                height={"25vh"}
                width={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ModalBody
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={".5em"}
                >
                  <Title>Gotcha!</Title>
                  <Text>O Pokémon foi adicionado a sua Pokédex</Text>
                </ModalBody>
              </Container>
            ) : (
              <>
                <ModalBody
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={".5em"}
                >
                  <Title>Oh, no!</Title>
                  <Text>O Pokémon foi excluido da sua Pokédex</Text>
                </ModalBody>
              </>
            )}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
