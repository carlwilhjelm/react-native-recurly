import { Text, Image, View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  UPCOMING_SUBSCRIPTIONS,
} from '@/constants/data';
import { icons } from '@/constants/icons';
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import {
  home_add_icon,
  home_avatar,
  home_balance_amount,
  home_balance_card,
  home_balance_date,
  home_balance_label,
  home_balance_row,
  home_empty_state,
  home_header,
  home_user,
  home_user_name,
  formatCurrency,
} from '@/lib/utils';
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import SubscriptionCard from '@/components/SubscriptionCard';
import { useState } from 'react';
import { useUser } from '@clerk/expo';

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);
  const { user } = useUser();
  const displayName =
    user?.firstName || user?.fullName || user?.emailAddresses[0]?.emailAddress || 'User';
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className={home_header}>
              <View className={home_user}>
                <Image
                  source={user?.imageUrl ? { uri: user.imageUrl } : images.avatar}
                  className={home_avatar}
                />
                <Text className={home_user_name}>{displayName}</Text>
                <Image source={icons.add} className={home_add_icon}></Image>
              </View>
            </View>

            <View className={home_balance_card}>
              <Text className={home_balance_label}>Balance</Text>
              <View className={home_balance_row}>
                <Text className={home_balance_amount}>{formatCurrency(HOME_BALANCE.amount)}</Text>
                <Text className={home_balance_date}>
                  {dayjs(HOME_BALANCE.nextRenewalDate).format('YYYY-MM-DD')}
                </Text>
              </View>
            </View>

            <View className={'mb-5'}>
              <ListHeading title={'Upcoming'} />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                  <Text className={home_empty_state}>No upcoming renewals yet.</Text>
                )}
              />
            </View>

            <ListHeading title={'All Subscriptions'} />
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId((currentId) => (currentId === item.id ? null : item.id))
            }
          />
        )}
        extraData={expandedSubscriptionId}
        ItemSeparatorComponent={() => <View className={'h-4'} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text className={home_empty_state}>No subscriptions yet.</Text>}
      />
    </SafeAreaView>
  );
}
