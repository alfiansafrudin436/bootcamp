import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends Component {
  data= { 
          "name": "Alfian Safrudin", 
          "address": { 
                      "hometown": "Kokap", 
                      "city": "Kulon Progo", 
                      "provins": "Yogyakarta" 
                    }, 
          "birth": { 
                    "day": 14,
                    "month": "Juni", 
                    "year": 1998 
                  }, 
          "jobs": [ 
            { "title": "Enginer", "tech": "React Native" }, 
            { "title": "Trainer", "tech": "Mobile , Backend" } ],
          "old": 30 
        }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.txtTitle}>Name</Text>
          </View>
          <Text style={styles.txtData}>{this.data.name}</Text>

          <View style={styles.containerTitle}>
            <Text style={styles.txtTitle}>Address</Text>
          </View>
          <Text style={styles.txtData}>{this.data.address.hometown}, {this.data.address.city}, {this.data.address.provins}</Text>

          <View style={styles.containerTitle}>
            <Text style={styles.txtTitle}>Date of Birth</Text>
          </View>
          <Text style={styles.txtData}>{this.data.birth.day}, {this.data.birth.month}, {this.data.birth.year}</Text>

          <View style={styles.containerTitle}>
            <Text style={styles.txtTitle}>Jobs</Text>
          </View>
          <View>
            <Text style={styles.txtData}>1. {this.data.jobs[0].title} {this.data.jobs[0].tech}</Text>
            <Text style={styles.txtData}>2. {this.data.jobs[1].title} {this.data.jobs[1].tech}</Text>
          </View>

          <View style={styles.containerTitle}>
            <Text style={styles.txtTitle}>Old</Text>
          </View>
          <Text style={styles.txtData}>{this.data.old}</Text>
      </View>

    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    padding:'10%',
    justifyContent:'center'
  },
  containerTitle:{
    width:'100%',
    paddingLeft:10,
    backgroundColor:'#6ED7FB'
  },
  txtTitle:{
    fontSize:18,
    color:'white'
  },
  txtData:{
    paddingLeft:20,
    fontSize:16,
    fontWeight:'500',
  }
})
