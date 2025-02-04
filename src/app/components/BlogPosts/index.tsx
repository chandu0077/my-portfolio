"use client";
import { Text, Box } from "@chakra-ui/react";
import HeadingTitle from "../HeadingTitle";
import AllBlogs from "../AllBlogs";

export default function BlogPosts() {
  return (
    <Box
      boxShadow={"0 8px 26px 0 rgba(22, 24, 26, 0.07)"}
      bgColor={"white"}
      borderRadius={"xl"}
      py="8"
      id="portfolio-blogs"
    >
      <Box px="10" pt="8">
        <HeadingTitle title="Blog" bgTitle="Blog" />
      </Box>
      <Text
        px="10"
        pt="3"
        pb="6"
        fontWeight={500}
        fontSize={{ base: "2xl", xl: "4xl" }}
      >
        Blog Posts
      </Text>

      <AllBlogs />
    </Box>
  );
}
