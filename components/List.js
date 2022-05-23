import { ListItem, Avatar } from "@rneui/themed";
import { View, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

function List({list}) {


  return (
    <ScrollView>
 {
    list.map((l, i) => (
      <ListItem containerStyle = {{height : 80, borderWidth : 1, borderColor : "lightgrey", padding : 1}} key={i} bottomDivider>
        <Avatar avatarStyle ={{borderRadius : 50}} source={{uri: l.avatarUrl}}/>
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        {/* <ListItem.Chevron size={70}/> */}
        <Icon name = "chevron-thin-right" size = {30} style = {{color : "lightgrey"}}/>
      </ListItem>
    ))
  }

    </ScrollView>
  )
}

export default List