import UsersPage from "../page/UsersPage";
import Nav from "../../router/Nav";
import { Flex } from "@chakra-ui/react";

export default function UsersLayout() {
  return (
    <>
      <Nav />
      <Flex
        w={"100vw"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <UsersPage />
      </Flex>
    </>
  );
}
