import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'react-native-axios';

const Api = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const [data, setdata] = useState([]);


  const getApi = () => {
    axios({
      method: 'GET',
      url: `${baseUrl}/posts`,
    })
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };


  const postApi = () => {
    axios({
      method: 'POST',
      url: `${baseUrl}/posts`,
      data: {
        id: 101,
        title: 'new title',
        body: 'new body of the data', 
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  
  const patchApi = () => {
    axios({
      method: 'PATCH',
      url: `${baseUrl}/posts/16`,
      data: {
        title: 'updated title',
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const deleteApi = () => {
    axios({
      method: 'DELETE',
      url: `${baseUrl}/posts/16`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }; 

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>API</Text>

     <View style={{marginVertical:10}}>
      <Button title="GET" onPress={getApi} />
      </View>

      <View style={{marginVertical:10}}>
      <Button title="POST" onPress={postApi} />
      </View>

      <View style={{marginVertical:10}}>
      <Button title="PATCH" onPress={patchApi} />
      </View>

       <View style={{marginVertical:10}}>
        <Button title="DELETE" onPress={deleteApi}  style={{marginVertical:20}} />
       </View>

      <FlatList
        data={data}
        ListEmptyComponent={() => (
          <Text style={{ fontSize: 20, textAlign: 'center' }}>No data</Text>
        )}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 20,marginHorizontal:7}}>id: {item.id}</Text>
            <Text style={{ fontSize: 20}}>Title: {item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Api;

const styles = StyleSheet.create({
    text:{
        marginVertical:20
    }
});
