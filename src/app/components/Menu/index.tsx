"use client";
import { Flex } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { useState } from "react";

export default function Menu() {
  const [handle, setHandle] = useState<string>("portfolio-about");

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      myFunction();
    };
  }

  function myFunction() {
    const scrollInPx = document.documentElement.scrollTop;
    if (scrollInPx < 500) {
      setHandle("portfolio-about");
    } else if (scrollInPx >= 500 && scrollInPx < 1300) {
      setHandle("portfolio-resume");
    } else if (scrollInPx >= 1300 && scrollInPx < 1800) {
      setHandle("portfolio-works");
    } else if (scrollInPx >= 1800 && scrollInPx < 2200) {
      setHandle("portfolio-blogs");
    } else if (scrollInPx > 2200) {
      setHandle("portfolio-contact");
    }
    // else if (scrollInPx >= 2200 && scrollInPx < 2600) {
    //   setHandle("portfolio-blogs");
    // }
    // else if (scrollInPx >= 2600) {
    //   setHandle("portfolio-contact");
    // }
  }

  return (
    <Flex
      gap="6"
      direction={{ base: "row", xl: "column" }}
      bgColor={"black"}
      p={{ base: "4", xl: "8" }}
      borderRadius={{ base: "lg", xl: "xl" }}
      w={{ base: "100%", xl: "22%" }}
      h={{ base: "auto", xl: "280px" }}
      top="30"
      position={{ base: "relative", xl: "sticky" }}
      justifyContent={{ base: "space-around", xl: "space-evenly" }}
    >
      <MenuItem
        title="ABOUT ME"
        titleshort="A"
        isActive={handle === "portfolio-about"}
        link="portfolio-about"
      />
      <MenuItem
        title="RESUME"
        titleshort="R"
        isActive={handle === "portfolio-resume"}
        link="portfolio-resume"
      />
      <MenuItem
        title="PORTFOLIO"
        titleshort="P"
        isActive={handle === "portfolio-works"}
        link="portfolio-works"
      />
      <MenuItem
        title="BLOG"
        titleshort="B"
        isActive={handle === "portfolio-blogs"}
        link="portfolio-blogs"
      />
      <MenuItem
        title="CONTACT"
        titleshort="C"
        isActive={handle === "portfolio-contact"}
        link="portfolio-contact"
      />
    </Flex>
  );
}
