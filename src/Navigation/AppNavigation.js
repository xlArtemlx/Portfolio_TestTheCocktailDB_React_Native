import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



import { Drinks } from '../screens/Drinks';
import  {Filters}  from '../screens/Filters';


const Stack = createStackNavigator ();



function LogoTitle() {
    const navigation = useNavigation();
    return (
    <View style={styles.nav}>
        <Text style={styles.text}>Drinks</Text>
        <Icon
            style={styles.filters}
            name="filter"
            size={35}
            color="black"
            onPress={() => navigation.navigate('Filters')}
          />
    </View>
        
    );
  }


export const AppNavigation = () => {

    return ( 
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Drinks"
            screenOptions={{ gestureEnabled: true }}
            
            >
                <Stack.Screen
                    name="Filters"
                    component={Filters}
                    options={{
                    headerStyle: {
                        shadowOpacity: 1.2,
                        shadowRadius: 10,
                        borderBottomWidth: 3,
                        shadowColor:'black'
                      },
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },}}
                />
                <Stack.Screen
                    name="Drinks"
                    component={Drinks}
                    options={{  headerTitle: props => <LogoTitle {...props} /> ,
                    headerStyle: {
                        shadowOpacity: 1.2,
                        shadowRadius: 10,
                        borderBottomWidth: 3,
                        shadowColor:'black'
                      },}}
                />
             
                
            
            </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    filters: {
        transform: [{scaleX: -1}],
      },
    text: {
        fontWeight: 'bold',
        fontSize: 22,
      },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      
    },
   
  })

