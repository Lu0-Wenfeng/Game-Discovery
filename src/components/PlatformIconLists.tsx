import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaNeos,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiAtari,
  SiCommodore,
  SiD3Dotjs,
  SiNintendo,
  SiSega,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../entities/Platform";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconLists = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    sega: SiSega,
    "commodore-amiga": SiCommodore,
    "3do": SiD3Dotjs,
    "Neo Geo": FaNeos,
    atari: SiAtari,
  };

  return (
    <HStack wrap="wrap" marginY={"10px"}>
      {platforms.map((platform, index) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={index} />
      ))}
    </HStack>
  );
};

interface Props {
  platforms: Platform[];
}

export default PlatformIconLists;
