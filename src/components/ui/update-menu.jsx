import { Button, Menu, Portal } from "@chakra-ui/react";

export default function UpdateMenu({ borderColor, bg, value, onChange }) {
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
            {[1, 5, 15, 30, 60].map((time) => (
              <Menu.Item
                key={time}
                _hover={{ cursor: "pointer" }}
                onClick={() => onChange(time)}
              >
                {time}s
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
