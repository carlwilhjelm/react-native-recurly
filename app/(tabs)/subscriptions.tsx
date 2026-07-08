import { Text, View, FlatList, TextInput } from 'react-native';
import React, { useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSubscriptions } from '@/context/SubscriptionsContext';
import SubscriptionCard from '@/components/SubscriptionCard';
import { home_empty_state } from '@/lib/utils';

const Subscriptions = () => {
  const { subscriptions } = useSubscriptions();
  const [search, setSearch] = useState('');
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return subscriptions;
    return subscriptions.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.plan?.toLowerCase().includes(q),
    );
  }, [search, subscriptions]);

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-2xl font-bold text-foreground mb-4">Subscriptions</Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search subscriptions..."
        placeholderTextColor="#9ca3af"
        className="bg-card text-foreground rounded-xl px-4 py-3 mb-5 text-base"
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId((current) => (current === item.id ? null : item.id))
            }
          />
        )}
        extraData={expandedSubscriptionId}
        ItemSeparatorComponent={() => <View className="h-4" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text className={home_empty_state}>No subscriptions found.</Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default Subscriptions;
