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
        <i>
          Cambridge, UK |{" "}
          <Link href="mailto:hannahjeanharries@gmail.com">
            hannahjeanharries@gmail.com
          </Link>{" "}
          |{" "}
          <Link href="https://www.github.com/hann0r" target="_blank">
            github.com/hann0r{" "}
          </Link>
          |{" "}
          <Link href="https://www.hannahharries.com" target="_blank">
            SheCodes Portfolio
          </Link>{" "}
        </i>
      </Text>

      <Text>
        Full time Frontend Developer and Designer working for both{" "}
        <Link href="https://www.loopspeed.co.uk" target="_blank">
          <u>Loopspeed</u>
        </Link>{" "}
        and{" "}
        <Link href="https://wingcard.io/" target="_blank">
          <u>Wingcard.</u>
        </Link>{" "}
        Creating and designing Websites, Applications and Branding.
        Collaborating and communicating with developers, working in partnership
        with private clients and SharpEnd, on projects for companies such as Jo
        Malone, Puma, Levis and Mclaren.
        <br />
        <br />
        Vast experience using the following - Wireframes, Figma, Visual Code
        Studio, HTML, CSS, JavaScript, React, Typescript, Next.js, MUI,
        TailwindCSS, SASS, Firebase, Supabase, Contentful CMS,
        Styled-components, GSAP, Gatsby, Node.js, Implementing SEO, Github -
        Pulling, Comparing, Rebaseing and Merging.
        <br />
        <br /> Alongside the development work, I have been designing company
        branding for private clients, this includes creating Brochures, Legal
        Documents, Logos, Brand guidelines and Business cards. <br />
        <br />I have also been QA testing applications, with a keen eye and
        attention to detail ensuring all aspects are working correctly within
        the UX/UI flow.
      </Text>
    </Flex>
  );
};
