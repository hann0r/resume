import { Heading, Flex } from "@chakra-ui/react";
import { THistory } from "content";
import { HistoryItem } from "components";

export const HistoryList = ({
  title,
  items,
}: {
  title: string;
  items: THistory[];
}) => (
  <Flex direction="column" gap={6}>
    <Heading as="h3" size="md">
      {title}
    </Heading>

    <Flex direction="column" gap={10}>
      {items.map((item) => (
        <HistoryItem {...item} key={item.name} />
      ))}
    </Flex>
  </Flex>
);
