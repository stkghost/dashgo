import { Flex, Icon, Input as ChakraInput, Text } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      alignItems="center"
      mx="auto"
      px="6"
      mt="4"
      h="20"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dashgo
        <Text as="span" marginLeft="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth="400"
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <ChakraInput
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </Flex>
  );
}
