import { TextInputProps } from "react-native";
import { Container } from "./style";
import { useTheme } from "styled-components/native";

export default function Input({ ...rest }: TextInputProps) {

  const { COLORS } = useTheme();
  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}