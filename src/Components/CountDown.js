import React, { useState, useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {

    const targetDateTime = new Date(targetDate);

    const offsetInMillis = 3 * 60 * 60 * 1000; // East Africa Time offset: 3 hours
    const adjustedDate = new Date(targetDateTime.getTime() - offsetInMillis);
   
    const currentDateTime = new Date(new Date());

    const difference = adjustedDate.getTime() - currentDateTime.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span key={interval}>
        {timeLeft[interval]}{interval}{" "}
      </span>
    );
  });

  return <Box color="green.400">{timerComponents.length ? timerComponents : <Text color="red.500">Ended !!!</Text>}</Box>;
};

export default Countdown;
