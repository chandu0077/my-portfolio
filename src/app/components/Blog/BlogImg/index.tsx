"use client";
import Image from "next/image";
import { Text, Box, useBreakpoint } from "@chakra-ui/react";

interface Props {
  about: string;
  imgUrl: string;
}

const BlogImg: React.FC<Props> = ({ about, imgUrl }) => {
  const breakpoint = useBreakpoint({ ssr: true });

  return (
    <Box position={"relative"}>
      <Box
        _hover={{
          transition: "ease-out 0.16s",
          transform: "scale(1.04)",
          filter: "blur(1.5px)",
          cursor: "pointer",
        }}
      >
        {["base", "xs", "sm", "md", "lg"].includes(breakpoint) ? (
          <Image
            style={{
              transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
              width: "100%",
              height: "auto",
            }}
            src={imgUrl}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        ) : (
          <Image
            style={{
              transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
              maxWidth: "300px",
            }}
            src={imgUrl}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        )}
      </Box>
      <Box
        position="absolute"
        top="3"
        left="1"
        py="2"
        px="3"
        backdropFilter={"blur(5px)"}
        borderRadius={"full"}
        background={"rgba(0, 0, 0, 0.2)"}
      >
        <Text
          textDecoration={"underline"}
          textTransform={"uppercase"}
          fontSize={"sm"}
          color="white"
        >
          {about}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogImg;
