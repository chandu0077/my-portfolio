import { Flex, Box } from "@chakra-ui/react";
import BgLines from "./components/BgLines";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Body from "./components/Body";
export default function Home() {
  return (
    <Box w="100%" h="auto">
      <Box w={{ base: "90%", xl: "1280px" }} mx="auto">
        <Header />
        <Flex
          justifyContent={"space-between"}
          direction={{ base: "column", xl: "row" }}
          rowGap={{ base: 16, xl: 0 }}
        >
          <Menu />
          <Body />
        </Flex>
        <BgLines />
      </Box>
    </Box>
  );
}
