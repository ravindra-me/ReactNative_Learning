import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.heading}>FatedCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Gray</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>White</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    borderRadius: 5,
  },
  card1: {
    backgroundColor: 'lightgray',
  },
  card2: {
    backgroundColor: 'green',
  },
  card3: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default FlatCard;
