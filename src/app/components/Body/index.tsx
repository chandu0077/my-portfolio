"use client";
import { Flex, Box } from "@chakra-ui/react";
import Avatar from "./Avatar";
import About from "./About";
import Experience from "./About/Experience";
import BlogPosts from "../BlogPosts";
import Contact from "../Contact";
import ResumeEducation from "../ResumeEducation";
import Portfolio from "../Portfolio";

export default function Body() {
  return (
    <Flex w={{ base: "100%", xl: "75%" }} gap="4" direction="column" mb="12">
      <Box
        boxShadow={"0 8px 26px 0 rgba(22, 24, 26, 0.07)"}
        bgColor={"white"}
        borderRadius={"xl"}
        p="8"
      >
        <Flex
          justifyContent={"space-between"}
          direction={{ base: "column", xl: "row" }}
          gap={{ base: 10, xl: 0 }}
        >
          <Avatar />
          <About />
        </Flex>
        <Flex
          direction={{ base: "column", xl: "row" }}
          justifyContent={"start"}
          gap={{ base: 4, xl: "32" }}
        >
          <Experience title={"1"} about={"Years of Experience"} />
          <Experience title={"40"} about={"hours of working"} />
          <Experience title={"7"} about={"projects done"} />
        </Flex>
      </Box>
      <ResumeEducation />
      <Portfolio />
      <BlogPosts />
      <Contact />
    </Flex>
  );
}
