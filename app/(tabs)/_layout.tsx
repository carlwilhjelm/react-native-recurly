import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import '@/global.css';

export default function TabLayout() {
    return (
      <NativeTabs backgroundColor="var(--color-primary)">
        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon
            sf={{ default: 'house', selected: 'house.fill' }}
            drawable="custom_android_drawable"
          />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="subscriptions">
          <Icon sf={{ default: 'bag', selected: 'bag.fill' }} drawable="custom_settings_drawable" />
          <Label>Subscriptions</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="insights">
          <Icon sf={{ default: 'eye', selected: 'eye.fill' }} drawable="custom_settings_drawable" />
          <Label>Insights</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
          <Icon
            sf={{ default: 'gear.circle', selected: 'gear.circle.fill' }}
            drawable="custom_settings_drawable"
          />
          <Label>Settings</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="subscriptions/[id].tsx" hidden={true}>
          <Icon sf="0.circle" drawable="custom_settings_drawable" />
          <Label>Settings</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
}
