"use client";
import { Text, Box } from "@chakra-ui/react";
import Work from "./Work";
import HeadingTitle from "../../HeadingTitle";
export default function About() {
  return (
    <Box w={{ base: "100%", lg: "68%" }} id="portfolio-about">
      <HeadingTitle title="about me" bgTitle="about me" />

      <Text mt="4" fontSize={{ base: "2xl", xl: "4xl" }}>
        Software Engineer
      </Text>
      <Text
        mt="4"
        fontSize={"sm"}
        color="rgb(33, 37, 41)"
        lineHeight={"27.84px"}
      >
        Chandu is an software engineer fresher expertise in building dynamic web
        applications using React.js, Node.js, Express.js, and MongoDB. Skilled
        in developing scalable, responsive, and high-performance applications.
        Passionate about writing clean code and optimizing user experience.
      </Text>
      <Work />
    </Box>
  );
}
