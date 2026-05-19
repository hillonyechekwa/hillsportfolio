"use client";
import { useIsMobile } from "@/hooks/UseMobile"
import { Text, Box, Flex } from "@chakra-ui/react"
import { HomeIcon, PenToolIcon, RocketIcon } from "lucide-react"

export function NavBar() {
  const isMobile = useIsMobile()

  return (
    <Flex as="nav" justify="space-between" align="center" w="300">
      {isMobile ? (
        <Text>Mobile view </Text>
      ) : (
        <Text> Desktop view </Text>
      )}
    </Flex>
  )
}


