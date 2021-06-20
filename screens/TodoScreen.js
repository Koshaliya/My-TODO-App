import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, CheckBox, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';


import Colors from '../constants/Colors'
import { CATEGORIES } from '../data/dummy-data'
import AddNewTask from '../components/AddNewTask';

const TodoScreen = props => {
    const [isSelected, setSelection] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [task,setTask] = useState();
    const [taskItem,setTaskItem] = useState([])

    const handleTaskItem = () => {
        console.log(task)
        setTaskItem([...taskItem,task])
        setTask(null)
        setIsVisible(!isVisible)
    }

    const renderGridItem = itemData => {
        return (
            <View style={styles.listItem}>
                <CheckBox value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label} numberOfLines={2}>
                    {itemData.item}
                </Text>
            </View>

        );
    };

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    My Tasks
                </Text>
            </View>
            <View style={styles.line} />
            <FlatList data={taskItem}
            key={(item, index) => item.index}
                keyExtractor={(item, index) => item.index}
                renderItem={renderGridItem}
                style={{ width: '100%' }}
            />

            <View style={styles.container}>

                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={isVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has now been closed.');
                    }}>
                    
                        <View style={styles.modal}>
                            <View style={styles.modalContent}>
                            <Text style={styles.subHeading}>Add New Task</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="New Task"
                                    value={task} 
                                    onChangeText={text => setTask(text)}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity activeOpacity={0.6} onPress={handleTaskItem}>
                                    <View style={styles.button} >
                                        <Text style={styles.buttonText}>ADD</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                    
                </Modal>
                <FAB style={styles.fab}
                    medium
                    icon="plus"
                    onPress={() =>
                        setIsVisible(true)
                    } />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    headingContainer: {
        height: 50,
        marginTop: 60,
        margin: 15
    },
    heading: {
        color: Colors.primaryColor,
        fontSize: 35,
        fontFamily: 'roboto-bold'
    },
    subHeading: {
        color: Colors.primaryColor,
        fontSize: 25,
        fontFamily: 'roboto-bold',
        textAlign: 'center',
        padding: 8
    },
    line: {
        borderBottomColor: Colors.greyColor,
        borderBottomWidth: 1,
        width: '80%',
        marginHorizontal: 15
    },
    listItem: {
        flexDirection: 'row',
        marginHorizontal: 15,
        padding: 10,
        justifyContent: 'flex-start',
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color: Colors.primaryColor
    },
    fab: {
        position: 'absolute',
        margin: 40,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.primaryColor
    },
    container: {
        padding: 10,
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBack: {
        backgroundColor: '#000000aa',
        flex: 1
    },
    modal: {
        marginTop: 200,
        padding: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        backgroundColor: Colors.greyColor
    },
    modalContent:{
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryColor,
        padding: 5,
        margin: 15,
    },
    buttonContainer: {
        borderRadius: 30,
        overflow: 'hidden',
        width: '40%',
        margin: 50
      },
      button: {
        backgroundColor: Colors.primaryColor,
        padding: 20,
      },
      buttonText: {
        color: 'white',
        fontFamily: 'roboto',
        fontSize: 18,
        textAlign: 'center',
        
      },
});

export default TodoScreen;
