import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation, Fontisto } from '@expo/vector-icons';


export class Card extends React.Component {
  render() {
    const { cardData, onClose } = this.props;
    return (
      <View className="absolute inset-0  bg-opacity-95 flex justify-center items-center w-full h-full mr-auto ml-auto">
        <View className="bg-gray-300   flex justify-center items-center p-5">

          <TouchableOpacity onPress={onClose} className="absolute top-5 right-5">
            <AntDesign name="close" size={20} color="white" />
          </TouchableOpacity>
          {cardData.icon === 'mongodb' ? <Fontisto name={cardData.icon} size={70} color="#E6B31E" /> : <MaterialCommunityIcons name={cardData.icon} size={70} color="#E6B31E" />}                
          <Text className="text-black text-3xl mb-5">{cardData.name}</Text>
          <Text className="text-black text-xl mb-3">{cardData.desc}</Text>

        </View>
      </View>
    );
  }
}

export default Card;