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

export default function HartSquareContentPage() {
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
                  Hart Square Content
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
                  My Role
                </Text>
                <Text fontSize={"lg"} color={"white"}>
                  Content Management and Creation
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
            The challenge
          </Text>
          <Text as="p" marginTop="5">
            Content Management and Creation
            <br />
            <br></br>
            Key responsibilities included:
            <UnorderedList>
              <ListItem>
                {" "}
                Develop and implement a content strategy that aligns with the
                organisation's goals and target audience
              </ListItem>
              <ListItem>stablishing a editorial content calendar </ListItem>
              <ListItem>
                Identification and management of digital marketing channels
              </ListItem>
              <ListItem>Management of content writers </ListItem>
              <ListItem>Content performance analysis </ListItem>
            </UnorderedList>
          </Text>
          <br />
          <br></br>
          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            Steps in Process
          </Text>
          <OrderedList marginLeft="10">
            <ListItem>
              Define audience: To understand our target audience, I worked with
              internal stakeholders to understand the challenges and objectives
              of our clients and thus our target audience. Through a series of
              content workshops, I was able to gather feedback from which I
              identified content topics.
            </ListItem>
            <ListItem>
              Identify content channels: Previously Hart Square had only used
              blogs and guides to distribute their content. Through researching
              competitors the marketplace, I identified that we could expand
              channels to include infographics, podcasts, social media, videos
              and testimonials and case studies.
            </ListItem>
            <ListItem>
              Content Planning: I established a content calendar using AirTable
              in which I would distribute content topics across the different
              channels. I owned beginning-to-end content creation across all
              digital platforms and ensure consistency in branding, format and
              style. This involves reviewing all content created by contributing
              writers for accuracy, quality control and adherence to brand style
              as well as implementing best SEO practices.
            </ListItem>
            <ListItem>
              Promotion and Monitoring: I developed a plan to promote each
              content item which also included creating a social media calendar
              and initiating an Insights newsletter to 8000+ email subscribers.
              I collated and evaluated analytics through Google Analytics and
              social media analytics tools, to derive insights and identify
              improvements to increase engagement and audience retention. I
              presented these statistics and analytics to senior leaders to keep
              them informed of the successes and developments.
            </ListItem>
          </OrderedList>
          <Text as={"h2"} marginTop="5" fontSize="xl">
            Deliverables
          </Text>
          <UnorderedList>
            <ListItem>Content calendar </ListItem>
            <ListItem>Content publication</ListItem>
            <ListItem>Social media planner</ListItem>

            <ListItem>Content newsletter</ListItem>
          </UnorderedList>
          <Text as={"h2"} marginTop="5" fontSize="xl">
            Results
          </Text>
          <UnorderedList>
            <ListItem>
              Range of content produced including blog articles, guides, case
              studies, infographics, videos and podcasts.{" "}
            </ListItem>
            <ListItem>
              Increased traffic to website, collectively resulted in a 44%
              increase in organic traffic to website.
            </ListItem>
          </UnorderedList>
          <Text as={"h2"} marginTop="5" fontSize="xl">
            Challenges and lessons learnt
          </Text>
          <UnorderedList>
            <ListItem>
              A key challenge which I often faced was unexpected changes to
              calendar as content would not always come through on the deadline.
              To overcome this issue I created a ‘backlog’ of content to fall
              back which ensure the continued publication of content. I would
              also repurpose content into new forms, for example a webinar
              written up into a blog. This would reduce the time taken to
              produce a new piece of content and also allow for the optimisation
              of content we have already produced.
            </ListItem>
          </UnorderedList>
        </Container>
      </Box>
    </>
  );
}
