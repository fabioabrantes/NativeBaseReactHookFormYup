import { NativeBaseProvider} from "native-base";
//screens
import { SignUp } from './src/screens/SignUp';

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp/>
    </NativeBaseProvider>
  );

}


