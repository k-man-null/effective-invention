import {
  Center,
  Stack,
} from "@chakra-ui/react";

import laptop from '../../assets/macbook.jpeg'
import fridge from '../../assets/startupmemedomain.jpeg'
import TV from '../../assets/TVAndSoundBarHero.webp'
import BMW from '../../assets/bmw.png'

export default function RafflePreviewLanding() {

  return (
    <Center>
      <Stack direction={['column', 'row']} spacing='24px' mx="10%" my="10%">
        <ImageWithBadge imageUrl={fridge} badgeValue={'500Ksh'} />
        <ImageWithBadge imageUrl={TV} badgeValue={'250Ksh'} />
        <ImageWithBadge imageUrl={laptop} badgeValue={'500Ksh'} />
        <ImageWithBadge imageUrl={BMW} badgeValue={'1100Ksh'} />
      </Stack>
    </Center>


  );
}

import "./ribbon.css"

const ImageWithBadge = ({ imageUrl, badgeValue }) => {
  return (
    <div className="box">
      <img src={imageUrl} style={{ maxWidth: '100%', verticalAlign: 'top' }} />
      <div className="ribbon ribbon-top-left"><span>{badgeValue}</span></div>
    </div>
  );
};


