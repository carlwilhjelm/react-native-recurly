import { Text, Image, View, FlatList, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import {
  HOME_BALANCE,
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
import CreateSubscriptionModal from '@/components/CreateSubscriptionModal';
import { useCallback, useState } from 'react';
import { useUser } from '@clerk/expo';
import { usePostHog } from 'posthog-react-native';
import { useSubscriptions } from '@/context/SubscriptionsContext';

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { subscriptions, addSubscription } = useSubscriptions();
  const { user } = useUser();
  const posthog = usePostHog();

  const displayName =
    user?.firstName || user?.fullName || user?.primaryEmailAddress?.emailAddress || 'User';

  const ListHeader = useCallback(
    () => (
      <>
        <View className={home_header}>
          <View className={home_user}>
            <Image
              source={user?.imageUrl ? { uri: user.imageUrl } : images.avatar}
              className={home_avatar}
            />
            <Text className={home_user_name}>{displayName}</Text>
            <Pressable onPress={() => setModalVisible(true)}>
              <Image source={icons.add} className={home_add_icon} />
            </Pressable>
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
    ),
    [user, displayName],
  );

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        ListHeaderComponent={ListHeader}
        data={subscriptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() => {
              const isExpanding = expandedSubscriptionId !== item.id;
              setExpandedSubscriptionId((currentId) => (currentId === item.id ? null : item.id));
              if (isExpanding) {
                posthog.capture('subscription_expanded', {
                  subscription_id: item.id,
                  subscription_name: item.name,
                });
              }
            }}
          />
        )}
        extraData={expandedSubscriptionId}
        ItemSeparatorComponent={() => <View className={'h-4'} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text className={home_empty_state}>No subscriptions yet.</Text>}
      />
      <CreateSubscriptionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={addSubscription}
      />
    </SafeAreaView>
  );
}


// import { AuthView } from '@clerk/expo/native';
// import { useAuth, useUser } from '@clerk/expo';
// import { useState } from 'react';
// import { Button, Modal, StyleSheet, Text, View } from 'react-native';
//
// export default function AuthButton() {
//   const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
//   const { user } = useUser();
//   const [isAuthOpen, setIsAuthOpen] = useState(false);
//
//   return (
//     <View style={styles.container}>
//       {isSignedIn ? (<Text>User ID: {user?.id}</Text>) : (<Button title="Sign in" onPress={() => setIsAuthOpen(true)} />)}
//       <Modal
//         animationType="slide"
//         visible={isAuthOpen}
//         presentationStyle="pageSheet"
//         onRequestClose={() => setIsAuthOpen(false)}>
//         <AuthView onDismiss={() => setIsAuthOpen(false)} />
//       </Modal>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
