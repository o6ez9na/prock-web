import RoutingPage from "../page/RoutingPage";
import Nav from "../../router/Nav";
import { Flex } from "@chakra-ui/react";

export default function RoutingLayout() {
  return (
    <>
      <Nav />
      <Flex
        w={"100vw"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <RoutingPage />
      </Flex>
    </>
  );
}
