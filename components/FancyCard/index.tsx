import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.heading}>Flexbox & Layout</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://blkbox-machinelearning.s3.amazonaws.com/Images/act_311156104863527/BLKBOX_20231222_HRB-15_Florida_ST3_Violet2_Offer_Money-V8_S1080x1080.png',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Violet Offer</Text>
          <Text style={styles.cardSubtitle}>$15.00</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            enim id excepturi minima repellendus fugiat quasi praesentium
            deleniti, inventore at culpa non reprehenderit deserunt ducimus
            consequatur, quia animi repudiandae. Dignissimos?
          </Text>
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
    marginBottom: 10,
  },
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {},
  cardSubtitle: {},
  cardDescription: {},
});

export default FancyCard;
