import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Context} from '../services/context';

export const CheckBoxs = ({selectedCategory}) => {

  const [isSelected, setSelected] = useState(true);
  const drinksContext = useContext(Context);



  useEffect(() => {
    if (isSelected) {
      drinksContext.addStrCategory(selectedCategory);
    } else {

      drinksContext.changeStrCategory(selectedCategory);
    }
  }, [isSelected]);




  return (

    <View>
      <CheckBox
        title={selectedCategory}
        iconRight
        size={37}
        wrapperStyle={styles.container}
        uncheckedIcon="done"
        uncheckedColor="white"
        checkedColor="black"
        iconType="material"
        checkedIcon="done"
        checked={isSelected}
        textStyle={styles.textStrCategory}
        containerStyle={styles.box}
        onPress={() => setSelected(!isSelected)}
      />
    </View>
  );

  
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    borderColor:'white'
  },
  textStrCategory: {
    color: 'grey',
    fontWeight: 'normal',
  },
  container: {
    justifyContent: 'space-between',
  },
 
});
