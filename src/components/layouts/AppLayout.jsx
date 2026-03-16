// components/layouts/AppLayout.jsx
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Nav from "../../router/Nav";

export default function AppLayout() {
  return (
    <>
      <Nav />
      <Flex
        w={"100vw"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        overflow={"auto"}
      >
        <Outlet />
      </Flex>
    </>
  );
}
