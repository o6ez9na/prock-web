import { Flex, Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

import { useColorModeValue } from "../components/ui/color-mode";
import {
  TbUsersGroup,
  TbSitemap,
  TbArrowsMaximize,
  TbTopologyStar3,
  TbHome,
} from "react-icons/tb";

import CustomTooltip from "../components/ui/custom-tooltip";

export default function Nav() {
  const borderColor = useColorModeValue("#09090b", "white");
  const location = useLocation(); // Получаем текущий путь

  const checkActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <Flex position="fixed" bottom="0" left="50%" transform="translateX(-50%)">
      <Flex
        h="60px"
        w="auto"
        p="20px"
        borderRadius={"10px 10px 10px 10px"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        gap="1.2rem"
        border="2px solid"
        borderColor={borderColor}
        borderBottomWidth={0}
        // borderLeftWidth={0}
        // borderRightWidth={0}
      >
        <CustomTooltip
          isActive={checkActive("/dashboard")}
          header={"Дашборд"}
          body={
            "Здесь вы сможете увидеть потребляемый трафик, график нагрузки и многое другое."
          }
        >
          <Link to="/dashboard">
            <TbHome size="30px" />
          </Link>
        </CustomTooltip>

        <Box h="30px" w="3px" bg={borderColor} borderRadius={"10px"} />

        <CustomTooltip
          isActive={checkActive("/users")}
          header="Пользователи"
          body="В данной группе находится список пользователей и их настройки."
        >
          <Link to="/users">
            <TbUsersGroup size="30px" />
          </Link>
        </CustomTooltip>

        <CustomTooltip
          isActive={checkActive("/squads")}
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
          isActive={checkActive("/nodes")}
          header="Ноды"
          body="В данной разделе находятся настройки серверов и их конфиги."
        >
          <Link to="/nodes">
            <TbSitemap size={"30px"} />
          </Link>
        </CustomTooltip>

        <CustomTooltip
          isActive={checkActive("/routing")}
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
