import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard1 from '../screens/Boarding/onBoard1';
import OnBoard2 from '../screens/Boarding/onBoard2';
import OnBoard3 from '../screens/Boarding/onBoard3';
import Login from '../screens/login/SignUp/login';
import SignUp from '../screens/login/SignUp/signUp';


const Stack = createNativeStackNavigator();

const AuthStack = () => {

   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="onboarding1" component={OnBoard1} />
            <Stack.Screen name="onboarding2" component={OnBoard2} />
            <Stack.Screen name="onboarding3" component={OnBoard3} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default AuthStack