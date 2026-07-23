import "@/global.css"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { Image, View, Text, ScrollView } from "react-native";
import dayjs from "dayjs";
import images from "@/constants/images";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import { formatCurrency } from "@/lib/utils";
import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import SubscriptionCard from "@/components/SubscriptionCard";
import { useState } from "react";



const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="flex-1">
        <View className="home-header">
          <View className="home-user">
            <Image source={images.avatar} className="home-avatar" />
            <Text className="home-user-name">{HOME_USER.name}</Text>
          </View>
          <Image source={icons.add} className="home-add-icon" />
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <View className="home-balance-card">
            <Text className="home-balance-label">Balance</Text>
            <View className="home-balance-row">
              <Text className="home-balance-amount">
                {formatCurrency(HOME_BALANCE.amount)}
              </Text>
              <Text className="home-balance-date">
                {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
              </Text>
            </View>
          </View>

          <View>
            <ListHeading title="Upcoming" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 8 }}>
              {UPCOMING_SUBSCRIPTIONS.length > 0 ? (
                UPCOMING_SUBSCRIPTIONS.map((item) => (
                  <UpcomingSubscriptionCard key={item.id} {...item} />
                ))
              ) : (
                <Text className="home-empty-state">No upcoming renewals yet.</Text>
              )}
            </ScrollView>
          </View>

          <View className="mt-2">
            <ListHeading title="All Subscription" />

            {HOME_SUBSCRIPTIONS.length > 0 ? (
              <View className="gap-4 pb-4">
                {HOME_SUBSCRIPTIONS.map((item) => (
                  <SubscriptionCard
                    key={item.id}
                    {...item}
                    expanded={expandedSubscriptionId === item.id}
                    onPress={() =>
                      setExpandedSubscriptionId((currentId) => (currentId === item.id ? null : item.id))
                    }
                  />
                ))}
              </View>
            ) : (
              <Text className="home-empty-state">No subscriptions yet.</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}