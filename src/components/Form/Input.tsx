import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, ...rest }: InputProps) {
  return (
    <ChakraInput
      name={name}
      id={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: "gray.900",
      }}
      size="lg"
      {...rest}
    />
  );
}
