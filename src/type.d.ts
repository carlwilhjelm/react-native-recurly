import type { ImageSourcePropType } from 'react-native';

export interface AppTab {
    name: string;
    title: string;
    icon: ImageSourcePropType;
  }

export interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
  }

export interface Subscription {
    id: string;
    icon: ImageSourcePropType;
    name: string;
    plan?: string;
    category?: string;
    paymentMethod?: string;
    status?: string;
    startDate?: string;
    price: number;
    currency?: string;
    billing: string;
    renewalDate?: string;
    color?: string;
  }

export interface SubscriptionCardProps extends Omit<Subscription, 'id'> {
    expanded: boolean;
    onPress: () => void;
    onCancelPress?: () => void;
    isCancelling?: boolean;
  }

export interface UpcomingSubscription {
    id: string;
    icon: ImageSourcePropType;
    name: string;
    price: number;
    currency?: string;
    daysLeft: number;
  }

export interface UpcomingSubscriptionCardProps extends Omit<UpcomingSubscription, 'id'> {}

export interface ListHeadingProps {
    title: string;
  }