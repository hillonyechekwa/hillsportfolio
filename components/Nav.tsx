"use client";

import { NavBar } from "./NavBar"
import { Flex, Box, AbsoluteCenter } from "@chakra-ui/react"


export default function Nav() {
  return (
    <Box position="fixed" w="full" h="auto" className="z-30 top-[85%] ">
      <AbsoluteCenter axis="both">
        <Flex as="nav" align="center" justify="center" w="400" h="100">
          <NavBar />
        </Flex>
      </AbsoluteCenter>
    </Box>
  )
}
