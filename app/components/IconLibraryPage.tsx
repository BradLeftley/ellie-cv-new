import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

// Direct imports of each icon
import Icon2 from "../images/ICONS/ICONS-02.svg";
import Icon3 from "../images/ICONS/ICONS-03.svg";
import Icon4 from "../images/ICONS/ICONS-04.svg";
import Icon5 from "../images/ICONS/ICONS-05.svg";
import Icon6 from "../images/ICONS/ICONS-06.svg";
import Icon7 from "../images/ICONS/ICONS-07.svg";
import Icon8 from "../images/ICONS/ICONS-08.svg";
import Icon9 from "../images/ICONS/ICONS-09.svg";
import Icon10 from "../images/ICONS/ICONS-10.svg";
import Icon11 from "../images/ICONS/ICONS-11.svg";
import Icon12 from "../images/ICONS/ICONS-12.svg";
import Icon13 from "../images/ICONS/ICONS-13.svg";
import Icon14 from "../images/ICONS/ICONS-14.svg";
import Icon15 from "../images/ICONS/ICONS-15.svg";
import Icon16 from "../images/ICONS/ICONS-16.svg";
import Icon17 from "../images/ICONS/ICONS-17.svg";
import Icon18 from "../images/ICONS/ICONS-18.svg";
import Icon19 from "../images/ICONS/ICONS-19.svg";
import Icon20 from "../images/ICONS/ICONS-20.svg";
import Icon21 from "../images/ICONS/ICONS-21.svg";
import Icon22 from "../images/ICONS/ICONS-22.svg";
import Icon23 from "../images/ICONS/ICONS-23.svg";
import Icon24 from "../images/ICONS/ICONS-24.svg";
import Icon25 from "../images/ICONS/ICONS-25.svg";

export default function CVIconLibraryPage() {
  // Store icon data with descriptive names
  const icons = [
    { src: Icon2, name: "Search" },
    { src: Icon3, name: "Zoom In" },
    { src: Icon4, name: "Exclamation" },
    { src: Icon5, name: "Check" },
    { src: Icon6, name: "Close" },
    { src: Icon7, name: "Ellipsis Vertical" },
    { src: Icon8, name: "Ellipsis Horizontal" },
    { src: Icon9, name: "Sliders" },
    { src: Icon10, name: "Share" },
    { src: Icon11, name: "Star" },
    { src: Icon12, name: "Direction Arrow" },
    { src: Icon13, name: "User" },
    { src: Icon14, name: "User Plus" },
    { src: Icon15, name: "Group" },
    { src: Icon16, name: "Shopping Bag" },
    { src: Icon17, name: "Cart" },
    { src: Icon18, name: "Calendar" },
    { src: Icon19, name: "Clock" },
    { src: Icon20, name: "Database" },
    { src: Icon21, name: "Cloud" },
    { src: Icon22, name: "Cloud Rain" },
    { src: Icon23, name: "Server" },
    { src: Icon24, name: "Bar Chart" },
    { src: Icon25, name: "Location Pin" },
  ];

  return (
    <>
      {/* Hero/Masthead */}
      <Box bg="pink.800" color="white" py={16}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Icon Library
          </Heading>
          <Text fontSize="md" mb={6}></Text>
          <Text></Text>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={6} align="start">
          <Text fontSize="lg">
            This library was developed with simplicity and versatility in mind.
            I used Illustrator’s vector tools to keep each icon’s strokes
            minimalistic, making sure they’re visually appealing and easy to
            integrate into modern interfaces.
          </Text>
          <Text fontSize="lg">
            Each icon is named so it’s clear what it represents — from general
            actions (like “Close” or “Zoom In”) to more specialized items (like
            “Bar Chart” or “Cloud Rain”). Feel free to pick any icon you need,
            adjust the stroke widths, or change the color to fit your brand.
          </Text>
        </VStack>

        {/* Grid of icons */}
        <SimpleGrid columns={[2, 3, 4, 5]} spacing={8} mt={8}>
          {icons.map((icon, idx) => (
            <Box key={idx} textAlign="center">
              <Image
                src={icon.src}
                alt={icon.name}
                mx="auto"
                boxSize="64px"
                mb={2}
              />
              {/* Display the descriptive name of each icon */}
              <Text fontSize="sm" color="gray.600">
                {icon.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Additional descriptive text */}
      </Container>
    </>
  );
}
