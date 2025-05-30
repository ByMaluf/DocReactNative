import { TextInput, TextInputProps } from "react-native";
import { Container } from "./style";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export default function Input({ inputRef, ...rest }: Props) {

  const { COLORS } = useTheme();
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}