import NodesPage from "../page/NodesPage";
import Nav from "../../router/Nav";
import { Flex } from "@chakra-ui/react";

export default function NodesLayout() {
  return (
    <>
      <Nav />
      <Flex
        w={"100vw"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NodesPage />
      </Flex>
    </>
  );
}
