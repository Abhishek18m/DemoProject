import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

const IntroSlider = ({navigation}) => {
  const slides = [
    {
      key: 's1',
      text: 'Best Recharge offers',
      title: 'Mobile Recharge',
      image: {
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
      },
      backgroundColor: '#20d2bb',
    },
    {
      key: 's2',
      title: 'Flight Booking',
      text: 'Upto 25% off on Domestic Flights',
      image: {
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
      },
      backgroundColor: '#febe29',
    },
    {
      key: 's3',
      title: 'Great Offers',
      text: 'Enjoy Great offers on our all services',
      image: {
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
      },
      backgroundColor: '#22bcb5',
    },
    {
      key: 's4',
      title: 'Best Deals',
      text: ' Best Deals on all our services',
      image: {
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
      },
      backgroundColor: '#3395ff',
    },
    {
      key: 's5',
      title: 'Bus Booking',
      text: 'Enjoy Travelling on Bus with flat 100% off',
      image: {
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
      },
      backgroundColor: '#f6437b',
    },
    {
      key: 's6',
      title: 'Train Booking',
      text: ' 10% off on first Train booking',
      image: {
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
      },
      backgroundColor: '#febe29',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text>{item.title}</Text>
        <Image style={{width: 200, height: 200}} source={item.image} />
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={() => navigation.navigate('HomeScreen')}
      showSkipButton={true}
      onSkip={() => navigation.navigate('HomeScreen')}
    />
  );
};

export default IntroSlider;

const styles = StyleSheet.create({});
