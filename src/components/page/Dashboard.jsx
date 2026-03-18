import { Flex, Spinner } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useMetricData } from "../../hooks/useMetricData";
import DashboardMetricBlock from "../ui/dashboard-metrics-block";
import APIService from "../../api/API";

export default function Dashboard() {
  const borderColor = useColorModeValue("#09090b", "white");
  const bg = useColorModeValue("white", "#010b13");
  const loaderColor = useColorModeValue("#09090b", "white");

  const statsData = useMetricData(
    APIService.getStats,
    "dashboardUpdateTime",
    5,
  );
  const networkData = useMetricData(
    APIService.getNetwork,
    "dashboardNetworkTime",
    5,
  );

  const blocks = [
    {
      id: "stats",
      title: "PRock usage",
      storageKey: "dashboardUpdateTime",
      ...statsData,
    },
    {
      id: "network",
      title: "Network usage",
      storageKey: "dashboardNetworkTime",
      ...networkData,
    },
  ];

  const isAnyLoading = statsData.isLoading || networkData.isLoading;
  if (isAnyLoading) {
    return (
      <Flex
        w={"100vw"}
        h={"100vh"}
        justifyContent="center"
        alignItems="center"
        bg={bg}
      >
        <Spinner size="xl" color={loaderColor} />
      </Flex>
    );
  }

  return (
    <Flex w={"100vw"} h={"100vh"} p={"40px"} direction={"column"} bg={bg}>
      {blocks.map((block) => (
        <DashboardMetricBlock
          key={block.id}
          title={block.title}
          data={block.data}
          isLoading={block.isLoading}
          borderColor={borderColor}
          bg={bg}
          intervalSec={block.intervalSec}
          onIntervalChange={block.updateInterval}
          storageKey={block.storageKey}
        />
      ))}
    </Flex>
  );
}
