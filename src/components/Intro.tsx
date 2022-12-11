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
          onClick={() => window.open("/pdf/updated-resume.pdf", "_blank")}
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
        |{" "}
        <Link href="https://www.hannahharries.com" target="_blank">
          Portfolio
        </Link>{" "}
      </Text>

      <Text>
        Since completing all four{" "}
        <Link href="https://www.shecodes.io" target="_blank">
          <u>SheCodes</u>
        </Link>{" "}
        coding workshops, I have been working full time as a Developer for both{" "}
        <Link href="https://www.loopspeed.co.uk" target="_blank">
          <u>Loopspeed</u>
        </Link>{" "}
        and{" "}
        <Link href="https://wingcard.io/" target="_blank">
          <u>Wingcard.</u>
        </Link>{" "}
        Creating websites and apps in partnership with SharpEnd, working with
        companies such as Jo Malone, Puma, Levis and Mclaren. Using the
        following technologies, HTML, CSS, JavaScript, React, Typscript,
        Next.js, MUI, TailwindCSS, SASS, Firebase, Supabase, Contentful,
        Styled-components, GSAP, Gatsby, Node.js.
      </Text>
    </Flex>
  );
};
