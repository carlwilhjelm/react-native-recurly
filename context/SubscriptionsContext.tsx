import React, { createContext, useContext, useState, useCallback } from 'react';
import { HOME_SUBSCRIPTIONS } from '@/constants/data';
import { Subscription } from '@/src/type';

interface SubscriptionsContextValue {
  subscriptions: Subscription[];
  addSubscription: (subscription: Subscription) => void;
}

const SubscriptionsContext = createContext<SubscriptionsContextValue | undefined>(undefined);

export const SubscriptionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(HOME_SUBSCRIPTIONS);

  const addSubscription = useCallback((subscription: Subscription) => {
    setSubscriptions((prev) => [subscription, ...prev]);
  }, []);

  return (
    <SubscriptionsContext.Provider value={{ subscriptions, addSubscription }}>
      {children}
    </SubscriptionsContext.Provider>
  );
};

export const useSubscriptions = () => {
  const ctx = useContext(SubscriptionsContext);
  if (!ctx) throw new Error('useSubscriptions must be used within SubscriptionsProvider');
  return ctx;
};
