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
} from "@chakra-ui/react";
import Podcast from "../images/hartsquarewebsite.png";

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
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const HartSquareWebsite = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Box
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
              href="/hart-square-website"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Image borderRadius="lg" src={Podcast} objectFit="contain" />
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
          {/* Updated tags to highlight UX approach */}
          <BlogTags tags={["Website", "UX Strategy"]} />
          <Heading marginTop="1">
            <Link
              href="/hart-square-website"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              Hart Square Website
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Hart Square is an independent technology consultancy serving the
            non-profit sector. My role involved creating a user-focused content
            calendar to enhance brand awareness, establish the company as a
            thought leader, and boost website traffic. This process included
            audience research, mapping user journeys, and refining site
            navigation to ensure an intuitive, engaging experience for
            prospective and existing clients.
          </Text>
          {/* 
          If you want to feature the BlogAuthor, uncomment and adjust as needed:
          
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> 
          */}
        </Box>
      </Box>
    </Container>
  );
};

export default HartSquareWebsite;
