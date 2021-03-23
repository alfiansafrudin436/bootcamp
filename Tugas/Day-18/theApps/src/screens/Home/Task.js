import {useMutation, useQuery} from '@apollo/client';
import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CustomBtn,
  CustomColor,
  CustomHeader,
  Loader,
} from '../../components/Reusable';
import {GraphProvider} from '../../config/apollo';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {QUERY_TASKS} from '../../config/query/query';
import {ADD_TASK, DELETE_TASK} from '../../config/mutation/mutation';

const List = (props) => {
  const {data, loading, error} = useQuery(QUERY_TASKS(props.id));
  const [add, setAdd] = useState(false);
  const [
    addNewTask,
    {data: dataMut, loading: loadingMut, error: errorMut},
  ] = useMutation(ADD_TASK);
  const [
    deleteTask,
    {data: dataMutDel, loading: loadingMutDel, error: errorMutDel},
  ] = useMutation(DELETE_TASK);

  const [tName, setTName] = useState();
  const [exp, setExp] = useState();

  useEffect(() => {
    console.log({dataMutDel, loadingMutDel, errorMutDel});
  }, [data, loading, error]);

  const addItem = () => {
    add ? setAdd(false) : setAdd(true);
  };
  const title = add ? 'Cancel' : 'Add';
  const renderItem = ({item}) => (
    <View style={styles.txtContainer}>
      <View style={{backgroundColor: CustomColor.green}}>
        <Text style={styles.txtTitle}>{item.taskName}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingRight: '5%',
          paddingLeft: '5%',
          alignItems: 'center',
        }}>
        <Text style={styles.txtsubTitle}>{item.taskExpired}</Text>
        <Text style={styles.txtsubTitle}>
          {item.taskStatus == false ? 'Not Done Yet' : 'Done'}
        </Text>
        <TouchableOpacity
          onPress={() =>
            addNewTask({
              variables: {
                taskExpired: exp.toString(),
                taskName: tName,
                userId: parseInt(props.id),
              },
            })
          }>
          <Icon name="check" size={20} color={CustomColor.green} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            deleteTask({
              variables: {
                taskId: item.taskId
              },
            })
          }>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        cStyleHeader={{backgroundColor: CustomColor.green}}
        cStyleTitle={{color: CustomColor.white}}
        title="Task"
        navigationTitle={title}
        onPress={() => addItem()}
        cStyleNav={{color: CustomColor.white}}
        source={{uri: 'https://img.icons8.com/metro/2x/back.png'}}
        cStyleImage={{tintColor: CustomColor.white}}
        onPressBack={props.onPressBack}
      />
      {loading ? (
        <Loader styleLoader={{top: '50%'}} size={30} title="Load Task" />
      ) : (
        <FlatList
          style={{height: add ? '80%' : '100%'}}
          data={data.task}
          renderItem={renderItem}
          // extraData={data.task}
          keyExtractor={(item) => item.taskId.toString()}
        />
      )}
      {add ? (
        <>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'column', width: '40%'}}>
              <Text style={styles.text}>Task</Text>
              <TextInput
                style={styles.input}
                value={tName}
                onChangeText={(text) => {
                  setTName(text);
                }}
              />
            </View>
            <View style={{flexDirection: 'column', width: '40%'}}>
              <Text style={styles.text}>Expired</Text>
              <TextInput
                style={styles.input}
                value={exp}
                onChangeText={(text) => {
                  setExp(text);
                }}
              />
            </View>
          </View>

          <CustomBtn
            title="Save"
            cBtnStyle={{marginTop: 10, marginBottom: '5%', width: '90%'}}
            onPress={() =>
              addNewTask({
                variables: {
                  taskExpired: exp.toString(),
                  taskName: tName,
                  userId: parseInt(props.id),
                },
              })
            }
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};
const Task = ({navigation, route}) => {
  const {id} = route.params;
  return (
    <GraphProvider>
      <List id={id} onPressBack={() => navigation.goBack()} />
    </GraphProvider>
  );
};
export default Task;

const styles = StyleSheet.create({
  txtTitle: {
    color: CustomColor.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txtsubTitle: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  txtContainer: {
    backgroundColor: CustomColor.white,
    height: 80,
    marginTop: 10,
    borderRadius: 15,
    alignSelf: 'center',
    width: '90%',
  },

  input: {
    width: '100%',
    height: 50,
    paddingLeft: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: CustomColor.green,
    backgroundColor: CustomColor.grey,
    alignSelf: 'center',
    color: CustomColor.green,
  },
  text: {
    color: CustomColor.darkGrey,
    marginBottom: 5,
  },
});
