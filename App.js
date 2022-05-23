import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import SearchBarEl from './components/SearchBarEl';
import List from './components/List';
import { useEffect, useState } from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

const [search, setSearch] = useState("");
const [arrItems, filteredItems] = useState(list);

useEffect(()=>{
  
const filterArr = list.filter(item => item.name.toLowerCase().includes(search) || item.subtitle.toLowerCase().includes(search));
filteredItems(filterArr)

}, [search])



  const list = [
    {
      name: 'Prem BALAGOUROU',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Conseiller pôle emploi'
    },
    {
      name: 'Romain CHILOT',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'President du monde'
    },
    {
      name: 'Yannick KAMDEM KOUAM',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'PDG'
    },
    {
      name: 'Kelton Lebro',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Dev new gen'
    },
    {
      name: 'Arthur Quaid',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'The Irish Coffee'
    },
    {
      name: 'Aurore Sifflet',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Designer'
    },
    {
      name: 'JGReydet',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Dev'
    },
    {
      name: 'Alain The Master',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'GuyBrush'
    },
    {
      name: 'Michel the Absolute',
      avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Le true maitre du code'
    }
  ]

 

  return (
    // <SafeAreaProvider> pr faire fonctionner le code sur version web
    
    <View style={styles.container}>
       <Header/>
       <SearchBarEl search = {search} setSearch = {setSearch}/>
       <List search = {search} setSearch = {setSearch} list={arrItems}/>
    </View>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    padding : 8,
    backgroundColor: '#fff',
    marginTop : 35
  },
});
