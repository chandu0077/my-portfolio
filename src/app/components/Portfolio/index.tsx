import { Text, Box } from "@chakra-ui/react";
import HeadingTitle from "../HeadingTitle";
import AllProjects from "../AllProjects";

export default function Portfolio() {
  return (
    <Box
      boxShadow={"0 8px 26px 0 rgba(22, 24, 26, 0.07)"}
      bgColor={"white"}
      borderRadius={"xl"}
      py="8"
      id="portfolio-works"
    >
      <Box px="10" pt="8">
        <HeadingTitle title="portfolio" bgTitle="portfolio" />
      </Box>
      <Text
        px="10"
        pt="3"
        pb="6"
        fontWeight={500}
        fontSize={{ base: "2xl", xl: "4xl" }}
      >
        My Latest Works
      </Text>

      <AllProjects />
    </Box>
  );
}
