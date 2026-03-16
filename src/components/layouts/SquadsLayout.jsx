import SquadsPage from "../page/SquadsPage";
import Nav from "../../router/Nav";
import { Flex } from "@chakra-ui/react";

export default function SquadsLayout() {
  return (
    <>
      <Nav />
      <Flex
        w={"100vw"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SquadsPage />
      </Flex>
    </>
  );
}
