import { View, Text, Image } from 'react-native';
import React from 'react';
import { SubscriptionCardProps } from '@/src/type';
import {
  formatCurrency,
  sub_billing,
  sub_card,
  sub_copy,
  sub_head,
  sub_icon,
  sub_main,
  sub_price,
  sub_price_box,
} from '@/lib/utils';

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
}: SubscriptionCardProps) => {
  return (
    <View className={sub_card + ' bg-card'}>
      <View className={sub_head}>
        <View className={sub_main}>
          <Image source={icon} className={sub_icon} />
          <View className={sub_copy}>
            <Text numberOfLines={1}>{name}</Text>
          </View>
        </View>
      </View>

      <View className={sub_price_box}>
        <Text className={sub_price}>{formatCurrency(price, currency)}</Text>
        <Text className={sub_billing}>{billing}</Text>
      </View>
    </View>
  );
};
export default SubscriptionCard;
