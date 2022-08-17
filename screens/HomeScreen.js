import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, SparklesIcon as SparklesIconOutline, UserIcon } from "react-native-heroicons/outline";
import { ScrollView, TextInput } from 'react-native-web';
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [])
  return (
    <SafeAreaView className=" bg-white pt-3 ">
      {/* Header */}
      <View className=" flex-row pb-3 items-center mx-4 space-x-2">
        <Image
           source={{uri:"/favicon-32.png"}}
           className= "h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
            <Text className="text-gray-300 text-xs font-bold">Deliver Now!</Text>
            <Text className="text-lg font-bold">Current Location
                <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"/>
      </View>
      {/* Search */}
      <View className="flex-row space-x-2 mx-4 items-center pb-3">
        <View className="bg-gray-200 flex-1 flex-row p-2 space-x-2 rounded-md">
            <SearchIcon size={25}/>
            <TextInput placeholder="Search..."
            keyboardType="default"/>
        </View>
        <AdjustmentsIcon size={25} color="#00CCBB"/>
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100" style={styles.scrollContainer}>
        {/* categories */}
        <Categories/>
        {/* Featured Rows */}
        <FeaturedRow id="12"
            title="Featured"
            description="Paid placements from our partners"
            featuredCategory="featured"
        />
        <FeaturedRow id="123"
            title="Tasty Discount"
            description="Top Discount offers on Food!!!"
            featuredCategory="discounts"
        />
        <FeaturedRow id="1234"
            title="Offers near you!"
            description="Why not support your local restraunt tonight!"
            featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    scrollContainer: {
      paddingBottom: 100,
    },
  });

export default HomeScreen