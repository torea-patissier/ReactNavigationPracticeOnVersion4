import { View, Image, FlatList, Text, Pressable } from 'react-native'
import React, {useEffect} from 'react'
import { globalStyle } from '../styles/AppStyles';
//Global style est le fichier CSS passé depuis AppStyles

const Home = ({navigation}) => {
    /**
     * navigation est un objet du props envoyé par Apps.js
     * Ce props est récupéré de StackNav dans HomeStack
     */

    // console.log(props); 

    const DATA = [
      {
          id: '1',
          name: 'Emma',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam',
          country: 'Allemagne',
          totalImg: 3,
          img: 'https://cdn.pixabay.com/photo/2017/12/17/08/44/girl-3023853_960_720.jpg',
      },
      {
          id: '2',
          name: 'Marcel',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam',
          country: 'France',
          totalImg: 5,
          img: 'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg',
      },
      {
          id: '3',
          name: 'Diana',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam',
          country: 'Espagne',
          totalImg: 4,
          img: 'https://cdn.pixabay.com/photo/2019/08/13/05/39/girl-4402542_960_720.jpg',
      },
      {
          id: '4',
          name: 'Diego',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam',
          country: 'Italie',
          totalImg: 5,
          img: 'https://cdn.pixabay.com/photo/2017/03/24/18/59/face-2171923_960_720.jpg',
      },
  ];

  const renderProfile = ({item}) => {
    /**
     * Après avoir log data, on retrouve un objet qui contient des objets dont item
     * item me permet d'accéder aux différentes propriétés des items du tableau DATA
     */
    return(
      <Pressable
      style={globalStyle.container}
      onPress={()=> navigation.navigate('Portfolio',item)}
      /**
       * J'envoie les informations de item en paramètre à la page Portfolio
       */
      >
        <Text style={globalStyle.titleText}>{item.name} | {item.country}</Text>
        <Image
        source = {{ uri: item.img }}
        style={globalStyle.imgStyle}
        />
        <View>
          <Text style={globalStyle.descHome}>{item.desc}</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <View style={globalStyle.container}>
      <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={renderProfile}
      />

    </View>
  )
}

export default Home