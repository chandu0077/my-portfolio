"use client";
import { Link, Text, Flex, Icon } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFileTextFill } from "react-icons/bs";

export default function Header() {
  return (
    <Flex
      direction={"row"}
      justifyContent={"space-between"}
      w="full"
      mt={{ base: "10px", lg: 0 }}
    >
      <Text py="6" fontSize="6xl" float={{ base: "left" }}>
        Sai Chandu
        <Text
          as="span"
          sx={{
            WebkitTextStrokeWidth: "1.4px",
            WebkitTextStrokeColor: "black",
          }}
          textFillColor={"transparent"}
        >
          D
        </Text>
      </Text>

      <Flex mt={{ base: "15px", lg: "15px" }} gap="4">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/chandu-d-385086236/"
        >
          <Icon
            as={AiFillLinkedin}
            ml="2"
            float="right"
            zIndex={50}
            boxSize="5"
            cursor="pointer"
          />
        </Link>
        <Link target="_blank" href="https://github.com/chandu0077">
          <Icon
            as={AiFillGithub}
            ml="2"
            float="right"
            zIndex={50}
            boxSize="5"
            cursor="pointer"
          />
        </Link>
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/108PcMKTpslB-qY2kzIJ2arYobVM4OQUb/view?usp=sharing"
        >
          <Icon
            as={BsFileTextFill}
            ml="2"
            float="right"
            zIndex={50}
            boxSize="5"
            cursor="pointer"
          />
        </Link>
      </Flex>
    </Flex>
  );
}
