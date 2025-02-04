"use client";
import { Text, Flex, Box } from "@chakra-ui/react";
import HeadingTitle from "../HeadingTitle";
import Education from "./Education";

export default function ResumeEducation() {
  return (
    <Box
      boxShadow={"0 8px 26px 0 rgba(22, 24, 26, 0.07)"}
      bgColor={"white"}
      borderRadius={"xl"}
      py="8"
      id="portfolio-resume"
    >
      <Box px="10" pt="8">
        <HeadingTitle title="resume" bgTitle="resume" />
      </Box>
      <Text
        px="10"
        pt="3"
        pb="6"
        fontWeight={500}
        fontSize={{ base: "2xl", xl: "4xl" }}
      >
        Education & Experience
      </Text>

      <Flex
        justifyContent={"space-between"}
        direction={{ base: "column", xl: "row" }}
      >
        <Box w={{ base: "100%", xl: "48%" }}>
          <Education
            year="2018 - 2022"
            title="Bachelor's Degree"
            place="ALIET"
            id="1"
          />
        </Box>
        <Box w={{ base: "100%", xl: "48%" }}>
          <Education
            year="June 2024 - Oct 2024"
            title="Fullstack Developer"
            place="Shopvana"
            id="2"
          />
          <Education
            year="Dec 2023 - May 2024"
            title="Front End Intern"
            place="XInterview"
          />
          {/* <Education
            year="Feb 2021 - Jan 2022"
            title="Fullstack Developer"
            place="Freelancing"
          />
          <Education
            year="July 2018 - Dec 2020"
            title="Fullstack Developer"
            place="Bak Bak Technologies"
          /> */}
        </Box>
      </Flex>
    </Box>
  );
}
