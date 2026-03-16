import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useColorModeValue } from "../components/ui/color-mode";
import {
  TbUsersGroup,
  TbSitemap,
  TbArrowsMaximize,
  TbTopologyStar3,
} from "react-icons/tb";

import CustomTooltip from "../components/ui/custom-tooltip";

export default function Nav() {
  const borderColor = useColorModeValue("#09090b", "white");

  return (
    <Flex position="fixed" bottom="0" left="50%" transform="translateX(-50%)">
      <Flex
        h="80px"
        w="auto"
        p="20px"
        borderRadius={"10px 10px 0 0"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        gap="1.2rem"
        border="2px solid"
        borderColor={borderColor}
        borderBottomWidth={0}
      >
        <CustomTooltip
          header="Пользователи"
          body="В данной группе находится список пользователей и их настройки."
        >
          <Link to="/users">
            <TbUsersGroup size="30px" />
          </Link>
        </CustomTooltip>
        <CustomTooltip
          header="Сквады"
          body="В данной разделе находятся настройки внутренних сквадов. С
                помощью них можно выделять группы пользователей и управлять
                параметрами их настроек."
        >
          <Link to="/squads">
            <TbTopologyStar3 size="30px" />
          </Link>
        </CustomTooltip>

        <CustomTooltip
          header="Ноды"
          body="В данной разделе находятся настройки серверов и их конфиги."
        >
          <Link to="/nodes">
            <TbSitemap size={"30px"} />
          </Link>
        </CustomTooltip>
        <CustomTooltip
          header={"Маршрутизация"}
          body={
            "В данном разделе вы можете настроить параметры маршрутизации по своему вкусу и применять их в связке с различными конфигурациями серверов"
          }
        >
          <Link to="/routing">
            <TbArrowsMaximize size={"30px"} />
          </Link>
        </CustomTooltip>
      </Flex>
    </Flex>
  );
}
