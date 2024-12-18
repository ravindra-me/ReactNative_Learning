import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCard = ({title}: {title: string}) => {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
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
            consequatur, quia animi repudiandae. Dignissimos?.
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
  },
  card: {
    width: 370,
    height: 360,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#F5EFFF',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {},
});

export default FancyCard;
