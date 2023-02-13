import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./src/views/stacks/MainStack";
import { AuthProvider } from "./src/contexts/AuthContext";
import { UserProvider } from "./src/contexts/userContext";

export default function () {
  return (
    <AuthProvider>
      <UserProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </UserProvider>
    </AuthProvider>
  );
}
