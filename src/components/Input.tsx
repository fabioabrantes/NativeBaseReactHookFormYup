import {Input as NBInput,IInputProps, FormControl} from 'native-base';

type Props = IInputProps &{
  errorMessage?: string;
}
export function Input({errorMessage=null,isInvalid,...rest}:Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NBInput
        bg="gray.200"
        fontSize="md"
        h={16}
        isInvalid={invalid}
        placeholderTextColor='gray.500'
        _focus={{
          bg:"gray.400",
          borderWidth:2,
          borderColor:"green.500"
        }}
        _invalid={{
          borderWidth:2,
          borderColor:"red.500"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}

