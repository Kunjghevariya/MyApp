import React from "react";
import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import Projects from './projects';
import { Linking } from 'react-native';
import { AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation, Fontisto } from '@expo/vector-icons';



export default function Index() {

  const openInstagram = () => {
    Linking.openURL('https://instagram.com/kunj.ghevariya?utm_medium=copy_linkyAhXlheYKHT5PC2kQjjh6BAgGEAI&usg=AOvVaw05h0JDuovVImEiLeJDBQa-');
  };

  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/kunjghevariya/');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/Kunjghevariya');
  };

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/kunj-ghevariya-165722128/');
  };

  const openYouTube = () => {
    Linking.openURL('https://youtube.com/channel/UCYOddEPqnXROEwwEZyt4-PA');
  };

  const projectsData = [
    { desc: "using html and css", title: 'My Website', picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721066166/Screenshot_2024-07-15_at_11.14.12_PM_qmtpap.png", giturl: "https://github.com/Kunjghevariya/My-Website" },
    { desc: 'using reactjs , nodejs, expressjs, mongodb', title: "Stockmarket Portfolio", picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721066166/Screenshot_2024-07-15_at_11.17.45_PM_ec6p4o.png", giturl: "https://github.com/Kunjghevariya/stockmarket-frontend" },
    { desc: 'using reactjs', title: "Reminder", picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721066166/Screenshot_2024-07-15_at_11.14.30_PM_cv6wu1.png", giturl: "https://github.com/Kunjghevariya/reminder" },
    { desc: 'using javascript, css, html', title: 'Weather App', picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721068319/Screenshot_2024-07-16_at_12.01.24_AM_xelbqz.png", giturl: "https://github.com/Kunjghevariya/Weather-App" },
    { desc: 'using javascript, css, html', title: 'Counter App', picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721069070/Screenshot_2024-07-16_at_12.12.53_AM_rfj1gt.png", giturl: "https://github.com/Kunjghevariya/count-down" },
    { desc: 'using javascript, css, html', title: 'Netflix Clone', picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721069074/Screenshot_2024-07-16_at_12.13.45_AM_umry32.png", giturl: "https://github.com/Kunjghevariya/Netflix-clone" },
    { desc: 'using javascript, css, html', title: 'Prime Clone', picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721069079/Screenshot_2024-07-16_at_12.14.02_AM_umnvzu.png", giturl: "https://github.com/Kunjghevariya/Prime-Clone" },
    { desc: 'using python', title: 'J.A.R.V.I.S', picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721069437/J.A.R.V.I.S._v9tldv.webp", giturl: "https://github.com/Kunjghevariya/J.A.R.V.I.S" }
  ];

  return (
    <ScrollView className="bg-black">
      <View className="bg-black flex-1 flex-col md:flex-row h-full mt-10">
        <View className="w-full md:w-2/3 justify-center m-5 p-4 md:pl-10">
          <Text className="text-5xl text-yellow-500 md:text-9xl mb-4 md:mb-8 font">Hyy,</Text>
          <Text className="text-5xl text-yellow-500 md:text-9xl mb-4 md:mb-8">I Am Kunj</Text>
          <Text className="text-lg text-white md:text-2xl mb-4 md:mb-8">
            Skilled in C, C++, Java, JavaScript, HTML, and CSS. Experienced
            with Node.js, React.js, React Native, Express.js, Tailwind CSS,
            NativeWind, and MongoDB. Dedicated to building dynamic and
            user-friendly applications.
          </Text>
          <View className="flex flex-row gap-5">
            <TouchableOpacity onPress={openInstagram}><AntDesign name="instagram" size={24} color="#E6B31E" /></TouchableOpacity>
            <TouchableOpacity onPress={openFacebook}><Entypo name="facebook" size={24} color="#E6B31E" /></TouchableOpacity>
            <TouchableOpacity onPress={openGitHub}><Foundation name="social-github" size={24} color="#E6B31E" /></TouchableOpacity>
            <TouchableOpacity onPress={openLinkedIn}><Foundation name="social-linkedin" size={24} color="#E6B31E" /></TouchableOpacity>
            <TouchableOpacity onPress={openYouTube}><SimpleLineIcons name="social-youtube" size={24} color="#E6B31E" /></TouchableOpacity>
          </View>
        </View>
        <View className="flex-1 justify-center items-center p-4 mb-0 mt-auto">
          <Image
            style={{ width: 450, height: 440, resizeMode: "contain" }}
            source={{
              uri: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721072278/Untitled_3_jurzsk.jpg",
            }}
          />
        </View>
      </View>
      <View>
        <Text className="text-gray-300 text-5xl m-10">Skills :</Text>
        <View className="m-10 flex-row gap-10 flex-wrap justify-center items-center md:w-1/2 md:mr-auto md:ml-auto">
          <MaterialCommunityIcons name="language-c" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="language-cpp" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="language-java" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="language-javascript" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="language-css3" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="language-html5" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="react" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="nodejs" size={70} color="#E6B31E" />
          <Fontisto name="mongodb" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="language-python" size={70} color="#E6B31E" />
          <MaterialCommunityIcons name="language-typescript" size={70} color="#E6B31E" />
        </View>
        <View className="text-white m-10">
          <Text className="text-gray-300 text-5xl mb-10">Projects :</Text>
          <View className="flex-row flex-wrap justify-center">
            {projectsData.map((project, index) => (
              <View key={index} className="w-full md:w-1/3 p-2">
                <Projects {...project} />
              </View>
            ))}
          </View>
        </View>
      </View>
      <View className="text-white m-10">
        <Text className="text-gray-300 text-5xl mb-10">About Us :</Text>
        <Text className="text-lg text-white mb-4 md:text-2xl">
          Welcome to my personal portfolio! I'm Kunj Ghevariya, a passionate developer
          with expertise in a variety of programming languages and frameworks. I am committed
          to creating efficient and innovative solutions that make a difference.
          Through this platform, I share my projects, skills, and journey in the tech world.
          Stay connected and explore the diverse range of projects I have worked on.
        </Text>
        <Text className="text-lg text-white mb-4 md:text-2xl">
          For collaborations, feel free to reach out via my social media channels or check out
          my GitHub for more insights into my work. Thank you for visiting!
        </Text>
        <Text className="text-lg text-yellow-500 mb-4 md:text-2xl">Email : kunj.ghevariya@gmail.com</Text>
      </View>
    </ScrollView>
  );
}
