import { Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import APIService from "../../api/API";
import { useMetricData } from "../../hooks/useMetricData";
import DashboardMetricBlock from "../ui/dashboard-metrics-block";

const DASHBOARD_CONFIG = [
  {
    id: "stats",
    title: "PRock usage",
    apiMethod: APIService.getStats,
    storageKey: "dashboardUpdateTime",
    defaultTime: 5,
  },
  {
    id: "network",
    title: "Network usage",
    apiMethod: APIService.getNetwork,
    storageKey: "dashboardNetworkTime",
    defaultTime: 5,
  },
];

export default function Dashboard() {
  const borderColor = useColorModeValue("#09090b", "white");
  const bg = useColorModeValue("white", "#09090b");

  return (
    <Flex w={"100vw"} h={"100vh"} p={"40px"} gap={"20px"} direction={"column"}>
      {DASHBOARD_CONFIG.map((config) => {
        const { data, intervalSec, updateInterval } = useMetricData(
          config.apiMethod,
          config.storageKey,
          config.defaultTime,
        );

        return (
          <DashboardMetricBlock
            key={config.id}
            title={config.title}
            data={data}
            borderColor={borderColor}
            bg={bg}
            intervalSec={intervalSec}
            onIntervalChange={updateInterval}
            storageKey={config.storageKey}
          />
        );
      })}
    </Flex>
  );
}
