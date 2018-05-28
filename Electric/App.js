import React, { Component } from 'react';
import {
  Platform, Keyboard,
  StyleSheet, AsyncStorage,
  Text, TextInput, Button,
  View, StatusBar
} from 'react-native';

const instructions = Platform.select({
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      csmoi:'', cscu:''
    }
  }
  saveData =()=>{
    const {csmoi, cscu, kq} = this.state;

    let myArray={
      csmoi: csmoi,
      cscu: cscu,
      kq: csmoi - cscu
    }

    AsyncStorage.setItem('myArray',
      JSON.stringify(myArray));

    Keyboard.dismiss();
    alert(csmoi - cscu);
  }
  showData = async()=>{
    let myArray = await AsyncStorage.getItem('myArray');
    let d = JSON.parse(myArray);
    alert( 'Số điện tiêu thụ là:' + ' ' + d.kq);
  }

  render() {
    return (
      <View style={styles.container}>

         <StatusBar
           backgroundColor="#7CBEF6"
           barStyle="light-content"
          />

        <Text style={styles.instructions}>
          Chỉ số điện mới
        </Text>

        <TextInput
        placeholder='Nhập chỉ số điện mới'
        style={styles.input}
        onChangeText={csmoi => this.setState({csmoi})}
        />

        <Text style={styles.instructions}>
          Chỉ số điện cũ
        </Text>

        <TextInput
        placeholder='Nhập chỉ số điện cũ'
        style={styles.input}
        onChangeText={cscu => this.setState({cscu})}
        />

        <Button
        title='Số điện tiêu thụ'
        onPress={this.saveData}
        color='green'/>

        <Button
        color='magenta'
        onPress={this.showData}
        title='Hiển thị dữ liệu'
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    backgroundColor: '#3498db',
    padding: 10
  },
  input: {

    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#ccc',
    margin: 10,
  },

});
