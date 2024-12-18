import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openLink = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <View>
      <Text style={styles.heading}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in React React 19</Text>
        </View>
        <Image
          source={{
            uri: 'https://blkbox-machinelearning.s3.us-west-1.amazonaws.com/assets/thumbnails/act_2747337658924217/461937171_1005418484686601_1292627190477725029_n.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            minus porro cupiditate nobis pariatur eius omnis corporis suscipit
            reiciendis quisquam fugit modi iste accusamus quos eum magni
            perspiciatis perferendis architecto.
          </Text>
        </View>
        <View style={styles.cardFooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openLink('https://react.dev/blog/2024/12/05/react-19')
            }>
            <Text style={styles.socialLink}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openLink('https://react.dev/blog/2024/12/05/react-19')
            }>
            <Text style={styles.socialLink}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  card: {
    height: 320,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#D9EAFD',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  headingContainer: {
    marginVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
  },
  cardImage: {
    height: 140,
    objectFit: 'cover',
  },
  cardBody: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  cardFooterContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});

export default ActionCard;
