// components/DashboardMetricBlock.jsx
import { Flex, Spinner, Box } from "@chakra-ui/react";
import DashboardInfoLayout from "../layouts/DashboardInfoLayout";
import UpdateMenu from "../ui/update-menu";

export default function DashboardMetricBlock({
  title,
  data,
  isLoading,
  borderColor,
  bg,
  intervalSec,
  onIntervalChange,
  storageKey,
}) {
  return (
    <DashboardInfoLayout
      blockHeader={title}
      data={data}
      borderColor={borderColor}
      bg={bg}
      child={
        <UpdateMenu
          borderColor={borderColor}
          bg={bg}
          localStorageKey={storageKey}
          value={intervalSec}
          onChange={onIntervalChange}
        />
      }
    >
      {isLoading && (
        <Flex
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={bg}
          opacity={0.8}
          justifyContent="center"
          alignItems="center"
          zIndex={10}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </Flex>
      )}
    </DashboardInfoLayout>
  );
}
