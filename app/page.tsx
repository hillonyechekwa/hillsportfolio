// import Image from "next/image";
import {
  Container,
  Center,
  Grid,
  GridItem,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Link,
  Stack,
  Image
} from "@chakra-ui/react"

export default function Home() {
  return (
    <Container fluid>
      <Flex align="center" justify="space-evenly" w="full">
        <Stack>
          <Heading size="3xl" fontWeight="medium">Hello, I&apos;m</Heading>
          <Heading size="5xl" fontWeight="bold">Hill Onyechekwa</Heading>
        </Stack>
        <Image src="/images/deadpanhill.svg" alt="Hill's avatar" width="300px" roundedBottom="full" />
      </Flex>

      <Center as="section" w="full" h="50dvh">
        <Text maxW="800px" textStyle="xl" className="leading-2xl">
          I&apos;m a software engineer that builds ideas into functional software applications. I work with React, Node.js and Rust to build web applications and systems utility tools. For 5 years I've worked with numerous organizations to build products ranging from marketing, energy and data analytics. I enjoy collaborating with other developers and writing technical articles about my learniongs in my development journey.
        </Text>
      </Center>
    </Container>
  );
}
