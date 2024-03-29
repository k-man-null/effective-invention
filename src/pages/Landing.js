import "@fontsource/poppins";
import theme from "../theme";
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Center,
  Heading,
  Spacer,
  Slide,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import RafflePreviewLanding from "../Components/rafflewithRibbon/RafflePreviewLanding";
import reactLogo from "../assets/icons8-react-160.png"
import raflleImage from "../assets/robert-linder-lVbj_jZVgZY-unsplash.jpg"


function Landing() {

  const { isOpen, onToggle } = useDisclosure()
 

  return (
    <ChakraProvider theme={theme}>
      <Box
        overflowX='hidden'
      >

        <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p='40px'
            color='white'
            mt='8'
            bg='teal.500'
            shadow='md'
          >
            <Center>
              <Stack>
                <Text as='a' href="/enter">Host a Raffle</Text>
                <Text as='a' href="#FAQS">FAQ</Text>
                <Text as='a' href="/enter">Login</Text>
                <Text as='a' href="/enter">Signup</Text>
              </Stack>
            </Center>
          </Box>
        </Slide>
        {/* Navbar */}

        <Stack
          backgroundColor='teal.100'
          height='60px'
          position='fixed'
          top='0'
          width='100%'
          zIndex='100'
          direction='horizontal'
        >
          <Center h='60px'>
            <HamburgerIcon
              color='teal'
              boxSize='8'
              marginLeft={['4', '4', '100', '300']}
              onClick={onToggle}
            />
          </Center>
          <Spacer />
          <Center h='60px'>

            <Heading
              color='teal'
              size='lg'
              fontWeight='extrabold'
              letterSpacing='widest'
              marginRight={['4', '4', '100', '300']}
            >TikiTiki</Heading>
          </Center>
        </Stack>
        {/* End Navbar */}

        {/* Start Headline Page */}
        <Stack
          mt={['100px', '150px', '250px']}
          marginX={['4', '7', 'auto']}
          maxWidth={[null, null, '80%', '60%']}
        >
          <Center>
            <Stack>
              <Text
                bgGradient='linear(to-r, teal.500, green.500)'
                fontSize={['36', '48', '56']}
                fontWeight="extrabold"
                bgClip='text'
                lineHeight='1.1'
                textAlign='center'
                marginBottom={['5']}
              >
               Make money hosting raffles
                Win Lots,     Everyday!

              </Text>
              <Text
                fontSize={['18']}
                textAlign='center'
              >
                Simply, we are an Escrow service providing trust and credibility in public competitions.
                We help you run raffles.

              </Text>
            </Stack>
          </Center>
          <Center>
            <Stack
              direction={['column', 'row']}
              spacing={['7', '2', '10']}
              marginTop={['10']}
            >
              <Button
                size='lg'
                bgGradient='linear(to-r, teal.500, green.500)'
                _hover={{
                  color: 'white',
                  bgGradient: 'linear(to-r, teal.500, green.500)'
                }}
                href={'enter'}
                color='white'
                as={'a'}>Start A Raffle</Button>
              <Button
                size='lg'
                variant='outline'
                colorScheme='teal'
                href="/app"
                as={'a'}>View Public Raffles</Button>
            </Stack>
          </Center>
        </Stack>
        {/* End Headline Page */}
        <RafflePreviewLanding />
        <Flex

          direction={['column', 'row']}
          m="10%"
          bg="teal.900"
          gap="5"

        >
          <Box width={["100%", "50%"]}>

            <Box height="40%" display="flex" alignItems="end" >
              <Heading color="white" m="5px">
                About TikiTiki
              </Heading>
            </Box>
            <Box height="60%"  >
              <Image src={reactLogo} boxSize='80px'
                objectFit='cover' m="5px" />
              <Text m="5px" color="white">
                Since its founding in 2022 Tikitiki has been curated
                to successfully handle raffling opportunities on
                behalf of sellers,
                producers or service industries.
              </Text>

            </Box>

          </Box>
          <Box width={["100%", "50%"]}>
            <Box height="70%" >
              <Center>
                <Image src={raflleImage} boxSize='100%'
                  objectFit='cover' m="10px" />
              </Center>

            </Box>

            <Box height="26%" mt={4}>

              <Text m="5px" color="white">
                TikiTiki allows players to register for prices to be won
              </Text>
              <Text m="5px" color="white">
                This is the new age of sales
              </Text>

            </Box>
          </Box>

        </Flex>
        <Stack
          mt={['100px', '150px', '250px']}
          marginX={['4', '7', 'auto']}
          maxWidth={[null, null, '80%', '60%']}
          mb='40px'
        >
          <Stack>
            <Heading
              textAlign='center'
            >
              What is a Raffle?
            </Heading>
            <Text>
              A raffle is a competition where you stand to win a prize by buying
              a raffle ticket. When the the competition ends or all raffles are
              sold,the prize is given to the winner.
              A winning ticket is chosen at random and the winner receives
              the product/service.
            </Text>
          </Stack>

        </Stack>


        {/* <Stack
          mt={['30px']}
          marginX={['4', '7', 'auto']}
          maxWidth={[null, null, '80%', '60%']}
          mb='60px'
        >

          <Flex border="1px solid red" minHeight="500px">

              <Stack border='1px solid teal' padding='4' m='4'>
                <Heading
                  textAlign='center'
                >
                  Step 4. Engage with buyers.
                </Heading>
                <Text>
                  The tickets will be sold to buyers, and one buyer will be picked randomly.
                  We encourage you to share the events on social media, or
                  suggest it on your youtube channel or in your physical shop.
            <Box border="1px solid red" width="50%">

              <Heading>How to Play</Heading>

              <Flex border="1px solid red" minHeight="200px">

                <Box border="1px solid red" width="30%">
                  
                </Box>
                <Box border="1px solid red" width="70%">
                  
                </Box>

              </Flex>

            </Box>
            <Box border="1px solid red" width="50%">

            </Box>

          </Flex>

        </Stack>

        </Stack> */}

        <Stack
          id="who"
          mt={['30px']}
          marginX={['4', '7', 'auto']}
          maxWidth={[null, null, '80%', '60%']}
          mb='60px'
        >
          <Stack
          >
            <Heading
              textAlign='center'
            >
              Who uses TikiTiki?
            </Heading>

          </Stack>

        </Stack>
        <Stack
          marginX={['4', '7', 'auto']}
          border='1px solid teal'
          maxWidth={[null, null, '80%', '60%']}
          mb='30px'
          borderRadius='8'
          p='4'
        >
          <Stack

          >
            <Heading
              textAlign='center'
            >
              Brands
            </Heading>
            <Text>
              Brands use TikiTiki to host credible competitions where the
              participants are guaranteed fairness.
            </Text>

          </Stack>

        </Stack>
        <Stack
          marginX={['4', '7', 'auto']}
          border='1px solid teal'
          maxWidth={[null, null, '80%', '60%']}
          mb='30px'
          borderRadius='8'
          p='4'
        >
          <Stack
          >
            <Heading
              textAlign='center'
            >
              Influencers
            </Heading>
            <Text>
              Influencers take advantage of their audience to generate
              extra income for both the audience and themselves. TikiTiki
              simplifies competitions for influencers so that they can focus on their audience.
            </Text>

          </Stack>

        </Stack>
        
        <Stack
          marginX={['4', '7', 'auto']}
          border='1px solid teal'
          maxWidth={[null, null, '80%', '60%']}
          mb='30px'
          borderRadius='8'
          p='4'
        >
          <Stack

          >
            <Heading
              textAlign='center'
            >
              Businesses
            </Heading>
            <Text>
              Businesses generate more buzz about their products and services
              by hosting public and credible competitions with us.
              Businesses provide their services or products as prizes in the
              competition.
            </Text>

          </Stack>

        </Stack>
        

        {/* Start Why We are loved */}
        <Stack
          id="whyloved"
          mt={['30px']}
          marginX={['4', '7', 'auto']}

          maxWidth={[null, null, '80%', '60%']}
          mb='60px'
        >
          <Stack

          >
            <Heading
              textAlign='center'
            >
              Why do brands, influencers and businesses choose us?
            </Heading>

          </Stack>

        </Stack>
        <Stack
          marginX={['4', '7', 'auto']}
          border='1px solid teal'
          maxWidth={[null, null, '80%', '60%']}
          mb='30px'
          borderRadius='8'
          p='4'
        >
          <Stack

          >
            <Heading
              textAlign='center'
            >
              Excitement
            </Heading>
            <Text>
              Engage with your fans in a new way that rewards them.
              You can bring your winners on a livestream to spice it up.
            </Text>

          </Stack>

        </Stack>
        <Stack
          marginX={['4', '7', 'auto']}
          border='1px solid teal'
          maxWidth={[null, null, '80%', '60%']}
          mb='30px'
          borderRadius='8'
          p='4'
        >
          <Stack

          >
            <Heading
              textAlign='center'
            >
              Authenticity
            </Heading>
            <Text>
              Create personal competition rather than wait for corporates to pocket you.
            </Text>

          </Stack>

        </Stack>
        <Stack

          marginX={['4', '7', 'auto']}
          border='1px solid teal'
          maxWidth={[null, null, '80%', '60%']}
          mb='80px'
          borderRadius='8'
          p='4'
        >
          <Stack

          >
            <Heading
              textAlign='center'
            >
              Transparency
            </Heading>
            <Text>
              Our system is transparent. We pick the winners for you randomly and the tickets bought are public for evey participant to see.
              Winners are also shown publicly.
            </Text>

          </Stack>

        </Stack>

        {/* End Why we are loved  */}


        
          

        {/* Start FAQS */}
        <Stack id="FAQS"
          mt={['30px']}
          marginX={['4', '7', 'auto']}
          maxWidth={[null, null, '80%', '60%']}
          mb='80px'
          spacing={4}

        >
          <Heading textAlign='center'>Frequently Asked Questions</Heading>
          <Tabs isFitted variant='enclosed' colorScheme='teal'>
            <TabList mb='1em'>
              <Tab>Hosting</Tab>
              <Tab>Entering</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* Hosting Start */}
                <Accordion>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          Do I need a license to host on TikiTiki?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      You do not require a license to host on TikiTiki.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          Can I host a raffle in my business name?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      You can host in your personal or business name.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          How much does it cost to host on TikiTiki?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Hosting is free and 10% is charged on all ticket sales.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          What is the minimum ticket price I can charge for my raffle?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      The minimum price is $0.50 per ticket and a maximum of $100.00 per ticket.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          What is the minimum tickets I can issue?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      The minimum number of tickets is 200 and the maximum is 1 million tickets per competition.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          Can entrants purchase more than one ticket?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Entrants can purchase more than one ticket but not more than 5% of the total tickets.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          What happens if all the tickets are sold before the draw date?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      The draw takes place when the last ticket is sold or on the end date, whichever comes first.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          What happens if all the tickets are not sold by the draw date?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      The draw will take place on the end date no matter how many tickets are sold. If you
                      chose to give the prize to the winner, you will receive 90% of the proceeds from the ticket sales.
                      If you do not provide the prize to the winner, then the winner receives 40% of the total proceeds from
                      ticket sales and you receive 50% of the ticket sales.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          How is the winner selected?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      The winner is selected randomly by the system automatically from the tickets entered in the draw.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          How will I know who the winner is?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      In your competitions, the winner will be shown at the bottom, their
                      contact details will be shown there. The winners will also see their
                      winning ticket in their tickets after the draw happens.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          How will I provide the prize?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      You and the winner must communicate for the delivery of the prize.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          What happens after the competition ends?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Once the winner receives the prize, they will press 'accept' button on their ticket
                      and we will process the payment and send the proceeds from the ticket sales to you.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          What happens if I send the prize to the winner but they say they did not receive it?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      The winner can dispute the prize under the circumstances that they didn't receive
                      the prize or the prize is not as advertised. It is important to keep receipts of proof of shipment/delivery
                      to make your evidence strong.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          When do I get paid and How?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Once the competition has ended, and the winner has clicked "accept",
                      the funds will be transferred to you within 72 hours. You will receive
                      money through mpesa
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          Is there a rating system?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      All winners are required to rate a host. The ratings can be viewed
                      publicly in the "recent winners" and the Host's history pages.
                    </AccordionPanel>
                  </AccordionItem>


                </Accordion>
                {/* Hosting End */}
              </TabPanel>
              <TabPanel>
                {/* Entry Start */}
                <Accordion>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          Is it safe to enter a crowd-pooled-sale on TikiTiki?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Yes!
                      We protect you from all possible misconduct from hosts as we hold the
                      funds and you have the power to dispute.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          How do you protect us from cheaters and liars?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Entrants are safe since all draws are conducted automatically by the system. Hosts and Entrants
                      have no influence over the winner selection.All funds are held in our merchant account provider,
                      therefore no funds will be transferred to a host until you press "accept" in your winning ticket, removing
                      all motives form hosts to advertise falsely or state prizes that dont exist.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          What happens if I don't receive the prize or the prize is not as advertised?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Every competition is guaranteed by us. You can press the "dispute" button of the winning ticket,
                      and you will receive 75% of the ticket sales in cash or revenue generated from the sales.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          Can I purchase more than one ticket?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Yes you can, but not more that 5 percent of the total tickets for the sake of
                      fairness.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          Can I purchase more than one ticket?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      Yes you can, but not more that 5 percent of the total tickets for the sake of
                      fairness.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          If I win what next?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      You should click "claim" on the winnng ticket. After that communicate with the host to receive the
                      prize. If you receive the prize, press accept on the winning ticket. If you do not receive the
                      prize or it is not as advertised, press the "dispute" button. And the disputes team will take the
                      dispute from there.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                {/* Entry End */}
              </TabPanel>

            </TabPanels>
          </Tabs>
        </Stack>

        {/* End FAQS */}

        <Stack
          backgroundColor='teal.100'
          height='70px'
          position='fixed'
          bottom='0'
          width='100%'
          zIndex='100'
          //display={[null, 'none']}
          padding='2'
        >
          <Center>
            <Button
              size='lg'
              bgGradient='linear(to-r, teal.500, green.500)'
              _hover={{
                color: 'white',
                bgGradient: 'linear(to-r, teal.500, green.500)'
              }}
              color='white'
              as={'a'} href="/enter">Host a raffle free</Button>
          </Center>


        </Stack>
      </Box>
    </ChakraProvider >
  );
}

export default Landing;