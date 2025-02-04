"use client";
import { Icon, Text, Box } from "@chakra-ui/react";
import { BsMortarboard } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";

interface Props {
  id?: string;
  year: string;
  title: string;
  place: string;
}

const Education: React.FC<Props> = ({ id, year, title, place }) => {
  return (
    <Box px="10">
      <Box borderLeft={"1px dashed rgba(0, 0, 0, 0.2)"} p="4">
        {id && (
          <Icon
            as={id === "1" ? BsMortarboard : BsBriefcase}
            ml="2"
            zIndex={50}
            boxSize="8"
            cursor="pointer"
            mb="4"
          />
        )}
        <Text
          position={"relative"}
          border="1px dashed rgba(0, 0, 0, 0.2)"
          px="6"
          py="2"
          borderRadius={"full"}
          w="fit-content"
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-15px",
            transform: "translateY(-50%)",
            width: "14px",
            height: "1px",
            borderTop: "1px dashed rgba(0, 0, 0, 0.2)",
          }}
          _after={{
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-20px",
            transform: "translateY(-50%)",
            background: "black",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
          }}
        >
          {year}
        </Text>
        <Text
          pt="3"
          fontSize={"lg"}
          borderRadius={"full"}
          fontWeight={"semibold"}
        >
          {title}
        </Text>
        <Text pt="1" fontSize={"sm"} borderRadius={"full"}>
          @ {place}
        </Text>
      </Box>
    </Box>
  );
};

export default Education;
