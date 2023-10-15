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

export default function UxProjectPage() {
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
                                <Heading
                                    color={'white'}
                                    mb={5}
                                    fontSize={{ base: '3xl', md: '5xl' }}>
                                    Fly UX
                                </Heading>
                                <Text fontSize={'lg'} color={'white'}>
                                    An airline booking website developed as part of my Professional Diploma in UX Design.
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
                    A start-up airline are looking to create an online experience that is fast, easy and intuitive. They need a new website, focusing specifically on the flight booking process. 
                    </Text>
                    <br /><br></br>
                    <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Research
                    </Text>
                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Desktop Research
                    </Text>
                    <Text as='p' >
                    To begin, I carried out a benchmarking exercise. I researched existing airline websites where I explored a user’s journey, from entering search details through to finding and selecting flights. This allowed me to highlight the strengths and weaknesses in their designs well as identify common solutions to the problem which is important when identifying mental models for this process. I also used heuristics principles to evaluate areas that could be improved.
                        <Text as='p' marginTop='5' fontWeight={'bold'} >
                        Key insights
                    </Text>
                        <UnorderedList>
                            <ListItem>Simple, clear search form: Each website I research contained a simple flight search form within the first fold of their website. These forms all contained a calendar picker element to select flight dates as well as clear call to action buttons in contrasting colours. </ListItem>
                            <ListItem>Flight selection variations: There was much variation between websites on how they presented the flight search results, baggage options and ticket costings. </ListItem>
                            <ListItem>Multiple screens & screen states: Each website made us of multiple screen and screen states to take the user through the journey of selecting flights and any extras. A key issue I identified is the risk of the user getting lost in the process and not receiving enough feedback to be confident in their selection.</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Usability tests
                    </Text>
                    <Text as='p' >
                    A number of usability tests were carried out on competitors websites. From the usability tests, I was able to identify user goals, context, behaviours, and both the positive interactions and pain points users experienced when tasked with booking flights. 
                        <br /><br></br>
                        <Text as='p' marginTop='5' fontWeight={'bold'} >
                        Key insights
                    </Text>
                    <UnorderedList>
                            <ListItem>All users were able enter their flight search information with ease</ListItem>
                            <ListItem>Users often found search results pages confusing making it difficult to progress their booking  </ListItem>
                            <ListItem>Some users felt that the booking process would have been easier if they had previous experience of using the website </ListItem>
                        </UnorderedList>
                        <br /><br></br>
                        <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Defining the problem
                    </Text>
                    <Text as='p' marginTop='5' >
                    To identify common themes from my research I collated my results by using an affinity diagram. On a number of post-it notes, I noted down key findings relevant to the user’s experiences including contextual information, pain points and mental models and then categorised these into common themes as patterns emerged. 
                    <br /><br></br>
                    Following this, a customer journey map was created highlighting the user’s experience at each touch point. This enabled me to further understand what an effective solution would be.  
                       </Text>
                        <Text as='p' marginTop='5' fontWeight={'bold'} >
                            Key insights
                        </Text>
                        <UnorderedList>
                            <ListItem>Price is the most important factor to users. Users would more often than not, select the lowest fare over one that is departing at a more suitable time. </ListItem>
                            <ListItem>Users were often confused by the messaging around baggage options and selecting seats</ListItem>
                            <ListItem>Users do not want to be ‘bombarded’ with screens for additional services as these were often found to be distracting.</ListItem>
                        </UnorderedList>
                    </Text>
                        <br /><br></br>
                        <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Problem solving through design
                    </Text>
                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        User flow
                    </Text>
                    <Text as='p' >
                    Through the analysis of my research findings, I was able to create a high level flow for a desktop solution. As users had already had a mental model for this process, I focused on the key areas which users incurred most friction, for example, reducing the number of screens for additional services. 
                       </Text>
                       <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Prototype
                    </Text>
                    <Text as='p' >
                    Following the user flow, I took pen to paper to design a low fidelity prototype. This was a simple and effective way to see my solution ‘in action’. Based on feedback with users, I was able to make design tweaks quickly. 
                    <br /><br></br>
                    I then created an interactive prototype which illustrates key screen interactions and content details. Due to the foundation of work I had carried out on the user flow and low fidelity prototype, this process was relatively smooth. 
                       </Text>
                       <br /><br></br>
                        <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Reflections
                    </Text>
                    <Text as='p' > Reflecting on the challenge that was set, I believe I achieved experience that is fast, easy and intuitive. 
                    <br /><br></br>
                    The research and analysis I carried out throughout this project really set the foundation for this project. By having the key insights at the forefront of the design process allowed me to create a solution which correlated to mental models, understood users motivations and addressed their pain points. 
<br /><br></br>
The next steps for this project would be to create a high-fidelity prototype to incorporate colour and visuals into the design. This would then need to be tested with users to further evaluate its success. </Text>

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