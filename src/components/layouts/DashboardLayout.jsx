import Dashboard from "../page/Dashboard";
import Nav from "../../router/Nav";
import { Flex } from "@chakra-ui/react";
export default function DashboardLayout() {
  return (
    <>
      <Nav />
      <Flex
        w={"100vw"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Dashboard />
      </Flex>
    </>
  );
}
