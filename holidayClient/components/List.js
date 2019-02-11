import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';

export default class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    const events = require('../db.json').events;
    this.setState({ events })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
          />
      </View>
    )
  }
}

// import ListItem from './ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue'
  },
});

// export default class List extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       list: [],
//       listItem: {item: '', }
//     }
//   }

//   handleAddPress = (e) => {
//     e.preventDefault()
//     let listArray = this.state.list
//     listArray.push(this.state.listItem)
//     this.setState({list: listArray})
//   }

//   render() {
//     return(
//       <View style={styles.container}>
//         <Text>This is a Ho-Ho-Holiday List!</Text>
//         <TextInput 
//           style={{height: 30, width: 120, backgroundColor: '#fff', textAlign: 'center'}}
//           placeholder="Add to your list!"
//           value={this.state.list}
//         />
//         {this.state.list.map( (item, index) => {
//           return(
//             <ListItem item={item} key={index} 
//             // deleteItem={this.deleteItem} checkItem={this.checkItem} 
//             />
//           )
//         })}
//         <TouchableHighlight
//           onPress={this.handleAddPress}
//         >
//           <Text style={styles.buttonText}>Add</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }
