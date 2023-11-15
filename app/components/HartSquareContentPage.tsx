import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  ListItem,
  UnorderedList,
  Image,
  Link,
  OrderedList,
  useColorMode,
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
            To develop and manage an editorial content calendar.
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
              Identify topics and guests: To do this I again worked closely with
              internal team members and they are the ‘knowledge holders’. They
              work most closely with our clients, so understood their challenges
              and knowledge gaps. This gave us a range of content topics as well
              as key guests to approach for the podcast.
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
              Record, edit and publish: I recorded the episodes remotely using
              tools such as Zoom and Microsoft Teams. The audio was editing
              using audacity and the video using Adobe Premiere Pro. The podcast
              was publishing using the Blubrry Podcast Hosting Service which
              published on Spotify, Google Podcasts and Apple Podcasts.
            </ListItem>
            <ListItem>
              Promote: Podcast episodes were promoted on social media through
              the use of video trailers. They were are also promoted via the
              email marketing newsletter.
            </ListItem>
          </OrderedList>
          <Text as={"h2"} marginTop="5" fontSize="xl">
            Deliverables
          </Text>
          <UnorderedList>
            <ListItem>Creation</ListItem>
            <ListItem>
              The Hart Square Podcast available on Spotify, Google Podcasts and
              Apple Podcasts.{" "}
            </ListItem>
            <ListItem>
              The Hart Square Podcast available on Spotify, Google Podcasts and
              Apple Podcasts.{" "}
            </ListItem>

            <ListItem>
              Youtube episodes and Social media video for promotion
              https://www.linkedin.com/feed/update/urn:li:activity:7033431939885760513{" "}
            </ListItem>
          </UnorderedList>
        </Container>
      </Box>
    </>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "10+",
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: "13%",
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: "250M+",
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];
