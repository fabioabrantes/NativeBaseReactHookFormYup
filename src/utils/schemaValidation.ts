import * as yup from 'yup';

export const signUpSchema = yup.object({
  name:yup.string().required('nome obrigatório').min(5,'Tem que ter pelo menos 5 caracteres'),
  email:yup.string().required('Informe seu email').email('Digite um email válido'),
  password:yup.string().required('Informe sua senha').min(6,'A senha deve ter pelo menos 6 dígitos'),
  password_confirm:yup
    .string()
    .required('Informe sua senha novamente')
    .oneOf([yup.ref('password'), null],'A confirmação de senha não é igual')
});