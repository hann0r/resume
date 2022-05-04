import { Heading, Button, Link, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Intro = () => {
  const router = useRouter();
  const yearsSinceStart = new Date().getFullYear() - 2006;
  return (
    <Flex direction="column" gap={3}>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="2xl">
          James Lewis Harries
        </Heading>

        <Button
          bg="gray.800"
          color="white"
          _hover={{ bg: "gray.600", color: "white" }}
          onClick={() =>
            window.open("/pdf/james-lewis-harries-resume.pdf", "_blank")
          }
        >
          Download
        </Button>
      </Flex>
      <Heading as="h2" size="md">
        Software Engineer
      </Heading>
      <Text>
        London, UK |{" "}
        <Link href="mailto:james@pancakeuprising.com">
          james@pancakeuprising.com
        </Link>{" "}
        |{" "}
        <Link href="https://www.github.com/vaicine" target="_blank">
          github.com/vaicine
        </Link>
      </Text>
      <Text>
        For the last {yearsSinceStart} years I've been solving problems and
        building software in different languages and stacks to power businesses
        across various industries, from lean start-ups to enterprise level
        companies. I specialise in creating well tested, maintainable and
        pragmatic solutions with a focus on user experience, high-build quality
        and delivering business value.
      </Text>
    </Flex>
  );
};
