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
                  To establish a strong and cohesive brand identity and
                  implement the new brand in the development of a new company
                  website.
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
            Project Lead
            <br />
            <br></br>
            Key responsibilities included:
            <UnorderedList>
              <ListItem>
                Collaborated with internal and external stakeholders to align on
                brand vision and implementation.
              </ListItem>
              <ListItem>
                Reviewed and refined rebrand designs to ensure consistency and
                effectiveness.
              </ListItem>
              <ListItem>
                Created collateral to implement the new brand identity across
                all company materials.
              </ListItem>
              <ListItem>
                Managed project timelines to ensure successful and timely
                execution.
              </ListItem>
            </UnorderedList>
          </Text>
          <br />
          <br></br>
          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            Deliverables
          </Text>
          <OrderedList marginLeft="10">
            <ListItem>
              Established a new brand logo to reflect company values and vision.
            </ListItem>
            <ListItem>
              Implemented a new style guide across all company collateral to
              maintain brand consistency.
            </ListItem>
            <ListItem>
              Successfully launched a new website aligned with the refreshed
              brand identity.
            </ListItem>
          </OrderedList>
          <br />
          <br></br>
          <Text as="p">
            This project demonstrates my ability to lead branding initiatives,
            oversee design implementation, and ensure a seamless transition
            across digital and physical platforms. The successful rebrand
            strengthened Hart Square's market presence and improved user
            engagement through a well-executed website redesign.
          </Text>
        </Container>
      </Box>
    </>
  );
}
