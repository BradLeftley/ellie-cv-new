import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  ListItem,
  UnorderedList,
  OrderedList,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HartSquareWebsitePage() {
  return (
    <>
      <Box
        bg={useColorModeValue("pink.700", "gray.5700")}
        position={"relative"}
      >
        {/* <Flex
          flex={1}
          zIndex={0}
          display={{ base: "none", lg: "flex" }}
          backgroundImage="url('https://i.ibb.co/jwGKfF6/Screen-Shot-2021-02-28-at-12-44-48.png')"
          backgroundSize={"cover"}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={"absolute"}
          width={"50%"}
          insetY={0}
          right={0}
        >
          <Flex
            bgGradient={"linear(to-r, pink.100 10%, transparent)"}
            w={"full"}
            h={"full"}
          />
        </Flex> */}
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              color={"white"}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 20, xl: 20 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                {/* <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                  mb={3}
                  fontSize={"xl"}
                  color={"white.500"}
                >
                  Personal project
                </Text> */}
                <Heading
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  Hart Square rebrand and implementation of new website
                </Heading>
                <Text fontSize={"lg"} color={"white"}>
                  Hart Square is an independent technology consultancy operating
                  exclusively in the non-profit sector. I was tasked with
                  creating a content calendar for the organisation with the aims
                  to build brand awareness, become established as a thought
                  leader in the sector and to increase traffic to the website.
                  <br />
                  <br></br>
                </Text>
                <Text fontSize={"2xl"} color={"white"}>
                  Aim
                </Text>
                <Text fontSize={"lg"} color={"white"}>
                  To establish a strong brand identity and to implement the new
                  brand in the implementation of a new company website
                </Text>
              </Box>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
      <Box position={"relative"}>
        <Container maxW={"4xl"} p="6">
          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            My Role
          </Text>
          <Text as="p" marginTop="5">
            Project lead
            <br />
            <br></br>
            Key responsibilities included:
            <UnorderedList>
              <ListItem>
                {" "}
                Working closely with both internal and external stakeholders.
              </ListItem>
              <ListItem>Review rebrand designs </ListItem>
              <ListItem>
                Create collateral to implement new brand across company
              </ListItem>
              <ListItem>Ensure project remained on track</ListItem>
            </UnorderedList>
          </Text>
          <br />
          <br></br>
          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            Deliverables
          </Text>
          <OrderedList marginLeft="10">
            <ListItem>New brand logo established</ListItem>
            <ListItem>
              Implementation of new style guide across company collateral
            </ListItem>
            <ListItem>Implementation of new website</ListItem>
          </OrderedList>
        </Container>
      </Box>
    </>
  );
}
