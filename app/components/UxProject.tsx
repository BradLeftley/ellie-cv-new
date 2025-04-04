import React from "react";
import {
  Box,
  Heading,
  Link,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  Image,
} from "@chakra-ui/react";
import FlyUX from "../images/flyux.png";

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

const UxProject = () => {
  return (
    <Container maxW={"7xl"} p="12">
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
              href="/ux-project"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Image
                borderRadius="lg"
                src={"https://i.ibb.co/ymT2CJsD/flyux.png"}
                alt="Ux Project"
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
              href="/ux-project"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              Fly UX Project
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            An airline booking website developed as part of my Professional
            Diploma in UX Design.
          </Text>
          <br></br>
          <Link
            href="https://www.figma.com/board/JhglC1AWg70NCXb6iedmQB/Project-15---Ellie-Leftley?node-id=0-1&p=f"
            target="_blank"
          >
            View the wireframes on Figma
          </Link>

          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Box>
      </Box>
    </Container>
  );
};

export default UxProject;
