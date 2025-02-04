import { Flex } from "@chakra-ui/react";
import Project from "../Project";

export default function AllProjects() {
  return (
    <Flex
      wrap={{ base: "nowrap", xl: "wrap" }}
      justifyContent={"space-evenly"}
      rowGap={12}
      mx="12"
      direction={{ base: "column", xl: "row" }}
      alignItems={"center"}
    >
      <Project
        id="1"
        title="Recipe Route"
        about="NEXT.JS, TAILWIND CSS, EXPRESS.JS, MONGODB"
        imgUrl="/images/p1.png"
        projectUrl="https://www.recipefau.life/"
      />

      <Project
        id="2"
        title="Txt2Img"
        about="Text To Img Gen, VITE, SCSS"
        imgUrl="/images/text2img.png"
        projectUrl="https://www.txt2imageai.live/"
      />
      <Project
        id="3"
        title="Food Order"
        about="React js, Tailwind Css, JS"
        imgUrl="/images/foodOrder.png"
        projectUrl="https://food-order-ecru-seven.vercel.app/"
      />
      <Project
        id="4"
        title="Meeting App"
        about="HTMl CSS, JavaScript"
        imgUrl="/images/meetschedule.png"
        projectUrl="https://aeonaxy-task-sigma.vercel.app/"
      />
      {/*<Project
        title="Plasbit"
        about="MERN, METEORJS, WEB3"
        url="/images/p5.jpg"
      />
      <Project
        title="Stelareum"
        about="TWIG, LAMINAS, COINBASEAPI"
        url="/images/p6.jpg"
      /> */}
    </Flex>
  );
}
