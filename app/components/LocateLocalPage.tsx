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
} from '@chakra-ui/react';

export default function LocateLocalPage() {
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
                                   Locate Local
                                </Heading>
                                <Text fontSize={'lg'} color={'white'}>
                                A business directory allowing users to find busiensses and services in their local area.
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
                    Throughout the global pandemic, there has been continued encouragement to support local businesses. However, I often found it difficult to identify businesses that operate in the local area, especially those business who are based online. 
                        <br /><br></br>
                        When searching for local businesses I frequently encountered a few issues:

                        <UnorderedList>
                            <ListItem>Information is spread across different platforms (e.g. online directories, local social media pages)</ListItem>
                            <ListItem>Business directories often only have contact information and do not show much business information or product images</ListItem>
                        </UnorderedList>
                    </Text>
                    <br /><br></br>
                    <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Research
                    </Text>
                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Desktop Research
                    </Text>
                    I began my desktop research by reviewing a variety of sources where business local to my area promote their products and services. This included business directories, local community webpages and local social media groups.
                    <br /><br></br>
When reviewing these online platforms my aim was to explore how easily and efficiently I could find particular business. I gave myself a number of services and products to search for locally. I used the below questions to guide this research:
                        <br /><br></br>                    
                        <OrderedList marginLeft='10'>
                            <ListItem>Can I firstly find the product and/or service that I’m looking for?</ListItem>
                            <ListItem>Am I able view images of the product and/or service on that platform?</ListItem>
                            <ListItem>How easily can I navigate to find the product/service? What errors am I making?</ListItem>
                        </OrderedList>
                        <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Desktop Research
                    </Text>
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