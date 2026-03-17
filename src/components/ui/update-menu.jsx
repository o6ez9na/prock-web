import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";

export default function UpdateMenu({ borderColor, bg }) {
  const [value, setValue] = useState(
    localStorage.getItem("dashboardUpdateTime") || "5",
  );

  const handleUpdate = ({ time }) => {
    setValue(time);
    localStorage.setItem("dashboardUpdateTime", time);
  };

  return (
    <Menu.Root>
      <Menu.Trigger
        asChild
        border="2px solid"
        borderColor={borderColor}
        bg={bg}
        w={"50px"}
      >
        <Button variant="outline" size="sm">
          {value}s
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            bg={bg}
            border="2px solid"
            borderColor={borderColor}
            borderRadius={"8px"}
          >
            <Menu.Item
              _hover={{ cursor: "pointer" }}
              onClick={() => handleUpdate({ time: "5" })}
            >
              5s
            </Menu.Item>
            <Menu.Item
              _hover={{ cursor: "pointer" }}
              onClick={() => handleUpdate({ time: "15" })}
            >
              15s
            </Menu.Item>
            <Menu.Item
              _hover={{ cursor: "pointer" }}
              onClick={() => handleUpdate({ time: "30" })}
            >
              30s
            </Menu.Item>
            <Menu.Item
              _hover={{ cursor: "pointer" }}
              onClick={() => handleUpdate({ time: "60" })}
            >
              60s
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
