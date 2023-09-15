import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,  FlatList ,Alert,StyleSheet} from 'react-native';
import axios from 'axios';
import { Button } from '@ant-design/react-native';
import { Card, ListItem } from 'react-native-elements';

const Search = ({navigation}) => {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [productId]);
const vae=productId;
  const fetchData = () => {
    if(vae>0 && vae<=20){
    setIsLoading(true);

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProductData([response.data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
 }else{Alert.alert(`Product id ${vae} is empty`)

 }};

  const renderItem = ({ item }) => (
    <View style={{ marginTop:20 ,padding:10,backgroundColor: '#BECEE7',}}>
      <Card >
        <Card.Title    >{item.title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: item.image }} />
        <Text style={{ marginVertical: 10 }}>{item.description}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Price: ${item.price}</Text>
          <Text>Category: {item.category}</Text>
        </View>
       </Card >
    </View>
  );
const Limipage=()=>{
    navigation.navigate('LimitScreen')
}
  return (
    <View style={{ flex: 1, padding: 16,backgroundColor:'#BECEE7' }}>
      <Text style={{ fontSize:20,marginTop:20 ,marginLeft:110}}>Enter Product ID:</Text>
      <TextInput
        style={{
          backgroundColor:'black',
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
          borderRadius:9,
          width:250,
          marginLeft:50,
        
        }}
        onChangeText={(text) => setProductId(text)}
        value={productId}
        keyboardType="numeric"
      />
      <Button style={{ borderRadius:20,width:150,backgroundColor:'white' ,marginLeft:100,marginTop:10}}  onPress={fetchData} >Search</Button>
     
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
            <View >
              {<Button style={{ borderRadius:20,width:150,backgroundColor:'white' ,marginTop:80,marginLeft:100}} onPress={Limipage} >Next</Button>}
              
            </View>
          }

      />
    </View>
  );
};

export default Search;
