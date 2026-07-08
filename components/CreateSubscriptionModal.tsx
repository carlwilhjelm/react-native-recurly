import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { icons } from '@/constants/icons';
import { Subscription } from '@/src/type';
import {
  auth_field,
  auth_label,
  auth_input,
  auth_button,
  auth_button_disabled,
  auth_button_text,
  picker_row,
  picker_option,
  picker_option_active,
  picker_option_text,
  picker_option_text_active,
  category_scroll,
  category_chip,
  category_chip_active,
  category_chip_text,
  category_chip_text_active,
} from '@/lib/utils';

const CATEGORIES = [
  'Entertainment',
  'AI Tools',
  'Developer Tools',
  'Design',
  'Productivity',
  'Cloud',
  'Music',
  'Other',
];

const CATEGORY_COLORS: Record<string, string> = {
  Entertainment: '#f5c542',
  'AI Tools': '#b8d4e3',
  'Developer Tools': '#e8def8',
  Design: '#b8e8d0',
  Productivity: '#fdd9b5',
  Cloud: '#c5e1f5',
  Music: '#f5b8d0',
  Other: '#e0e0e0',
};

type Frequency = 'Monthly' | 'Yearly';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: (subscription: Subscription) => void;
}

const CreateSubscriptionModal = ({ visible, onClose, onSubmit }: Props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [frequency, setFrequency] = useState<Frequency>('Monthly');
  const [category, setCategory] = useState('');

  const priceNum = parseFloat(price);
  const isValid = name.trim().length > 0 && !isNaN(priceNum) && priceNum > 0;

  const handleSubmit = () => {
    if (!isValid) return;

    const startDate = dayjs().toISOString();
    const renewalDate =
      frequency === 'Monthly'
        ? dayjs().add(1, 'month').toISOString()
        : dayjs().add(1, 'year').toISOString();

    const subscription: Subscription = {
      id: `custom-${Date.now()}`,
      icon: icons.wallet,
      name: name.trim(),
      price: priceNum,

      currency: 'USD',
      billing: frequency,
      frequency,
      category: category || 'Other',
      status: 'active',
      startDate,
      renewalDate,
      color: CATEGORY_COLORS[category] ?? CATEGORY_COLORS['Other'],
    } as Subscription;

    onSubmit(subscription);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setFrequency('Monthly');
    setCategory('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <View className="flex-1 justify-end bg-black/50">
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View className="rounded-t-3xl bg-background px-5 pb-10 pt-5">
            {/* Header */}
            <View className="mb-6 flex-row items-center justify-between">
              <Text className="text-xl font-bold text-foreground">New Subscription</Text>
              <Pressable onPress={handleClose} className="size-9 items-center justify-center rounded-full bg-muted">
                <Text className="text-base font-bold text-foreground">✕</Text>
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Name */}
              <View className={clsx(auth_field, 'mb-4')}>
                <Text className={auth_label}>Name</Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="e.g. Netflix"
                  placeholderTextColor="#9ca3af"
                  className={auth_input}
                />
              </View>

              {/* Price */}
              <View className={clsx(auth_field, 'mb-4')}>
                <Text className={auth_label}>Price</Text>
                <TextInput
                  value={price}
                  onChangeText={setPrice}
                  placeholder="0.00"
                  placeholderTextColor="#9ca3af"
                  keyboardType="decimal-pad"
                  className={auth_input}
                />
              </View>

              {/* Frequency */}
              <View className={clsx(auth_field, 'mb-4')}>
                <Text className={auth_label}>Frequency</Text>
                <View className={picker_row}>
                  {(['Monthly', 'Yearly'] as Frequency[]).map((f) => (
                    <Pressable
                      key={f}
                      onPress={() => setFrequency(f)}
                      className={clsx(picker_option, frequency === f && picker_option_active)}
                    >
                      <Text
                        className={clsx(
                          picker_option_text,
                          frequency === f && picker_option_text_active,
                        )}
                      >
                        {f}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* Category */}
              <View className={clsx(auth_field, 'mb-6')}>
                <Text className={auth_label}>Category</Text>
                <View className={category_scroll}>
                  {CATEGORIES.map((cat) => (
                    <Pressable
                      key={cat}
                      onPress={() => setCategory(cat)}
                      className={clsx(category_chip, category === cat && category_chip_active)}
                    >
                      <Text
                        className={clsx(
                          category_chip_text,
                          category === cat && category_chip_text_active,
                        )}
                      >
                        {cat}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* Submit */}
              <Pressable
                onPress={handleSubmit}
                disabled={!isValid}
                className={clsx(auth_button, !isValid && auth_button_disabled)}
              >
                <Text className={auth_button_text}>Add Subscription</Text>
              </Pressable>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default CreateSubscriptionModal;
