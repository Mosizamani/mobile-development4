import Menu from '@/components/Menu';
import { Text, View, StyleSheet, ScrollView } from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Mexican Restaurant</Text>
          <Text style={styles.description}>
            Welcome to our Mexican restaurant. Enjoy our delicious and authentic dishes!
          </Text>
          <Menu />
        </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginVertical: 16,
  },
});