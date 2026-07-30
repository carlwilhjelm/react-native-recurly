import { useAuth } from '@clerk/expo';
import { Redirect, SplashScreen} from 'expo-router';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import '@/global.css';
import { SubscriptionsProvider } from '@/context/SubscriptionsContext';
import Constants, { ExecutionEnvironment } from 'expo-constants';

export default function TabLayout() {
  SplashScreen.preventAutoHideAsync();

  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }
  const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

  if (!isSignedIn) {
    if (isExpoGo) {
      return <Redirect href="/(auth)/sign-in.expo" />;
    } else {
      return <Redirect href="/(auth)/sign-in" />;
    }
  }

  return (
    <SubscriptionsProvider>
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={{ default: 'house', selected: 'house.fill' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="subscriptions">
        <Icon sf={{ default: 'bag', selected: 'bag.fill' }} />
        <Label>Subscriptions</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="insights">
        <Icon sf={{ default: 'eye', selected: 'eye.fill' }} />
        <Label>Insights</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf={{ default: 'gear.circle', selected: 'gear.circle.fill' }} />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="subscriptions/[id].tsx" hidden={true} />
    </NativeTabs>
    </SubscriptionsProvider>
  );
}