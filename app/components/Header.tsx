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
          alt="Ellie Leftley"
          borderRadius="full"
          border="5px solid"
          borderColor={useColorModeValue("pink.500", "gray.700")}
          boxSize="150px"
        />
        <Heading as="h2">Content Specialist </Heading>
        <Heading as="h3" paddingLeft={2}>
          Hi, I'm Ellie!
        </Heading>
        <Text paddingLeft={6} as="p" fontSize="lg">
          Leveraging over four years of experience in crafting and overseeing a
          diverse range of content, I blend a strong passion for user experience
          design to produce impactful content that connects with audiences and
          fulfils business requirements.
        </Text>

        <Heading paddingLeft={6} as="p" fontSize={"lg"}>
          My Core Skills:
        </Heading>

        <UnorderedList paddingLeft={12}>
          <ListItem>Copywriting - website blog writing</ListItem>
          <ListItem>Social media copy</ListItem>
          <ListItem>Social media management</ListItem>
          <ListItem>Copy editing</ListItem>
          <ListItem>SEO optimisation</ListItem>
          <ListItem>Email marketing</ListItem>
        </UnorderedList>

        <Heading as="h2" fontSize="xl" mb={2} paddingLeft={6}>
          Work Experience
        </Heading>
        <UnorderedList paddingLeft={12}>
          <ListItem>
            Digital Marketing and Content Executive | Hart Square, London UK |
            April 2021 - October 2023
          </ListItem>
          <ListItem>
            Events and Marketing Coordinator | Hart Square, London UK | May 2019
            - April 2021
          </ListItem>
          <ListItem>
            Research Support and Communications Assistant | University of
            Sussex, Brighton UK | December 2017 - April 2019
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
          <ListItem>Wordpress</ListItem>
          <ListItem>Canva</ListItem>
          <ListItem>Adobe (Photoshop, Illustrator, Premiere Pro)</ListItem>
          <ListItem>Hootsuite</ListItem>
          <ListItem>Slack</ListItem>
          <ListItem>Microsoft Office / Office 365</ListItem>
          <ListItem>Google Analytics</ListItem>
          <ListItem>Figma</ListItem>
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
            A food app enabling individuals who follow a gluten free diet, to
            find food supplies, recipes and restaurants with ease.
          </Text>

          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
