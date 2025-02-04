"use client";
import { Flex } from "@chakra-ui/react";
import Blog from "../Blog";

export default function AllBlogs() {
  return (
    <Flex direction={"column"} px="10" rowGap={12}>
      <Blog
        date="Aug 25"
        title="JS in bits"
        link="https://dev.to/chandu_dsc"
        about="Dev.to"
        imgUrl="/images/dev.png"
      />
      {/* <Blog
        date="Jul 8"
        title="System Design in bits"
        link="https://substack.com/@avinashd"
        about="Substack"
        imgUrl="/images/substack.png"
      /> */}
    </Flex>
  );
}
