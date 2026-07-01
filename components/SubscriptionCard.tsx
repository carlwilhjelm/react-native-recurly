import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { SubscriptionCardProps } from '@/src/type';
import {
  formatCurrency, formatStatusLabel,
  formatSubscriptionDateTime,
  sub_billing,
  sub_body,
  sub_card,
  sub_card_expanded,
  sub_copy, sub_details,
  sub_head,
  sub_icon, sub_label,
  sub_main,
  sub_meta,
  sub_price,
  sub_price_box,
  sub_row,
  sub_row_copy,
  sub_title, sub_value,
} from '@/lib/utils';
import clsx from 'clsx';

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  color,
  category,
  plan,
  renewalDate,
  expanded,
  onPress,
  paymentMethod,
  startDate,
  status
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx(sub_card, expanded ? sub_card_expanded : 'bg-card')}
      style={!expanded && color ? { backgroundColor: color } : undefined}>
      <View className={sub_head}>
        <View className={sub_main}>
          <Image source={icon} className={sub_icon} />
          <View className={sub_copy}>
            <Text numberOfLines={1} className={sub_title}>
              {name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode={'tail'} className={sub_meta}>
              {category?.trim() || plan?.trim() || renewalDate
                ? formatSubscriptionDateTime(renewalDate)
                : ''}
            </Text>
          </View>
        </View>
        <View className={sub_price_box}>
          <Text className={sub_price}>{formatCurrency(price, currency)}</Text>
          <Text className={sub_billing}>{billing ?? 'Not Provided'}</Text>
        </View>
      </View>
      {expanded && (
        <View className={sub_body}>
          <View className={sub_details}>
            <View className={sub_row}>
              <View className={sub_row_copy}>
                <Text className={sub_label}>Payment:</Text>
                <Text className={sub_value} numberOfLines={1} ellipsizeMode={'tail'}>
                  {paymentMethod?.trim() ?? 'Not Provided'}
                </Text>
              </View>
            </View>
          </View>

          <View className={sub_row}>
            <View className={sub_row_copy}>
              <Text className={sub_label}>Category:</Text>
              <Text className={sub_value} numberOfLines={1} ellipsizeMode={'tail'}>
                {category?.trim() ?? 'Not Provided'}
              </Text>
            </View>
          </View>

          <View className={sub_row}>
            <View className={sub_row_copy}>
              <Text className={sub_label}>Started:</Text>
              <Text className={sub_value} numberOfLines={1} ellipsizeMode={'tail'}>
                {startDate ? formatSubscriptionDateTime(startDate) : ''}
              </Text>
            </View>
          </View>

          <View className={sub_row}>
            <View className={sub_row_copy}>
              <Text className={sub_label}>Renewal Date:</Text>
              <Text className={sub_value} numberOfLines={1} ellipsizeMode={'tail'}>
                {renewalDate ? formatSubscriptionDateTime(renewalDate) : ''}
              </Text>
            </View>
          </View>

          <View className={sub_row}>
            <View className={sub_row_copy}>
              <Text className={sub_label}>Status:</Text>
              <Text className={sub_value} numberOfLines={1} ellipsizeMode={'tail'}>
                {status ? formatStatusLabel(status) : ''}
              </Text>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};
export default SubscriptionCard;
