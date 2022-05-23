import { SearchBar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Fontisto';
import { View } from 'react-native';
import { Divider } from '@rneui/base';



const SearchBarEl = ({search, setSearch}) => {
  
 

return (
<View>
 
<SearchBar
      
      containerStyle = {{position : "relative",backgroundColor : "white", borderBottomWidth: 0, marginBottom : 18, borderTopWidth : 0}}
      inputContainerStyle = {{backgroundColor : "lightgrey", paddingLeft : 10, paddingRight : 10}}
      leftIconContainerStyle={{position : "absolute", right : 4, flexDirection : "row-reverse", borderLeftWidth:2, width:50, height : 35}}
      placeholder="Ex.John Doe"
      searchIcon = {<View><Icon size = {19} name ="search"/></View>}
      onChangeText={(targetValue) => setSearch(targetValue)}
      value={search}
      rightIconContainerStyle = {{marginRight : 25}}
      
    />
  </View>


)
}

export default SearchBarEl