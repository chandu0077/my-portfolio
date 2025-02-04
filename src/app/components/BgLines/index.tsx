"use client";
import { Flex, Box } from "@chakra-ui/react";

export default function BgLines() {
  return (
    <Flex position={"fixed"} w="100%" h="100%" top="0" left="0" zIndex={-1}>
      <Box
        className="bg-line-animation line-1"
        position={"absolute"}
        left="0"
        w="20%"
        borderRight={"1px solid #dcdfe2"}
        h="100vh"
      ></Box>
      <Box
        className="bg-line-animation line-2"
        position={"absolute"}
        left="0"
        w="40%"
        borderRight={"1px solid #dcdfe2"}
        h="100vh"
      ></Box>
      <Box
        className="bg-line-animation line-3"
        position={"absolute"}
        left="0"
        w="60%"
        borderRight={"1px solid #dcdfe2"}
        h="100vh"
      ></Box>
      <Box
        className="bg-line-animation line-4"
        position={"absolute"}
        left="0"
        w="80%"
        borderRight={"1px solid #dcdfe2"}
        h="100vh"
      ></Box>
    </Flex>
  );
}
