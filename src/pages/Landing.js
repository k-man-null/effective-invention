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
  Slider,
  SliderMark,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
  Spacer,
  Slide,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from '@chakra-ui/react';
import { HamburgerIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { useState } from "react";

function Landing() {
  const [sliderValue, setSliderValue] = useState(50);
  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(0);
  const { isOpen, onToggle } = useDisclosure()
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

  const moneyStyles = {
    fontSize: 'xl',
    fontWeight: 'extrabold',
    margin: '4'
  }
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
                <Text as='a' href="/public">Check for Products</Text>
                <Text as='a' href="/enter">Showcase a Product</Text>
                <Text as='a' href="#FAQS">FAQ</Text>
                <Text as='a' href="#TOCS">Terms and Conditions</Text>
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
          <Center
          >
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
               WindowShoppers, own your dream product today!!

              </Text>
              <Text
                fontSize={['18']}
                textAlign='center'
              >
                Simply, we are an Escrow service providing trust and credibility in public competitions.

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
                as={'a'}>Sell a product or service free</Button>
              <Button
                size='lg'
                variant='outline'
                colorScheme='teal'
                href="/app/competitions"
                as={'a'}>View Products</Button>
            </Stack>
          </Center>

        </Stack>
        {/* End Headline Page */}
        

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
              How It Works
            </Heading>
            <Text>
              Attention sellers. You can now engage your windowshoppers in a more exciting
              way. Host your product or service on TikiTiki and make your potential customer's dream come true.
              This is a definate win win for everyone, but when done in a trustworthy and open way.
            </Text>
            <Flex flexDirection={['column', 'row']}>

              <Stack border='1px solid teal' padding='4' m='4'>
                <Heading
                  textAlign='center'
                >
                  Step 1. Create an Account.
                </Heading>
                <Text>
                  Click the signup button and provide the necessary information.
                  The registration is simple and easy,
                  no documents needed.
                </Text>

              </Stack>
              <Spacer />

              <Stack border='1px solid teal' padding='4' m='4'>
                <Heading
                  textAlign='center'
                >
                  Step 2. Showcase Your Products/Services
                </Heading>
                <Text>
                  Go to host a competition on your profile menu.
                  Fill out the form, include a few pictures.
                  Provide the number of tickets and the price of each ticket.
                </Text>

              </Stack>

              <Spacer />

              <Stack border='1px solid teal' padding='4' m='4'>
                <Heading
                  textAlign='center'
                >
                  Step 3. Set the Deadline
                </Heading>
                <Text>
                  When filling the form, set the deadline.
                  The deadline is a time in the future when the sale ends.
                  When this deadline is reached, the giving process begins and all
                  sales end.
                </Text>

              </Stack>
              <Spacer />

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

                </Text>

              </Stack>

              <Spacer />

              <Stack border='1px solid teal' padding='4' m='4'>
                <Heading
                  textAlign='center'
                >
                  Step 5. Prize awarding.
                </Heading>
                <Text>
                  Get ready for the thrilling prize awarding process!
                  The winner will be selected either when the deadline
                  specified by the host is reached or when all tickets are sold,
                  whichever comes first.
                  This ensures a sense of excitement and urgency for all participants.

                  When the prize is awarded, the revenue generated from ticket sales
                  will be given to the host. It's important to note that the host will
                  receive this revenue if they provide the promised prize to the lucky winner. This creates a win-win situation,
                  encouraging hosts to fulfill their commitment and deliver the prize.

                </Text>

              </Stack>

            </Flex>
          </Stack>

        </Stack>


        {/* End Part 1 */}
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
              simplifies competitions for influencers in a simple way.
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

        {/* Start Terms and Conditions */}
         {/*<Stack
          id="TOCS"
          mt={['30px']}
          marginX={['4', '7', 'auto']}
          maxWidth={[null, null, '80%', '60%']}
          mb='60px'
          spacing={4}

        >
          

          <Heading as='h1' textAlign='center'>TERMS AND CONDITIONS</Heading>

          <Heading as='h2'>Section 1: Introduction</Heading>
          <Text>The TikiTiki Terms and Conditions are comprised of two sections:</Text>
          <Text>Section 1: Introduction – This introduction.</Text>
          <Text>Section 2: Competition Conduct Conditions - The conditions that govern the relationship between Us
            and anyone who participates in any competition.
          </Text>

          <Heading as='h2'>IMPORTANT NOTICES</Heading>
          <Text>TikiTiki reserves the right to alter these Terms and Conditions at any time. Where alterations constitute a material change, users will be notified through the e-mail associated with their account. What constitutes a material change shall be determined by Us at our sole discretion,
            in good faith, using common sense.
          </Text>
          <Text>
            A prudent participant of a competition will:
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Read the Terms and Conditions;
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Check the content of all available documents relating to the competition and the Prize;
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Take professional advice where appropriate.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Be prudent in examining the prizes before pressing accept in reward claim.
            </ListItem>
          </List>
          <Text>
            The Terms and Conditions assume that each Host, Entrant and Winner has acted like a prudent individual. If you choose to participate in a
            competition without taking normal precautions, you do so at your own risk.
          </Text>
          <Text>
            If you enter a competition or otherwise participate in a competition it is on the basis that you accept these Terms and Conditions. They govern TikiTiki's
            relationship with you, the Host, Entrant and the Winner.
          </Text>
          <Heading as='h2'>
            Section 2: Competition Conduct Conditions
          </Heading>
          <Text>
            Words in capitals or small capitals have the special meanings defined in the Glossary and Definitions. The Competition Conduct Conditions cannot be disapplied
            or varied without TikiTiki's agreement.
          </Text>
          <Text>1. The Promoter</Text>
          <Text>
            1.1. The promoter of all competitions is TikiTiki.
          </Text>
          <Text>
            1.2. TiliTiki operates prize competitions that are free of regulations.
          </Text>
          <Text>
            1.3. Raffle is reffered to in the site as measure for marketing purposes,
            all competitions require a correct answer for the entrant to compete, therefore
            the are legally considered 'Prize Competitions'
          </Text>
          <Text>
            2. Hosting a competition
          </Text>
          <Text>
            2.1. Each competition is hosted by a Host on the TikiTiki platform.
          </Text>
          <Text>
            2.2. To host a competition the host must be aged 18 years and over.
          </Text>
          <Text>
            2.3. Only those with a verified email and mobile number can host a competition.
          </Text>
          <Text>
            2.4. By agreeing to host a competition with TikiTiki as Host is deemed to agree
            to be bound by the Terms and Conditions
          </Text>
          <Text>
            2.5. Hosts are responsible for providing the following information
            about the competitions they host:

          </Text>
          <UnorderedList>
            <ListItem>Competition Title</ListItem>
            <ListItem>Competition Summary</ListItem>
            <ListItem>Prize description and collection/delivery options</ListItem>
            <ListItem>Between 1 and 4 images for promotional purposes</ListItem>
            <ListItem>Price per Ticket</ListItem>
            <ListItem>The total number of tickest available for sale</ListItem>
            <ListItem>End date and time</ListItem>
            <ListItem>Entry Question</ListItem>
          </UnorderedList>
          <Text>
            2.6. TikiTiki reserves the right to cancel any competition at anytime.
          </Text>
          <Text>
            2.7. It is prohibited to offer cash payment, bank transfer, gift cards or share
            the ticket revenue as an alternative to providing the Prize.
          </Text>
          <Text>
            3. Service Charges, Affiliate Commissions and Features Fees.
          </Text>
          <Text>
            3.1. The Host shall pay service charges required in the case of affiliate support
            among other services offered to hosts.
          </Text>
          <Text>
            3.2. Any featured fees paid by the host are non-refundable.
          </Text>
          <Text>
            3.3. The service and featured cahrges shall be deducted from the Total Proceeds.
          </Text>
          <Text>
            4. How to enter a competition.
          </Text>
          <Text>
            4.1. Each competition runs from the start daate to end date inclusive.
          </Text>
          <Text>
            4.2. In order to enter a competition, an entrant must submit the answer
            to the respective competition question. Pay for the number of the tickets
            they wish to purchase by use of the credit in their TikiTiki account.
          </Text>
          <Text>
            4.3. Tickest are issued no matter the answer of the entry question, and all
            the issued tickets will participate in the relevant competition's draw.
          </Text>
          <Text>
            5. Eligibility
          </Text>
          <Text>
            5.1. The entrant must be 18 years or over.
          </Text>
          <Text>
            5.2. Employees, relatives of employess or shareholders of
            TikiTiki cannot enter any competition.
          </Text>
          <Text>
            5.3. Membersof the family of the host may not enter a competition hosted by that host.
          </Text>
          <Text>
            5.4. By entering a competition, an Entrant is deemed to confirm that they are eligible
            to do so and eligible to claim the Prize they may win. TikiTiki may require an Entrant
            to provide proof that they are eligible to enter the competition.
          </Text>
          <Text>
            5.5. TikiTiki reserves the right to disqualify any Host,Entrant or Winner if their conduct is
            contrary to the spirit or intetion of the prize competition.
          </Text>
          <Text>
            5.6. Only TikiTiki users are eleigible to enter competitions.
          </Text>
          <Text>
            6. Winners
          </Text>
          <Text>
            6.1. Each ticket will be entered into a draw for the competition it belongs to.
          </Text>
          <Text>
            6.2. On the closing date of the competition a Winner will be selected
            randomly by TiliTiki's automated system. The decision is final and no correspondence
            or discussions shall be entered into.
          </Text>
          <Text>
            6.3. In the spirit of transparency, the name of the winner shall be published
            by TikiTiki, to indicate that the award took place.
          </Text>
          <Text>
            6.4. It is the responsibility of an entrant on the closing date to check if they are a winner.
          </Text>
          <Text>
            6.5. Winning Tickets are located in the 'My Tickests' section.
          </Text>
          <Text>
            6.6. The winner shall not be contacted through any other means outside the platform.
          </Text>
          <Text>
            7. Claiming the prize.
          </Text>
          <Text>
            7.1. The winner shall not be contacted from outside the platform to be informed
            that they have won.
          </Text>
          <Text>
            7.2. The host is obliged to contact the winner in order to arrange delivery
            or collection of the prize.
          </Text>
          <Text>
            7.3. To access the Host's contact details and instructions on how to proceed,
            the winner must click or press the 'claim' button on the winning ticket within 21 days of winning.
          </Text>
          <Text>
            7.4. The prize can only be claimed by the entrant.
          </Text>
          <Text>
            7.5. TikiTiki does not accept any responsibility of the Winner is not able to takeup
            the prize.
          </Text>
          <Text>
            7.6. Unless indicated in the competition description, the Winner and the Host
            should communicate between each other to realize the delivery.
          </Text>
          <Text>
            7.7. The Host is obliged to take all reasonably necessary steps to ensure safe
            exchange of the Prize and is expected to obtain all relevant shipment/collection
            or delivery receipts in case proof is needed in the event of a dispute.
          </Text>
          <Text>
            7.8. In the event that the Host and Winner must meet to exchange the Prize.
            It is the responsibility of both the Host and the Winner to ensure that
            the Winner Accepts prize on Our Platform at the time of the exchange.
          </Text>
          <Text>
            8. Acceptance and Disputes
          </Text>
          <Text>
            8.1 All participants to a competition agree that TikiTiki's decision on the
            conduct of any competition is final.
          </Text>
          <Text>
            8.2 The Winner has 21 days from the Draw Date to either Accept or Dispute the
            Prize on Our Platform.
          </Text>
          <Text>
            8.3 By Accepting the Prize on Our Platform the Winner confirms that the Prize
            is as advertised in the competition Particulars
            and possession of it has been taken by the Winner.
          </Text>
          <Text>
            8.4 On the Winner Accepting the Prize on Our Platform, the Winner loses the
            ability to Dispute the Prize or claim compensation as per the TikiTiki
            Guarantee and that they consent to the Host's Proceeds being released to
            the Host and/or their supporting charity or cause.
          </Text>
          <Text>
            8.5 By Disputing the Prize on Our Platform the Winner confirms that the Prize
            is not as advertised in the competition Particulars or that
            possession of it has not been taken by the Winner.
          </Text>
          <Text>
            8.6 On the Winner Disputing the Prize the Competition will be investigated by a
            member of Our Disputes Team who will make a determination.
          </Text>
          <Text>
            8.7 In circumstances where TikiTiki is required to investigate a dispute it reserves
            the right to investigate all the circumstances surrounding the dispute and make an
            adjudication at its absolute discretion,
            in order to determine fault:
          </Text>
          <UnorderedList>
            <ListItem>
              If the dispute is awarded in favour of the Host, the Host's Proceeds will be released to
              the Host and/or their supporting charity or cause, at which stage the Winner
              loses all rights under these Terms and Conditions.
            </ListItem>
            <ListItem>
              If the dispute is awarded in favour of the Winner, TikiTiki has no obligation to pay the Host's
              Proceeds to the Host and/or their supporting charity or cause. At this stage
              the Host loses all rights under these Terms and Conditions.
            </ListItem>
            <ListItem>
              If the dispute is awarded in favour of the Winner, then as per the TikiTiki Guarantee,
              the Winner will receive compensation
              amounting to 75% of the Total Proceeds.
            </ListItem>
            <ListItem>
              Subject to paragraph 11.5 if a competition has multiple Prizes and one of the Prizes is disputed then the compensation
              will be divided equally between each Prize. Each Winner that disputes their
              Prize will receive 75% of their share of the Total Proceeds
            </ListItem>
          </UnorderedList>

          <Text>
            8.8. If the Winner neither Accepts nor Disputes the Prize on Our
            Platform within 21 days of the Draw Date the Winner loses the ability to Accept or Dispute the Prize and the
            Host's Proceeds will automatically be released to the Host and/or their supporting charity or cause at which stage the
            Winner loses all rights under these Terms and Conditions.
          </Text>
          <Text>
            8.9. TikiTiki's decision is final and legally binding on all parties and no correspondence or discussion will be entered into.
          </Text>
          <Text>
            9. TikiTiki Guarantee
          </Text>
          <Text>
            9.1 If the Host fails to provide a Prize, the Winners will receive a share of the compensation amounting to 75% of the Total
            Proceeds of the relevant competition.
          </Text>
          <Text>
            9.2 All compensation payments are guaranteed and paid directly by TikiTiki Limited.
          </Text>
          <Text>

          </Text>

        </Stack> */}

        {/* End terms and Conditions */}

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
                          Can I host a competition in my business name?
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
                      Hosting is free and 25% is charged on all ticket sales.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                          What is the minimum ticket price I can charge for my competition?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      The minimum price is 50KSH per ticket and a maximum of 10,000 KSH per ticket.
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
                      The minimum number of tickets is 50 and the maximum is 1000 tickets per competition.
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
                      chose to give the prize to the winner, you will receive the proceeds from the ticket sales.
                      If tou do not provide the prize to the winner, then the winner receives the total proceeds from
                      ticket sales and you receive no money.
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
                      In your competitions, the winner will be shown at the top, their
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
                          What happens if I send the prize and the winner but they say they did not receive it?
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
                      money through //TODO
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
                          Is it safe to enter a competition of TikiTiki?
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
              as={'a'}>Sell a product free</Button>
          </Center>


        </Stack>
      </Box>
    </ChakraProvider >
  );
}

export default Landing;