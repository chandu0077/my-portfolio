import Image from "next/image";
import { useDisclosure, SlideFade, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  id: string;
  projectUrl: string;
  imgUrl: string;
  about: string;
  title: string;
}

const Project: React.FC<Props> = ({ title, about, imgUrl, id, projectUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const projectlinks = [
    { id: 1, name: "https://www.recipefau.life/" },
    { id: 2, name: "https://www.txt2imageai.live/" },
    { id: 3, name: "https://food-order-ecru-seven.vercel.app/" },
    { id: 4, name: "https://food-order-ecru-seven.vercel.app/" },
  ];

  return (
    <Box
      key={id}
      w={{ base: "90%", xl: "45%" }}
      h="auto"
      borderRadius={"lg"}
      position={"relative"}
      role="group"
      onMouseOver={onOpen}
      onMouseOut={onClose}
      overflow={"hidden"}
      className="portfolio"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0,
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)",
        width: "100%",
        height: "100%",
      }}
      _hover={{
        _after: {
          opacity: 1,
        },
      }}
    >
      <Box
        _groupHover={{
          transition: "ease-out 0.16s",
          transform: "scale(1.04)",
          filter: "blur(1.5px)",
        }}
      >
        <Image
          style={{
            borderRadius: "14px",
            transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
            width: "100%",
            height: "auto",
          }}
          src={imgUrl}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </Box>
      <Box
        position="absolute"
        top="5"
        right="4"
        p="2"
        backdropFilter={"blur(5px)"}
        borderRadius={"xl"}
        background={"rgba(0, 0, 0, 0.2)"}
      >
        <Text fontSize={"sm"} color="white">
          {about}
        </Text>
      </Box>
      <SlideFade in={isOpen} offsetY="15px">
        <Box zIndex={1} position="absolute" bottom="5" left="4">
        
          <Link target="_blank" href={projectUrl}>
            <Text
              className="text-stroke-white"
              textDecoration="underline"
              fontSize={"5xl"}
              display={"none"}
              _groupHover={{
                display: "block",
              }}
              _hover={{
                textDecoration: "none",
                WebkitTextFillColor: "white",
                cursor: "pointer",
              }}
            >
              {title}
            </Text>
          </Link>
        </Box>
      </SlideFade>
    </Box>
  );
};

export default Project;
