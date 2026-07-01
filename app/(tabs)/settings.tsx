import { Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth, useUser } from '@clerk/expo';

const Settings = () => {
  const { signOut } = useAuth();
  const { user } = useUser();

  return (
    <SafeAreaView className="p-safe flex-1 bg-background">
      <Text className="mb-6 px-6 pt-4 text-2xl font-bold">Settings</Text>

      {user && (
        <View className="mx-6 mb-6 items-center rounded-xl bg-gray-100 p-6">
          {user.imageUrl ? (
            <Image
              source={{ uri: user.imageUrl }}
              className="mb-3 h-20 w-20 rounded-full"
            />
          ) : null}
          <Text className="text-lg font-semibold">
            {user.fullName ?? user.primaryEmailAddress?.emailAddress}
          </Text>
          {user.primaryEmailAddress ? (
            <Text className="mt-1 text-gray-500">
              {user.primaryEmailAddress.emailAddress}
            </Text>
          ) : null}
        </View>
      )}

      <Pressable
        className="mx-6 items-center rounded-lg bg-red-500 p-4"
        onPress={() => signOut()}
      >
        <Text className="font-semibold text-white">Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Settings;
