---
author: Dragan Pecanac
pubDatetime: 2022-01-15T15:22:00Z
title: Arduino Flight Computer
postSlug: arduino-flight-computer
featured: false
draft: true
tags:
  - arduino
  - cpp
  - project
ogImage: ""
description: A mini flight computer for recreational and collegiate-level model rockets.
---

A mini flight computer for recreational and collegiate-level model rockets.

<!--![Dragan's Template Project](https://someimgonline.png)-->

## Table of Contents

## Intro

Building a model rocket flight computer was a dream I had been nurturing for a long time. I was fascinated with the idea of creating something that could measure and record the rocket's altitude, velocity, and orientation during flight. After doing some research, I decided to use an Arduino microcontroller and various sensors like an accelerometer, altimeter, IMU, and memory card to create my flight computer.

## Hardware/Software

- Microcontroller: Arduino Nano
- Altimeter: Adafruit BMP390
- Language: Arduino (C++)

## Features

The flight computer that was created using an Arduino microcontroller and various sensors like an accelerometer, altimeter, IMU, and memory card has several features. Here are some of the main features of this flight computer:

### Data Collection (onboard sensors)

I decided to use an accelerometer, altimeter, and IMU. I wired the sensors to the appropriate pins on the Arduino board, double-checking my connections to ensure everything was properly wired.

### Data Storage

The data storage portion of the project involved using a memory card to store the data collected by the flight computer during the rocket's flight. The memory card was connected to the flight computer and allowed the data to be stored in a secure and reliable manner.

Once the rocket had landed, the data collected by the flight computer was downloaded from the memory card to a computer for analysis. The data was easily accessible and could be used to generate graphs and charts that showed the rocket's altitude, velocity, and orientation during the flight. This data was crucial for analyzing the rocket's performance and making improvements for future launches.

The use of a memory card for data storage provided several benefits. First, it allowed for the data to be easily transferred to a computer for analysis. Second, it provided a secure and reliable storage solution for the data collected during the flight. Finally, it allowed for the flight computer to continue collecting data during subsequent launches without the need for additional storage solutions.

<!--### Data Analysis-->

## Conclusion

Overall, the flight computer created using an Arduino microcontroller and various sensors is a powerful tool for collecting and analyzing data during a rocket's flight. Its features ensure that accurate data is collected, stored, and analyzed in real-time, allowing for improvements to be made to the rocket and the flight computer for future launches.

<!--Coding the Arduino board was probably the most challenging part of the project. I used the Arduino Integrated Development Environment (IDE) to write the code. The code was written to collect data from the sensors, store it on the memory card, and then transmit it to a computer for further analysis.-->

Before launching the rocket, I had to test the flight computer to ensure it was working correctly. I connected the computer to the Arduino board and uploaded the code. I then simulated the launch by moving the rocket in different directions to see if the sensors were picking up the data accurately.

Finally, it was time to launch the rocket. I secured the flight computer inside the rocket and launched it. During the flight, the sensors collected data about the rocket's altitude, velocity, and orientation. When the rocket landed, the memory card stored the data for later analysis.

Analyzing the data was probably the most exciting part of the project. I used a computer to read the data and generate graphs or charts that showed the rocket's altitude, velocity, and orientation during the flight. This data could be used to make improvements to the rocket or refine the flight computer for future launches.

Building a model rocket flight computer was an exciting and challenging project that required a lot of technical expertise. However, with the right tools and knowledge, I was able to create a flight computer and collect data on my rocket's performance during the flight. This project allowed me to combine my passion for rockets and my love of technology, and I look forward to exploring more projects in the future.
