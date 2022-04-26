import React,{Component} from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from 'react-native';
import Header from 'react-native-elements'

export default class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            isSearchPressed: false,
            word  : "Loading...",
            lexicalCategory: '',
            examples: [],
            definition: '',
        }
    }

    getWord=(word)=>{
        var searchKeyword=word.toLowerCase()
        var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
        //console.log(url)
        return fetch(url)
        .then((data)=>{
            if(data.status===200)
        {
            return data.json()
        }
        else
        {
            return null
        }
        })
        .then((response)=>{

            var responseObject = response

            if(responseObject)
            {
                var wordData = responseObject.definitions[0]

                var definition=wordData.description
                var lexicalCategory=wordData.wordType

                this.setState({
                    "word" : this.state.text,
                    "definition": definition,
                    "lexicalCategory": lexicalCategory
                })
            }
            else
            {
                this.setState({
                    "word": this.state.text,
                    "definition": "Not Found",
                })
            }
        })
        

}
}

