"use client";
import { Text, Flex, Box } from "@chakra-ui/react";
import HeadingTitle from "../HeadingTitle";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Box
      boxShadow={"0 8px 26px 0 rgba(22, 24, 26, 0.07)"}
      bgColor={"white"}
      borderRadius={"xl"}
      py="8"
      id="portfolio-contact"
    >
      <Box px="10" pt="8">
        <HeadingTitle title="Get in touch" bgTitle="Contact" />
      </Box>
      <Text
        px="10"
        py="3"
        fontWeight={500}
        fontSize={{ base: "2xl", xl: "4xl" }}
      >
        Reach Me
      </Text>

      <Text px="10" pb="6" fontWeight={500} fontSize={"sm"}>
        If you want to contact me, just call me or email.
      </Text>

      <Flex px="10" gap="4" flexWrap={"wrap"}>
        <Text
          px="4"
          py="2.5"
          borderRadius={"full"}
          border="1px dashed rgba(0, 0, 0, 0.2)"
        >
          Phone: +(91) 9014752534
        </Text>
        <Text
          px="4"
          py="2.5"
          borderRadius={"full"}
          border="1px dashed rgba(0, 0, 0, 0.2)"
        >
          Email: chandu.dsc77@gmail.com
        </Text>
      </Flex>

      <ContactForm />
    </Box>
  );
}
