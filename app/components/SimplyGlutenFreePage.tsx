import { ReactNode } from 'react';
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
    WrapItem,
    Wrap,
} from '@chakra-ui/react';

export default function SimplyGlutenFreePage() {
    return (
        <>
            <Box bg={'pink.800'} position={'relative'}>
                <Flex
                    flex={1}
                    zIndex={0}
                    display={{ base: 'none', lg: 'flex' }}
                    backgroundImage="url('https://i.ibb.co/jwGKfF6/Screen-Shot-2021-02-28-at-12-44-48.png')"
                    backgroundSize={'cover'}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    position={'absolute'}
                    width={'50%'}
                    insetY={0}
                    right={0}>
                    <Flex
                        bgGradient={'linear(to-r, pink.800 10%, transparent)'}
                        w={'full'}
                        h={'full'}
                    />
                </Flex>
                <Container maxW={'7xl'} zIndex={10} position={'relative'}>
                    <Stack direction={{ base: 'column', lg: 'row' }}>
                        <Stack
                            flex={1}
                            color={'white'}
                            justify={{ lg: 'center' }}
                            py={{ base: 4, md: 20, xl: 20 }}>
                            <Box mb={{ base: 8, md: 20 }}>
                                <Text
                                    fontFamily={'heading'}
                                    fontWeight={700}
                                    textTransform={'uppercase'}
                                    mb={3}
                                    fontSize={'xl'}
                                    color={'white.500'}>
                                    Personal project 
                                </Text>
                                <Heading
                                    color={'white'}
                                    mb={5}
                                    fontSize={{ base: '3xl', md: '5xl' }}>
                                    Simply Gluten Free
                                </Heading>
                                <Text fontSize={'lg'} color={'white'}>
                                    A mobile app providing a single source of information on gluten free food products, recipes and restaurants.
                                    <br /><br></br>
                                </Text>
                                <Text fontSize={'lg'} color={'white'}>
                                User research | Prototyping | Visual design 
                                </Text>
                            </Box>
                        </Stack>
                        <Flex flex={1} />
                    </Stack>
                </Container>

            </Box>
            <Box position={'relative'}>
                <Container maxW={'4xl'} p="12">
                <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        The challenge
                    </Text>
                    <Text as='p' marginTop='5' >
                    As someone who follows a Gluten free restricted diet, I often struggled to find places to eat out, to shop and to discover new recipes. 
                    <br /><br></br>
                    I set out to investigate whether this was a common issue with those who also follow a gluten free diet and if so, whether I could develop a potential web or app based solution.
                        <br /><br></br>
                    </Text>
                    <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Research
                    </Text>
                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Desktop Research
                    </Text>
                    <Text as='p' >
                        To begin I carried out a benchmarking exercise.
                        I searched through app stores, including IOS app store and Android app store, with search terms including ‘gluten free’, 'restaurants', 'recipes', ‘food apps’, ‘recipe apps’ and ‘restaurant finder apps’.
                        <br /><br></br>
                        With each app I downloaded, I explored a user's journey by searching for a specific resturant type or recipe. I read reviews to further understand the aims of readers and users and also to discover where perhaps it did not meet their expectations.
                        <Text as='p' marginTop='5' fontWeight={'bold'} >
                        Key insights
                    </Text>
                        <UnorderedList>
                            <ListItem>All apps were followed a similar journey for the user, with similar visual elements, indicating that a mental model for mobile apps of this type already exists </ListItem>
                            <ListItem>Map view was an important element included for each restaurant listing</ListItem>
                            <ListItem>All listings included links to contact the restaurant directly or visit their website</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Interviews
                    </Text>
                    <Text as='p' >
                        Following on from the desktop research, I wanted to confirm whether the problem was one that was a common experience for others. To do so I carried out qualitative research in the form of interviews, on individuals who follow a Gluten Free diet. My aim was to understand and identify the needs of those who follow a gluten free diet as well as some of their challenges.
                        <br /><br></br>
                        Some of the questions used in the interviews included:
                        <OrderedList marginLeft='10'>
                            <ListItem>What are your reasons for following a Gluten Free diet?</ListItem>
                            <ListItem>What do you enjoy most about following a Gluten Free diet?</ListItem>
                            <ListItem>What do you find most difficult about following a Gluten Free diet?</ListItem>
                        </OrderedList>
                        <br /><br></br>
                        <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Defining the problem
                    </Text>
                    <Text as='p' marginTop='5' >
                        To help make sense of my desktop research and interview findings, I colated collated my results by using an affinity diagram.
                        From this exercise, key patterns and themes emerged that would help inform the mobile app solution.
                       </Text>
                        <Text as='p' marginTop='5' fontWeight={'bold'} >
                            Key insights
                        </Text>
                        <UnorderedList>
                            <ListItem>It takes too long to find information - the majority of interviewees mentioned that they found it time consuming searching across various platforms to find gluten free recipes, products and restaurants</ListItem>
                            <ListItem>There are many varied sources of information to navigate - much of the information from a particular source, was often specialised in one area. </ListItem>
                        </UnorderedList>
                    </Text>
                    <Text as='p' marginTop='5' >
                    Before moving on the ideation phase to develop a solution, I also created audience personas based on my research. This allowed me to identify and keep in mind the common behaviours, goals, expectations and problems of users.
                        </Text>
                        <br /><br></br>
                        <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Problem solving through design
                    </Text>
                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        User flow
                    </Text>
                    <Text as='p' >
                    I experimented with different designs and flows, receiving feedback from users throughout. I continued to iterate on my design discussing with potential users demonstrating the red routes of the application and got the users to carry out different user flows. Through A/B testing on two separate flows, I was able to identify which flow allowed users to achieve their goals most effectively and efficiently. This was one which had a reduced number of screens allowing the user to achieve their aims more efficiently.
                       </Text>
                       <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Prototype
                    </Text>
                    <Text as='p' >
                    I created a high fidelity design using Figma which I continued to receive feedback on and iterated.

One key aspect that prove important at this stage were within the branding for the app. After receiving feedback, I looked to the market for visual references, for example the identifiable gluten free symbol, which would influence my design. These elements are important within the design as the gluten free symbol for example, is recognised by all gluten free diet followers and based on their knowledge and experience of the world, would allow them to begin to understand the function of the app just through visual cues.
                       </Text>
                       <br /><br></br>
                        <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Final design
                    </Text>
                    <br /><br></br>
                        <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Reflections
                    </Text>
                    <Text as='p' > Creating one single source of information on an application platform, where users are able to find gluten free restaurants, food items and recipes with ease, solves the critical key problems faced by users.
                    <br /><br></br>
However, developing this solution challenged me to ensure my visual design was one which users could bring previous knowledge and memory to. This ultimately helps prevent the occurrences of user errors.
<br /><br></br>
To further develop this design, I would like to encompass purchasing functions within the app. This would allow users to add items to a basket and purchase directly from the stores. Additionally, I believe it would be valuable to add a meal planner function, linking to purchasing the food items allowing users to complete all desired tasks in one place.</Text>

                    <Wrap marginTop='5'>
                        <WrapItem>
                            <Image    boxSize='250px'
    objectFit='cover' src='simply-gluten-free-interview-one.jpeg' />
                        </WrapItem>
                        <WrapItem>
                        <Image boxSize='250px'
    objectFit='cover' src='simply-gluten-free-interview-image-two.jpeg' />
                        </WrapItem>
                    </Wrap>
                </Container>
            </Box>
        </>
    );
}

const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'white'}>
        {children}
    </Text>
);

const stats = [
    {
        title: '10+',
        content: (
            <>
                <StatsText>Software modules</StatsText> for detailed monitoring and
                real-time analytics
            </>
        ),
    },
    {
        title: '24/7',
        content: (
            <>
                <StatsText>Analytics</StatsText> enabled right in your dashboard without
                history limitations
            </>
        ),
    },
    {
        title: '13%',
        content: (
            <>
                <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
                their management solution
            </>
        ),
    },
    {
        title: '250M+',
        content: (
            <>
                <StatsText>Plants</StatsText> currently connected and monitored by the
                NewLife™ software
            </>
        ),
    },
];