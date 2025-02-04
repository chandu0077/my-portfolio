"use client";
import { Link, Text, Flex, useBreakpoint } from "@chakra-ui/react";

interface Props {
  title: string;
  isActive?: boolean;
  link: string;
  titleshort: string;
}

const MenuItem: React.FC<Props> = ({ title, isActive, link, titleshort }) => {
  const breakpoint = useBreakpoint({ ssr: true });

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      position="relative"
    >
      <Link
        href={`#${link}`}
        textDecoration={"none"}
        _hover={{
          textDecoration: "none",
        }}
      >
        {["base", "xs", "sm", "md", "lg"].includes(breakpoint) && (
          <Text
            fontFamily={"menu"}
            fontSize={"sm"}
            color={isActive ? "white" : "rgba(255, 255, 255, 0.7)"}
            letterSpacing={isActive ? "1px" : 0}
            id={isActive === true ? "circle-animation" : undefined}
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: "0",
              background: "white",
              width: "5px",
              height: "5px",
              border: "1px dashed white",
              borderRadius: "50%",
              transition: "ease-out 0.2s",
            }}
          >
            {titleshort}
          </Text>
        )}
        {!["base", "xs", "sm", "md", "lg"].includes(breakpoint) && (
          <Text
            fontFamily={"robotoMono"}
            fontSize={"sm"}
            color={isActive ? "white" : "rgba(255, 255, 255, 0.7)"}
            letterSpacing={isActive ? "1px" : 0}
          >
            {title}
          </Text>
        )}
      </Link>

      <Text
        as="span"
        position={"absolute"}
        top="50%"
        right="0"
        display={{ base: "none", xl: "block" }}
        _before={{
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: "0.7",
          background: "white",
          width: "5px",
          height: "5px",
          border: "1px dashed white",
          borderRadius: "50%",
          transition: "ease-out 0.2s",
        }}
        id={isActive === true ? "circle-animation" : undefined}
      ></Text>
    </Flex>
  );
};

export default MenuItem;
