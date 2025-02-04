"use client";
import Image from "next/image";
import { Text, Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Avatar() {
  const [animeText, setAnimeText] = useState("I'M CHANDU");
  useEffect(() => {
    setTimeout(function () {
      if (animeText === "I'M CHANDU") {
        setAnimeText("HELLO THERE!");
      } else {
        setAnimeText("I'M CHANDU");
      }
    }, 2000);
  }, [animeText]);

  return (
    <Flex w={{ base: "100%", xl: "30%" }}>
      <Box
        borderRadius={"full"}
        border="1px dashed rgba(0, 0, 0, 0.2)"
        w="256px"
        h="256px"
        position={"relative"}
      >
        <Image
          src="/images/title.png"
          width={500}
          height={500}
          alt="Picture of the author"
          style={{
            borderRadius: "50%",
          }}
        />

        <Flex
          position={"absolute"}
          bottom="3"
          className="typewriter"
          borderRadius={"full"}
          py="2"
          px="4"
          bgColor={"#b1b1b1"}
          w="170px"
          boxShadow={"0 8px 26px 0 rgba(22, 24, 26, 0.11)"}
        >
          <Text
            boxSizing="border-box"
            className="typing-erase"
            fontSize={"md"}
            fontFamily={"robotoMono"}
            color="white"
            letterSpacing={"1px"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
          >
            {animeText}
          </Text>
          <Text className="typing-underscore" color="white">
            _
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
