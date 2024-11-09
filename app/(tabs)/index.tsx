import Menu from '@/components/Menu';
import { Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Mexican Restaurant</Text>
      <Text style={{ fontSize: 16, marginVertical: 16 }}>
        Welcome to our Mexican restaurant. Enjoy our delicious and authentic dishes!
      </Text>
      <Menu />
    </View>
  )
}