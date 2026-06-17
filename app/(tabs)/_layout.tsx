import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon sf="house.fill" drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="subscriptions">
          <Icon sf="bag" drawable="custom_settings_drawable" />
          <Label>Subscriptions</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="insights">
          <Icon sf="eye" drawable="custom_settings_drawable" />
          <Label>Insights</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
          <Icon sf="gear" drawable="custom_settings_drawable" />
          <Label>Settings</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="subscriptions/[id].tsx" hidden={true}>
          <Icon sf="0.circle" drawable="custom_settings_drawable" />
          <Label>Settings</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
}
