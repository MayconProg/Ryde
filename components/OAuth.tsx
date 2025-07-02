import { icons } from "@/constants";
import { fetchAPI } from "@/lib/fetch";
import { useSSO } from "@clerk/clerk-expo";
import * as AuthSession from "expo-auth-session";
import { useCallback } from "react";
import { Image, Text, View } from "react-native";
import { CustomButton } from "./CustomButton";

export function OAuth() {
  const { startSSOFlow } = useSSO();

  const handleGoogleSignIn = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: "oauth_google",
          redirectUrl: AuthSession.makeRedirectUri({
            path: "/(root)/(tabs)/home",
            scheme: "Ryde",
          }),
        });

      if (createdSessionId) {
        if (setActive) {
          await setActive!({ session: createdSessionId });

          if (signUp?.createdUserId) {
            await fetchAPI("/(api)/user", {
              method: "POST",
              body: JSON.stringify({
                name: `${signUp.firstName} ${signUp.lastName}`,
                email: signUp.emailAddress,
                clerkId: signUp.createdUserId,
              }),
            });
          }
        }
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg ">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}
