import { Text, Image, View, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth, useUser } from '@clerk/expo';
import images from '@/constants/images';
import { home_avatar, home_balance_card } from '@/lib/utils';

const Settings = () => {
  const { signOut } = useAuth();
  const { user } = useUser();

  const email = user?.primaryEmailAddress?.emailAddress ?? '—';
  const fullName = user?.fullName ?? '—';

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mb-6 flex-row items-center gap-3">
          <Image
            source={user?.imageUrl ? { uri: user.imageUrl } : images.avatar}
            className={home_avatar}
          />
          <View>
            <Text className="text-lg font-bold">{user?.fullName ?? 'Account'}</Text>
            <Text className="text-sm text-gray-500">{email}</Text>
          </View>
        </View>

        {/* Account Details */}
        <Text className="mb-3 text-xs font-extrabold uppercase tracking-widest text-gray-400">
          Account Details
        </Text>
        <View className="mb-6 overflow-hidden rounded-2xl bg-white">
          <View className="flex-row items-center justify-between px-4 py-3">
            <Text className="text-sm text-gray-500">Full Name</Text>
            <Text className="text-sm font-medium">{fullName}</Text>
          </View>
          <View className="mx-4 h-px bg-gray-100" />
          <View className="flex-row items-center justify-between px-4 py-3">
            <Text className="text-sm text-gray-500">Email</Text>
            <Text className="text-sm font-medium">{email}</Text>
          </View>
        </View>

        {/* Sign Out */}
        <Pressable className={home_balance_card} onPress={() => signOut()}>
          <Text className="font-semibold text-white">Sign Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
