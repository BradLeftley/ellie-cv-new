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

export default function HartSquarePodcastPage() {
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
                  Hart Square Podcast
                </Heading>
                <Text fontSize={"lg"} color={"white"}>
                  Hart Square is an independent technology consultancy operating
                  exclusively in the non-profit sector. As part of their content
                  strategy to build brand awareness and engage with both
                  audiences and experts in the technology sector, it was
                  identified that a podcast would be a key channel to achieve
                  this.
                  <br />
                  <br></br>
                </Text>
                <Text fontSize={"2xl"} color={"white"}>
                  My Role
                </Text>
                <Text fontSize={"lg"} color={"white"}>
                  Podcast Producer, Editor and Manager
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
            To develop a podcast to build brand awareness and engagement.
            <br />
            <br></br>
            Key responsibilities included:
            <UnorderedList>
              <ListItem>Identifying content topics and guests</ListItem>
              <ListItem>Guest and stakeholder management</ListItem>
              <ListItem>Podcast co-host</ListItem>
              <ListItem>Editing and production</ListItem>
              <ListItem>Creating podcast identity including logo</ListItem>
              <ListItem>
                Creating promotional assets including videos for social media.
              </ListItem>
            </UnorderedList>
          </Text>
          <br />
          <br></br>
          <Text as={"h2"} fontSize="xl" fontWeight={"bold"}>
            Steps in Process
          </Text>
          <OrderedList marginLeft="10">
            <ListItem>
              Research: Explore what similar podcasts are available - what makes
              them successful? Research the tools and platforms I would need to
              record, edit and publish the podcast.
            </ListItem>
            <ListItem>
              Establish goals: Identify how many podcast episodes we would like
              to publish - what would be realistic and will help achieve
              business goals. To do this I worked closely with the senior
              leadership team to identify our goals.
            </ListItem>
            <ListItem>
              Identify topics and guests: To do this I again worked closely with
              internal team members and they are the ‘knowledge holders’. They
              work most closely with our clients, so understood their challenges
              and knowledge gaps. This gave us a range of content topics as well
              as key guests to approach for the podcast.
            </ListItem>
            <ListItem>
              Create briefs and approach guests: I created a brief for each
              episode which would be shared with the guest. The brief covered
              the key aims and messages for the podcast as well as a structure
              for the discussion. I ensured the brief gave enough information
              for guests to be confident but also allowed for flexibility.
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
