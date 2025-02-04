"use client";
import { Text, Flex, Link } from "@chakra-ui/react";

interface Props {
  date: string;
  title: string;
  link: string;
}

const BlogDetails: React.FC<Props> = ({ date, title, link }) => {
  return (
    <Flex direction={"column"} alignItems={"start"} justifyContent={"center"}>
      <Text fontSize={"sm"}>Posted on {date}</Text>
      <Link href={link} target="_blank">
        <Text
          fontSize={{ base: "xl", xl: "3xl" }}
          mb="3"
          textDecoration="underline"
        >
          {title}
        </Text>
      </Link>
      <Link
        href={link}
        border={"1px dashed rgba(0, 0, 0, 0.2)"}
        borderRadius={"full"}
        bgColor={"white"}
        _hover={{
          bgColor: "black",
          color: "white",
        }}
        fontWeight={"normal"}
        fontSize={"sm"}
        textDecoration={"underline"}
        px="5"
        py="3"
        target="_blank"
      >
        Read more
      </Link>
    </Flex>
  );
};

export default BlogDetails;
