"use client";
import { Text, Flex, Box } from "@chakra-ui/react";

interface Props {
  title: string;
  about: string;
}

const Experience: React.FC<Props> = ({ title, about }) => {
  return (
    <Flex gap="2">
      <Text fontSize={"6xl"} className="text-stroke-black">
        {title}
      </Text>
      <Box mt="4">
        <Text fontSize={"2xl"}>+</Text>
        <Text fontWeight={600} fontSize={"xs"} textTransform={"uppercase"}>
          {about}
        </Text>
      </Box>
    </Flex>
  );
};

export default Experience;
