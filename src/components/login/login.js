import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TextInput,TouchableOpacity} from 'react-native';

export default class login extends Component{

	constructor(){
    super();

    this.state = {
      username: "",
      password: "",
      error: "",
      showProgress: false,
    }
  }

	onLoginPressed(){
		if(this.state.username ==="admin" && this.state.password ==="admin"){
			this.props.navigator.push({
		      name: 'home'
		    });
		}
	}
	render(){
		return(
			<View style={styles.wrapper}>
				<View style={styles.container}>
				<TextInput 
				onChangeText={ (text)=> this.setState({username: text}) }
				placeholder="username"
				placeholderTextColor='#131313'
				style={styles.input}/>

				<TextInput 
				onChangeText={ (text)=> this.setState({password: text}) }
				placeholder="password"
				placeholderTextColor='#131313'
				secureTextEntry
				style={styles.input}/>

				<TouchableOpacity onPress={this.onLoginPressed.bind(this)} style={styles.buttonContainer}>
				<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				<View style={styles.regContainer}>
				<Text style={styles.signupText}>
				<Text >DONT HAVE AN ACCOUNT?  </Text>
				<Text style={styles.registerText}>Register</Text>
				</Text>
				</View>
				</View>
			</View>


		);
	}
}

const styles=StyleSheet.create({
	container:{
		padding:20
	},
	signupText:{
		paddingTop:10
	},
	regContainer:{
		justifyContent:'center',
		alignItems:'center'
	},
	registerText:{
		fontSize: 20,
    	fontWeight: 'bold'
	},
	wrapper:{
		backgroundColor:'#afdbf5',
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	input:{
		height:40,
		width:330,
		backgroundColor:'rgba(255,255,255,0.7)',
		marginBottom:10,
		color:'#131313',
		paddingHorizontal:10
	},
	buttonContainer:{
		backgroundColor:'#2980b9',
		paddingVertical:10
	},
	buttonText:{
		textAlign:'center',
		color:'#FFFFFF',
		fontWeight:'700'
	}
});