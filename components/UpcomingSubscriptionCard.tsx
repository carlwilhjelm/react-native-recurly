import { View, Text, Image } from 'react-native';
import React from 'react';
import { UpcomingSubscription } from '@/src/type';
import {
  upcoming_card,
  upcoming_icon,
  upcoming_meta,
  upcoming_name,
  upcoming_price,
  upcoming_row,
} from '@/assets/utils';
import { formatCurrency } from '@/lib/utils';

const UpcomingSubscriptionCard = ({
  name,
  price,
  daysLeft,
  icon,
  currency,
}: UpcomingSubscription) => {
  return (
    <View className={upcoming_card}>
      <View className={upcoming_row}>
        <Image source={icon} className={upcoming_icon} />
        <View>
          <Text className={upcoming_price}>{formatCurrency(price, currency)}</Text>
          <Text className={upcoming_meta} numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : `Last day`}
          </Text>
        </View>
      </View>
      <Text className={upcoming_name} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};
export default UpcomingSubscriptionCard;
