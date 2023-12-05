import {
  Box,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "@remix-run/react";
// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("#FFFFFF", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.600", "white")}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Ellie Leftley
            </Text>
          </Link>

          <Flex alignItems={"center"}>
            {/* <Flex
              color={useColorModeValue("gray.600", "white")}
              spacing="4"
              marginRight="3"
            >
              <Link to="/about">Portfolio</Link>
            </Flex> */}
            {/* <Flex
              color={useColorModeValue("gray.600", "white")}
              spacing="4"
              marginRight="3"
            >
              <Link to="/about">About</Link>
            </Flex> */}
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
