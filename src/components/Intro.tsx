import { Heading, Button, Link, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Intro = () => {
  const router = useRouter();

  return (
    <Flex direction="column" gap={3}>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="2xl">
          Hannah Harries
        </Heading>

        <Button
          bg="gray.800"
          color="white"
          _hover={{ bg: "gray.600", color: "white" }}
          onClick={() =>
            window.open("/pdf/hannah-harries-resume.pdf", "_blank")
          }
        >
          Download
        </Button>
      </Flex>
      <Heading as="h2" size="md">
        Front-End Developer
      </Heading>
      <Text>
        Cambridge, UK |{" "}
        <Link href="mailto:hannahjeanharries@gmail.com">
          hannahjeanharries@gmail.com
        </Link>{" "}
        |{" "}
        <Link href="https://www.github.com/hann0r" target="_blank">
          github.com/hann0r
        </Link>
      </Text>

      <Text>
        During the last 8 months I have completed all four{" "}
        <Link href="https://www.shecodes.io" target="_blank">
          'SheCodes'
        </Link>{" "}
        coding workshops, whilst working at a local preschool. Using previous
        knowledge gained through my passion for learning and years of
        office-based roles. I began with the basics of coding, all the way up to
        learning React.js and Responsive web design. I've created four web
        pages, each showcased in my final{" "}
        <Link href="https://www.hannahharries.com" target="_blank">
          'Portfolio'
        </Link>{" "}
        project. I then re-visited the early web-pages that I created, editing
        each one to make them fully responsive for all devices. Details of the
        skills I am now competent in and the workshops I have successfully
        completed can be seen below. Currently seeking a full-time remote
        Front-end Developer role.
      </Text>
    </Flex>
  );
};
