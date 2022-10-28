import {Button as NBButton,IButtonProps,Text} from 'native-base';

type Props = IButtonProps & {
  title:string;
}
export function Button({title,...rest}:Props){
  return (
    <NBButton 
      w="full"
      h={16}
      bg="green.700"
      _pressed={{
        bgColor:"green.800"
      }}
      {...rest}
    >
      <Text color="white" fontSize="md"> {title} </Text>
    </NBButton>

  );
}