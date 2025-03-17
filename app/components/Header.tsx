import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import EllieImage from "../images/ellie.jpeg";
import GlutenFree from "../images/gluten-free.png";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="pink" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={EllieImage}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Header = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <VStack
        paddingTop="40px"
        paddingBottom="40px"
        spacing="2"
        alignItems="flex-start"
      >
        <Image
          src={EllieImage}
          alt="Ellie"
          borderRadius="full"
          border="5px solid"
          borderColor={useColorModeValue("pink.500", "gray.700")}
          boxSize="150px"
        />
        <Heading as="h2">
          UX-Focused Content and Digital Experience Specialist
        </Heading>
        <Heading as="h3" paddingLeft={2}>
          Hello, I'm Ellie!
        </Heading>
        <Text paddingLeft={6} as="p" fontSize="lg">
          Leveraging over four years of experience in designing, crafting, and
          managing user-centric digital content, I blend a strong passion for
          user experience design with content strategy to produce impactful
          solutions. My goal is to create content journeys that resonate with
          audiences, fulfill business requirements, and elevate the overall user
          experience.
        </Text>

        <Heading paddingLeft={6} as="p" fontSize={"lg"}>
          My Core Skills:
        </Heading>
        <UnorderedList paddingLeft={12}>
          <ListItem>User-Centered Content Strategy</ListItem>
          <ListItem>UX Writing and Copywriting</ListItem>
          <ListItem>Social Media Management & Copy</ListItem>
          <ListItem>Information Architecture & Wireframing</ListItem>
          <ListItem>User Research & Usability Testing</ListItem>
          <ListItem>SEO Optimization</ListItem>
          <ListItem>Email Marketing</ListItem>
        </UnorderedList>

        <Heading as="h2" fontSize="xl" mb={2} paddingLeft={6}>
          Work Experience
        </Heading>
        <UnorderedList paddingLeft={12}>
          <ListItem>
            Digital Marketing and Content Executive (UX-Focused) | Hart Square,
            London UK | April 2021 - October 2023
            <br />
            <Text as="span" fontSize="sm">
              – Integrated UX principles in marketing strategies to improve
              conversion rates and user satisfaction.
            </Text>
          </ListItem>
          <ListItem>
            Events and Marketing Coordinator | Hart Square, London UK | May 2019
            - April 2021
            <br />
            <Text as="span" fontSize="sm">
              – Coordinated user-focused events and oversaw marketing materials
              to ensure consistent branding and messaging.
            </Text>
          </ListItem>
          <ListItem>
            Research Support and Communications Assistant | University of
            Sussex, Brighton UK | December 2017 - April 2019
            <br />
            <Text as="span" fontSize="sm">
              – Provided UX-driven communications support, emphasizing clarity
              and accessibility in digital content.
            </Text>
          </ListItem>
        </UnorderedList>

        <Heading as="h2" fontSize="xl" paddingLeft={6}>
          Certifications
        </Heading>
        <UnorderedList paddingLeft={12}>
          <ListItem>
            Professional Diploma in UX Design | Glasgow Caledonian University |
            July 2022
          </ListItem>
          <ListItem>
            Certified Digital Marketing Professional | Digital Marketing
            Institute | October 2021
          </ListItem>
          <ListItem>
            User Experience Foundation Certificate BCS | The Chartered Institute
            of IT | February 2020
          </ListItem>
        </UnorderedList>

        <Heading as="h2" fontSize="xl" paddingLeft={6}>
          Tools
        </Heading>
        <UnorderedList paddingLeft={12}>
          <ListItem>Figma (Prototyping & Collaborative Design)</ListItem>
          <ListItem>WordPress (UX-Focused Content Management)</ListItem>
          <ListItem>Canva</ListItem>
          <ListItem>Adobe (Photoshop, Illustrator, Premiere Pro)</ListItem>
          <ListItem>Hootsuite</ListItem>
          <ListItem>Slack</ListItem>
          <ListItem>Microsoft Office / Office 365</ListItem>
          <ListItem>Google Analytics (User Engagement Insights)</ListItem>
        </UnorderedList>

        <Heading as="h2" fontSize="xl" paddingLeft={6}>
          Contact Information
        </Heading>
        <Text paddingLeft={6}>Email: ellieleftley@yahoo.co.uk</Text>
        <Text paddingLeft={6}>LinkedIn: linkedin.com/in/ellieleftley</Text>
      </VStack>

      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link
              href="/simply-gluten-free"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Image
                borderRadius="lg"
                src={GlutenFree}
                alt="Simply Gluten Free Image"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Mobile"]} />
          <Heading marginTop="1">
            <Link
              href="/simply-gluten-free"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              Simply Gluten Free
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            A food app designed with a user-first mindset, enabling individuals
            who follow a gluten-free diet to effortlessly find food supplies,
            recipes, and restaurants — all with a streamlined, intuitive
            interface.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
