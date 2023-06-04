import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={10}>
      <Image src={logo} boxSize={60} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
