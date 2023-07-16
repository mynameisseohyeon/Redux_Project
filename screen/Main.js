import {View, Text, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

function Main() {
  return (
    <>
      <View>
        <Text style={[styles.Header]}>Home</Text>
        <View style={[styles.Collection]}>
          <View>
            <Text style={[styles.colMainText]}>New Collection</Text>
            <Text style={[styles.colSubText]}>Discount 50% </Text>
            <Text style={[styles.colSubText]}>for the first transaction</Text>
            <Text style={[styles.shopNow]}>shop now</Text>
          </View>
          {/* <View>
            <Icon name="collections" size={32} color="white" />
          </View> */}
        </View>

        <View style={[styles.Brand]}>
          <Text style={[styles.BrandMainText]}>Brand</Text>
        </View>

        <View style={[styles.NewArrival]}>
          <Text style={[styles.NewArrivalText]}>New Arrival</Text>
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
    marginBottom: 40,
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
  Brand: {
    width: '100%',
    height: 180,
    backgroundColor: '#999',
    position: 'relative',
    padding: 20,
    marginBottom: 10,
  },
  BrandMainText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  NewArrival: {
    width: '100%',
    height: 180,
    backgroundColor: '#999',
    position: 'relative',
    padding: 20,
  },
  NewArrivalText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Main;
