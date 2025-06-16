import { useAuth } from "@clerk/clerk-expo/";
import { Redirect } from "expo-router";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return;
  }

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }

  return <Redirect href="./(auth)/welcome" />;
}
