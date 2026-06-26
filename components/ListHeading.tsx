import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { list_action, list_action_text, list_head, list_title} from '@/lib/utils';
import {ListHeadingProps} from "@/src/type";

const ListHeading = ({ title }: ListHeadingProps) => {
    return (
        <View className={list_head}>
            <Text className={list_title}>{title}</Text>
            <TouchableOpacity className={list_action}>
                <Text className={list_action_text}>View All</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ListHeading
