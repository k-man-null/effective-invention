# A raffle hosting website's frontend

# Test Users

You can test with the following users so you dont need to 
register with your phone number or email

NOTE: Do not change the passwords


email: ```Lucy@mail.com```

password: ```demouser2```

email: ```testuser1@gmail.com```

password: ```demouser1```

email: ```cynthia@mail.com```

password: ```demouser3```



## Introduction

This the frontend part of a large application that provides users the ability to host raffles.

## Here are all the parts of the application's microservice architecture

## 1. [FRONTEND](https://github.com/k-man-null/effective-invention)
 ## Technologies
 - React
 - Chakra UI
 - Redux
 - ANT design
 - Firebase Hosting

 The public url is [here](https://tikitiki.me) 

## 2. [REST-API](https://github.com/k-man-null/fluffy-memory)
 ## Technologies

 - NodeJS
 - Express
 - Firebase
 - Intasend Payment
 - Google Cloud Run

## 3. [DRAWING-MICROSERVICE](https://github.com/k-man-null/pick-winning-ticket)

 ## Technologies

 - Google Cloud Functions
 - Google Cloud PubSub

## 4. [IMAGE-COMPRESSION-RESIZE](https://github.com/k-man-null/image-compressor-cloud-function) 

 ## Technologies
 - Sharp [SHARP-NODEJS] (https://github.com/lovell/sharp)
 - Google Cloud Functions
 - Google Cloud Storage triggers

## 5. [IMAGE-STORAGE](https://cloud.google.com/storage?hl=en)

 ## Technologies
- Google Cloud Storage

## 6. [EMAIL-SENDING](https://github.com/k-man-null/mailman-lambda)
 ## Technologies
 - AWS SES
 - AWS Lambda
 - Google Cloud PubSub subscription


## Running the app locally

1. Clone the repo
2. npm install
3. npm start


# User Stories


1. A use can register with an email, name, password and mpesa phone number in the format "245722000000"
2. A user can create a raffle
3. A user can Enter a raffle
4. A user can claim their prize if they have a winning ticket
5. A user can buy tickets
6. A user can create referral codes
7. A user can purchase tickets with referral codes
8. A user cannot join a game thy created
9. A user can verify their email
10. A user can upload their avatar
11. A user can see the total number of tickets sold
12. A user can see all their tickets
13. A user can see all the raffles(games) available

... more to come