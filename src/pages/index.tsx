import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import { Intro, HistoryList } from "components";
import { experiences, education } from "content";

const Index = () => {
  return (
    <Container className="container" py={10} maxW="5xl">
      <Head>
        <title>Hannah Harries - Resume</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>"
        />
      </Head>
      <Flex direction="column" gap={10}>
        <Intro />
        <HistoryList title="Work Experience" items={experiences} />
        <HistoryList title="Education" items={education} />
      </Flex>
    </Container>
  );
};
export default Index;
