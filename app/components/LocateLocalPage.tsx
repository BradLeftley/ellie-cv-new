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
  Link,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  VStack,
} from "@chakra-ui/react";

export default function LocateLocalPage() {
  return (
    <>
      <Box bg={"pink.800"} position={"relative"}>
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: "none", lg: "flex" }}
          backgroundSize={"cover"}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={"absolute"}
          width={"50%"}
          insetY={0}
          right={0}
        >
          <Flex
            bgGradient={"linear(to-r, pink.800 10%, transparent)"}
            w={"full"}
            h={"full"}
          />
        </Flex>
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              color={"white"}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 20, xl: 20 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                  mb={3}
                  fontSize={"xl"}
                  color={"white.500"}
                >
                  Personal project
                </Text>
                <Heading
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  Locate Local
                </Heading>
                <Text fontSize={"lg"} color={"white"}>
                  A business directory allowing users to find businesses and
                  services in their local area.
                  <br />
                  <br></br>
                </Text>
                <Text fontSize={"lg"} color={"white"}>
                  User research | Prototyping | Visual design
                </Text>
              </Box>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
      <Box position={"relative"}>
        <Container maxW={"4xl"} p="12">
          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            The challenge
          </Text>
          <Text as="p" marginTop="5">
            Throughout the global pandemic, there has been continued
            encouragement to support local businesses. However, it can sometimes
            be difficult to identify businesses that operate in the local area,
            especially online businesses. When searching for local businesses
            there can often be a few issues:
            <UnorderedList marginTop={3}>
              <ListItem>
                Information is spread across different platforms (e.g. online
                directories, local social media pages)
              </ListItem>
              <ListItem>
                Business directories often only have contact information and do
                not show much business information or product images
              </ListItem>
            </UnorderedList>
            I decided to explore whether these were common issues that others
            experienced and if so, how I could potentially solve these issues.
          </Text>

          <Box as="hr" my={6} borderColor="gray.200" />

          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            Research
          </Text>

          <Text as={"h3"} marginTop={5} fontSize="lg" fontWeight="semibold">
            Desktop research
          </Text>
          <Text as="p" marginTop={3}>
            I began my desktop research by reviewing a variety of sources where
            businesses local to my area promote their products and services.
            This included business directories, local community webpages and
            local social media groups.
          </Text>
          <Text as="p" marginTop={3}>
            When reviewing these online platforms my aim was to explore how
            easily and efficiently I could find particular businesses. I gave
            myself a number of services and products to search for locally. I
            used the below questions to guide this research:
          </Text>
          <OrderedList marginLeft={10} marginTop={3} spacing={2}>
            <ListItem>
              Can I firstly find the product and/or service that I'm looking
              for?
            </ListItem>
            <ListItem>
              Am I able view images of the product and/or service on that
              platform?
            </ListItem>
            <ListItem>
              How easily can I navigate to find the product/service? What errors
              am I making?
            </ListItem>
          </OrderedList>

          <Text as={"h3"} marginTop={5} fontSize="lg" fontWeight="semibold">
            Interviews
          </Text>
          <Text as="p" marginTop={3}>
            Alongside my desktop research, I interviewed both local community
            members as well as local business owners. Throughout my interviews,
            my aim was to explore if they too experienced the same challenges
            when finding/promoting locals businesses online, and if so, did they
            have similar pain points to the ones I myself found.
          </Text>
          <Text as="p" marginTop={3}>
            Some of the questions I asked included:
          </Text>
          <TableContainer
            marginTop={3}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
          >
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>Community members</Th>
                  <Th>Local business owners</Th>
                </Tr>
                <Tr>
                  <Td>1. How do you find out about local businesses?</Td>
                  <Td>1. How do you promote your business online?</Td>
                </Tr>
                <Tr>
                  <Td>
                    2. Do you find any challenges when searching for local
                    businesses online? If yes, please can you describe these
                    challenges.
                  </Td>
                  <Td>
                    2. With the methods you use to promote your business online,
                    what are some of the positive aspects and what are some of
                    the challenges?
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Text as={"h3"} marginTop={5} fontSize="lg" fontWeight="semibold">
            Results
          </Text>
          <Text as="p" marginTop={3}>
            From the results of my desktop research and interviews with local
            community members and business owners, I was able to identify the
            commonly used online platforms used by both to search and promote
            online businesses. These included social media pages, online
            business directories, business websites and local community
            webpages.
          </Text>
          <Text as="p" marginTop={3}>
            The interviews provided valuable information on the benefits and
            drawbacks of these platforms from the audiences perspectives. To
            help make sense of my interview findings, I grouped common findings
            through the tool of an affinity map.
          </Text>

          <Text as={"h3"} marginTop={5} fontSize="lg" fontWeight="semibold">
            Critical problems identified
          </Text>
          <OrderedList marginLeft={10} marginTop={3} spacing={2}>
            <ListItem>
              Difficulty in finding information on local business through online
              sources as product and service information is inconsistent over a
              variety of sources
            </ListItem>
            <ListItem>
              Commonly used platforms identified had varied rates of conversions
              to purchase
            </ListItem>
          </OrderedList>

          <Box as="hr" my={6} borderColor="gray.200" />

          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            Problem solving through design
          </Text>

          <Text as={"h3"} marginTop={5} fontSize="lg" fontWeight="semibold">
            Personas
          </Text>
          <Text as="p" marginTop={3}>
            Before moving on the ideation phase to develop a solution, I created
            audience personas based on my research. This allowed me to identify
            common behaviours, goals, expectations and problems. This ultimately
            informs me who I will be designing for.
          </Text>
          <VStack spacing={4} marginTop={4} align="center">
            <Image
              src="https://i.ibb.co/nP6sKX8/4.png"
              alt="Persona 1"
              boxSize="200px"
              objectFit="cover"
            />
            <Image
              src="https://i.ibb.co/HHFsNc1/5.png"
              alt="Persona 2"
              boxSize="200px"
              objectFit="cover"
            />
          </VStack>

          <Text as={"h3"} marginTop={5} fontSize="lg" fontWeight="semibold">
            Ideation
          </Text>
          <Text as="p" marginTop={3}>
            Based on the needs and goals of my users, I created a user flow to
            identify what information would need to be presented or interacted
            with by the user at each stage of the user's journey.
          </Text>
          <Text as="p" marginTop={3}>
            I experimented with different user flows to produce one which would
            be most effective to complete the user's task. Throughout the
            iterative process, I tested different flows with users to identify
            the one which would allow the completion of the task most
            effectively and efficiently. I did this through showing users
            high-fidelity designs which I created in Figma. Creating a
            high-fidelity design at this stage, allowed me to gain richer
            insights into the errors users were making in the different flows.
            This was essential to help develop red routes and thus identifying
            the optimum user flow.
          </Text>
          <Text as="p" marginTop={3}>
            One key iteration that occurred through the user tests was to ensure
            the final product page was one that would optimize conversions to
            the company website - this was a key goal of both the user and
            business owners. I found through the user testing, users were unsure
            what action to take next once they had reached the product page. For
            example, many found the contact information on the product page and
            explained that from there, they may call or 'google' the company to
            purchase the product and/or service.
          </Text>
          <Text as="p" marginTop={3}>
            To ensure this page led to conversions, I built in clear key buttons
            which would direct the user to the company's webpages with ease.
            When testing this feature with users again, it proved to reduce
            confusion and increased click-throughs to the company website.
          </Text>

          <Box as="hr" my={6} borderColor="gray.200" />

          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            The outcome
          </Text>

          <Text as={"h3"} marginTop={5} fontSize="lg" fontWeight="semibold">
            Final design
          </Text>
          <Link
            href="https://www.figma.com/design/84l1S04J0usm7nX7IMxfvS/Locate-Local?t=1qGkVM1u2HakZD8M-1"
            target="_blank"
            display="block"
            marginTop={4}
            textAlign="center"
            fontWeight="semibold"
            color="blue.500"
            _hover={{ textDecoration: "underline" }}
          >
            View the wireframes on Figma
          </Link>

          <Text as={"h3"} marginTop={5} fontSize="lg" fontWeight="semibold">
            Reflection
          </Text>
          <Text as="p" marginTop={3}>
            From my final user testing, it is evident that the web-based
            solution I have created will enable users to effectively and
            efficiently locate businesses local to them as well as convert
            browsers to click-throughs to company websites - achieving goals for
            both the user and business owner.
          </Text>
          <Text as="p" marginTop={3}>
            To further develop this design, I would like to enable business
            owners to customize their product page to reflect their business and
            to also incorporate purchasing through the website. This will
            prevent users being directed from the website which increases the
            risk of drop-off and thus conversions.
          </Text>
        </Container>
      </Box>
    </>
  );
}
