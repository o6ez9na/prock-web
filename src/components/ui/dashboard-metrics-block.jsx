import DashboardInfoLayout from "../layouts/DashboardInfoLayout";
import UpdateMenu from "./update-menu";

export default function DashboardMetricBlock({
  title,
  data,
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
    />
  );
}
