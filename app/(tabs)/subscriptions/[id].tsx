import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

const SubscriptionDetails = () => {
  const {id} = useLocalSearchParams<{id: string}>();  

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Subscription Details: {id}</Text>
      <Link href="/" className="mt-4 rounded bg-primary text-white px-4 py-2 text-center">Go Back</Link>
    </View>
  )
}

export default SubscriptionDetails
