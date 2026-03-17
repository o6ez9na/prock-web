import { Box, Flex } from "@chakra-ui/react";
import DashboardInfoLayout from "../layouts/DashboardInfoLayout";

export default function Dashboard() {
  const data = [
    {
      headerText: "Все процессы",
      content: "3",
    },
    {
      headerText: "Всего памяти",
      content: "324 GB",
    },
    {
      headerText: "Использование CPU",
      content: "171 %",
    },
  ];
  return (
    <Flex w={"100vw"} h={"100vh"} p={"40px"} gap={"20px"} direction={"column"}>
      <DashboardInfoLayout blockHeader="PRock usage" data={data} />
    </Flex>
  );
}
