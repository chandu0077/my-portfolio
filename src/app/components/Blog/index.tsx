"use client";
import { Flex, Box } from "@chakra-ui/react";
import BlogImg from "./BlogImg";
import BlogDetails from "./BlogDetails";

interface Props {
  date: string;
  title: string;
  link: string;
  about: string;
  imgUrl: string;
}

const Blog: React.FC<Props> = ({ date, title, link, about, imgUrl }) => {
  return (
    <Box h="auto" position={"relative"}>
      <Flex gap="12" direction={{ base: "column", xl: "row" }}>
        <BlogImg imgUrl={imgUrl} about={about} />

        <BlogDetails date={date} title={title} link={link} />
      </Flex>
    </Box>
  );
};

export default Blog;
