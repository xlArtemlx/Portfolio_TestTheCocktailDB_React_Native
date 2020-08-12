import React,{useState} from 'react'
import {View,Text,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';


 const Post = ({category,updateData}) =>  {
     const navigation = useNavigation();

    const { strDrink,strDrinkThumb,idDrink } = category
    const [load,setLoad] = useState(true)

    console.log(category)

    


    return(
        <View>
           <Text>{strDrink}</Text>
           <Image
                source={strDrinkThumb}
            />
           <Text onPress= { ()=> navigation.navigate('Filters')}>{idDrink}</Text>
           
        </View>
    )

}

export default Post;