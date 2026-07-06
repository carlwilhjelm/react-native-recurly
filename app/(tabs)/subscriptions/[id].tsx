import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { usePostHog } from 'posthog-react-native';

const SubscriptionDetails = () => {
  const {id} = useLocalSearchParams<{ id: string }>()
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture('subscription_details_viewed', {
      subscription_id: id,
    });
  }, [id, posthog]);
  return (
    <View>
      <Text className="text-xl font-bold text-success">SubscriptionDetails: {id}</Text>
      <Link href="/"> Go Back</Link>
    </View>
  );
}
  export default SubscriptionDetails
