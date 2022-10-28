import {VStack,Heading,Center} from 'native-base';
import {Controller,useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

//componentes criados
import { Input } from '../components/Input';
import { Button } from '../components/Button';
// utils
import {signUpSchema} from '../utils/schemaValidation';

type FormDataProps ={
  name:string;
  email:string;
  password:string;
  password_confirm:string;
}



export function SignUp() {
  const {control,handleSubmit,formState:{errors}} = useForm<FormDataProps>({
    resolver:yupResolver(signUpSchema)
  });

  function handleSignUp(data:FormDataProps){
    console.log(data)
  }

  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={12}>Crie sua conta </Heading>

        <Controller
          control={control}
          name="name"
          render={({field:{onChange}})=>(
            <Input 
              placeholder='Nome' 
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({field:{onChange}})=>(
            <Input 
              placeholder='E-mail' 
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
         
         <Controller
          control={control}
          name="password"
          render={({field:{onChange}})=>(
            <Input 
              placeholder='Senha'
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />
         
         <Controller
          control={control}
          name="password_confirm"
          render={({field:{onChange}})=>(
            <Input 
              placeholder='Confirme a senha'
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />
   
        <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)}/>
      </Center>
    </VStack>
  );
}

