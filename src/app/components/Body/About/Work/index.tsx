"use client";
import { Text, Flex } from "@chakra-ui/react";

export default function Work() {
  return (
    <Flex mt="4" gap="4" flexWrap={{ base: "wrap", xl: "nowrap" }}>
      <Text
        px="4"
        py="2"
        borderRadius={"full"}
        border="1px dashed rgba(0, 0, 0, 0.2)"
        color="(33, 37, 41)"
        fontSize={"md"}
        lineHeight={"24px"}
      >
        Frontend(95%)
      </Text>
      <Text
        px="4"
        py="2"
        borderRadius={"full"}
        border="1px dashed rgba(0, 0, 0, 0.2)"
        color="(33, 37, 41)"
        fontSize={"md"}
        lineHeight={"24px"}
      >
        Backend(70%)
      </Text>
      <Text
        px="4"
        py="2"
        borderRadius={"full"}
        border="1px dashed rgba(0, 0, 0, 0.2)"
        color="(33, 37, 41)"
        fontSize={"md"}
        lineHeight={"24px"}
      >
        Cloud(60%)
      </Text>
    </Flex>
  );
}
