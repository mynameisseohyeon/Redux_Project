import {View, Text, StyleSheet} from 'react-native';

function Main() {
  return (
    <>
      <View>
        <Text style={[styles.Header]}>Home</Text>
        <View style={[styles.Collection]}>
          <Text style={[styles.colMainText]}>New Collection</Text>
          <Text style={[styles.colSubText]}>Discount 50% </Text>
          <Text style={[styles.colSubText]}>for the first transaction</Text>
          <Text style={[styles.shopNow]}>shop now</Text>
          <i class="fi fi-rr-picture"></i>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: 50,
    backgroundColor: '#999',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
  },
  Collection: {
    width: 400,
    height: 200,
    backgroundColor: '#777',
    right: -5,
    top: 20,
    position: 'relative',
    borderRadius: 10,
    padding: 20,
  },
  colMainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    paddingBottom: 10,
  },
  colSubText: {
    color: '#999',
    fontSize: 20,
    paddingBottom: 10,
  },
  shopNow: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Main;
