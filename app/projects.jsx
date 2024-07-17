import { Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { Linking } from 'react-native';


const Projects = ({ title, picurl, giturl, desc }) => {
  const openGitHub = () => {
    if (giturl) {
      Linking.openURL(giturl);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 items-center justify-center p-4">
        <Image
          className="h-52 w-full"
          style={{ resizeMode: "contain" }}
          source={{ uri: picurl }}
        />
        <Text className="text-yellow-500 mt-4 text-2xl">{title}</Text>
        <Text className="text-white mt-2">{desc}</Text>
        {giturl && (
          <TouchableOpacity onPress={openGitHub}>
            <Text className="text-blue-500 mt-4 underline">View on GitHub</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Projects;
