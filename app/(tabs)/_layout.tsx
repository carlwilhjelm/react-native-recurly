import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import '@/global.css';

export default function TabLayout() {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon sf={{ default: 'house', selected: 'house.fill' }}/>
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
    );
}
