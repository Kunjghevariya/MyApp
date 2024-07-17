import { AntDesign, Entypo, Fontisto, Foundation, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Image, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";

import Projects from './projects';

export default function Index() {
  const [showCard, setShowCard] = useState(false);
  const [cardData, setCardData] = useState({ name: "", desc: "", project: "", icon: "" });

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
    { 
      desc: "A personal website built using HTML and CSS.", 
      title: 'My Website', 
      picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721066166/Screenshot_2024-07-15_at_11.14.12_PM_qmtpap.png", 
      giturl: "https://github.com/Kunjghevariya/My-Website" 
    },
    { 
      desc: 'A stock market portfolio management application built with React.js, Node.js, Express.js, and MongoDB.', 
      title: "Stockmarket Portfolio", 
      picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721066166/Screenshot_2024-07-15_at_11.17.45_PM_ec6p4o.png", 
      giturl: "https://github.com/Kunjghevariya/stockmarket-frontend" 
    },
    { 
      desc: 'A simple reminder application built using React.js.', 
      title: "Reminder", 
      picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721066166/Screenshot_2024-07-15_at_11.14.30_PM_cv6wu1.png", 
      giturl: "https://github.com/Kunjghevariya/reminder" 
    },
    { 
      desc: 'A weather application built using JavaScript, CSS, and HTML.', 
      title: 'Weather App', 
      picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721068319/Screenshot_2024-07-16_at_12.01.24_AM_xelbqz.png", 
      giturl: "https://github.com/Kunjghevariya/Weather-App" 
    },
    { 
      desc: 'A counter application built using JavaScript, CSS, and HTML.', 
      title: 'Counter App', 
      picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721069070/Screenshot_2024-07-16_at_12.12.53_AM_rfj1gt.png", 
      giturl: "https://github.com/Kunjghevariya/count-down" 
    },
    { 
      desc: 'A Netflix clone built using JavaScript, CSS, and HTML.', 
      title: 'Netflix Clone', 
      picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721069074/Screenshot_2024-07-16_at_12.13.45_AM_umry32.png", 
      giturl: "https://github.com/Kunjghevariya/Netflix-clone" 
    },
    { 
      desc: 'A Prime Video clone built using JavaScript, CSS, and HTML.', 
      title: 'Prime Clone', 
      picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721069079/Screenshot_2024-07-16_at_12.14.02_AM_umnvzu.png", 
      giturl: "https://github.com/Kunjghevariya/Prime-Clone" 
    },
    { 
      desc: 'A J.A.R.V.I.S. personal assistant built using Python.', 
      title: 'J.A.R.V.I.S', 
      picurl: "https://res.cloudinary.com/dqp45rfrn/image/upload/v1721069437/J.A.R.V.I.S._v9tldv.webp", 
      giturl: "https://github.com/Kunjghevariya/J.A.R.V.I.S" 
    }
  ];
  

  const skillsData = [
    { name: 'C', desc: 'C Language', project: 'no project', icon: 'language-c' },
    { name: 'C++', desc: 'C++ Language', project: 'no project', icon: 'language-cpp' },
    { name: 'Java', desc: 'Java Language', project: 'no project', icon: 'language-java' },
    { name: 'JavaScript', desc: 'JavaScript Language', project: 'no project', icon: 'language-javascript' },
    { name: 'CSS', desc: 'CSS Language', project: 'no project', icon: 'language-css3' },
    { name: 'HTML', desc: 'HTML Language', project: 'no project', icon: 'language-html5' },
    { name: 'React', desc: 'React Framework', project: 'no project', icon: 'react' },
    { name: 'Node.js', desc: 'Node.js Framework', project: 'no project', icon: 'nodejs' },
    { name: 'MongoDB', desc: 'MongoDB Database', project: 'no project', icon: 'mongodb' },
    { name: 'Python', desc: 'Python Language', project: 'no project', icon: 'language-python' },
    { name: 'TypeScript', desc: 'TypeScript Language', project: 'no project', icon: 'language-typescript' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-black">
            <TouchableOpacity className="flex-1 cursor-default" onPress={() => setShowCard(false)}>

      <ScrollView className="bg-black">
        <View className="bg-black flex-1 flex-col md:flex-row h-full mt-10">
          <View className="w-full md:w-2/3 justify-center m-5 p-4 md:pl-10">
            <Text className="text-5xl text-yellow-500 md:text-9xl mb-4 md:mb-8">Hyy,</Text>
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
            {skillsData.map((skill, index) => (
              <TouchableOpacity key={index} onPress={() => {
                setCardData(skill);
                setShowCard(true);
              }}>
                {skill.icon === 'mongodb' ? <Fontisto name={skill.icon} size={70} color="#E6B31E" /> : <MaterialCommunityIcons name={skill.icon} size={70} color="#E6B31E" />}                
              </TouchableOpacity>
            ))}
          </View>
          {showCard && <Card cardData={cardData} onClose={() => setShowCard(false)} />}
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
</TouchableOpacity>
    </SafeAreaView>
  );
}
