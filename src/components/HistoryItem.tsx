import {
  Avatar,
  Heading,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { THistory } from "content";

export const HistoryItem = ({
  title,
  logoSrc,
  name,
  startDate,
  endDate,
  details,
}: THistory) => (
  <Grid
    className="historyItem"
    templateColumns="repeat(12, 1fr)"
    gap={[4, 4, 4, 6]}
  >
    <GridItem colSpan={[12, 12, 12, 3]}>
      <Flex gap={3} align="flex-start">
        <Image
          src={logoSrc}
          width="48"
          height="48"
          objectFit="contain"
          alt={logoSrc}
        />
        <Flex gap={1} direction="column">
          <Heading as="h4" size="sm">
            {name}
            {title && (
              <Text d={["inline", "inline", "inline", "none"]}>
                {" - "}
                {title}
              </Text>
            )}
          </Heading>
          <Text>
            {startDate} - {endDate}
          </Text>
        </Flex>
      </Flex>
    </GridItem>

    <GridItem colSpan={[12, 12, 12, 9]}>
      <Flex gap={3} direction="column">
        {title && (
          <Heading size="sm" d={["none", "none", "none", "block"]}>
            {title}
          </Heading>
        )}

        {details.map((detail, i) => (
          <p key={`${name}-detail-${i}`}>{detail}</p>
        ))}
      </Flex>
    </GridItem>
  </Grid>
);
