import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator();

// Define each menu category as a separate screen component
function Appetizers() {
  return (
    <ScrollView style={styles.scrollContainer}> 
        <View style={styles.container}>
        <Text style={styles.text}>Appetizers Menu</Text>
        <Text style={styles.itemText}>Spring Rolls</Text>
        <Image
            style={styles.image}view
            source={{uri: 'https://images.unsplash.com/photo-1602375850899-c389c4a0fc70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
            />
        <Text style={styles.itemText}>Nachos</Text>
        <Image
            style={styles.image}
            source={{uri: 'https://images.unsplash.com/photo-1619604107557-b5321217aee7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
            />
        <Text style={styles.itemText}>Garlic Bread</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
            />
        </View>
    </ScrollView>
  )
}

function MainCourses() {
  return (
    <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
        <Text style={styles.text}>Main Courses Menu</Text>
        <Text style={styles.itemText}>Grilled Chicken</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://images.unsplash.com/photo-1643594462181-7667928d072e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')} 
            />
        <Text style={styles.itemText}>Beef Steak</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://plus.unsplash.com/premium_photo-1669261882102-8f51c8b113c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
        />
        <Text style={styles.itemText}>Spaghetti Carbonara</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://images.unsplash.com/photo-1590576502976-a7b6cd63f4dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
        />
        </View>
    </ScrollView>
  )
}

function Desserts() {
  return (
    <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
        <Text style={styles.text}>Desserts Menu</Text>
        <Text style={styles.itemText}>Cheesecake</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://images.unsplash.com/photo-1642588355539-1fa4ebb910c6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
        />
        <Text style={styles.itemText}>Chocolate Lava Cake</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
        />
        <Text style={styles.itemText}>Ice Cream Sundae</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://plus.unsplash.com/premium_photo-1664392060458-fb1908b79323?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
        />
        </View>
    </ScrollView>
  );
}

function Drinks() {
  return (
    <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
        <Text style={styles.text}>Drinks Menu</Text>
        <Text style={styles.itemText}>Mojito</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://plus.unsplash.com/premium_photo-1722194069219-16ec49c08625?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
        />
        <Text style={styles.itemText}>Lemonade</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://images.unsplash.com/photo-1629380072258-3d0d04a6f65a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel=""
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
        />
        <Text style={styles.itemText}>Iced Coffee</Text>
        <Image 
            style={styles.image}
            source={{uri: 'https://plus.unsplash.com/premium_photo-1663933534262-5de49eb4f59f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            resizeMode="cover"
            accessibilityLabel="Drinkes - Iced Coffee"
            blurRadius={0}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
        />
        </View>
    </ScrollView>
  );
}

// Main Tab Component
export default function RestaurantMenuTabs() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#1e8dc0',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#f5f5f5' },
        }}
      >
        <Tab.Screen name="Appetizers" component={Appetizers} />
        <Tab.Screen name="Main Courses" component={MainCourses} />
        <Tab.Screen name="Desserts" component={Desserts} />
        <Tab.Screen name="Drinks" component={Drinks} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: 'grey', // Set the color of item text
    marginBottom: 10,
  },
  image: {
    width: 220, 
    height: 350,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
  scrollContainer: {
    backgroundColor: 'black', // Set background color for the whole scroll view
  },
});
