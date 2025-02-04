"use client";
import { Text } from "@chakra-ui/react";

interface Props {
  title: string;
  bgTitle: string;
}

const HeadingTitle: React.FC<Props> = ({ title, bgTitle }) => {
  return (
    <Text
      position="relative"
      fontSize={"sm"}
      fontWeight={"semibold"}
      data-backdrop-text="About Me"
      fontFamily={"robotoMono"}
      _before={{
        content: '"/ /"',
        paddingRight: "8px",
      }}
      _after={{
        fontSize: "4xl",
        fontFamily: "body",
        content: `"${bgTitle}"`,
        opacity: 0.1,
        textTransform: "uppercase",
        lineHeight: 1.1,
        position: "absolute",
        bottom: 0,
        fontWeight: 700,
        WebkitTextStrokeWidth: "1.4px",
        WebkitTextStrokeColor: "black",
        textFillColor: "transparent",
        left: 0,
        paddingRight: "8px",
      }}
      textTransform={"uppercase"}
    >
      {title}
    </Text>
  );
};
export default HeadingTitle;
