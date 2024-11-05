

import { useEffect } from "react";
import {View,Text, Button} from "react-native";//引入 UI 组件
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


/*
要创建一个新的屏幕，只需定义一个函数组件并导出它。
通过这种方式，React Native 能将这些屏幕集成到导航中，使应用具备多个页面并能够在它们之间切换
*/
export default function HomeScreen({navigation} :NativeStackHeaderProps){
    
    useEffect(()=>{
        console.log("rending planner screen")
    },[])

    return(
    <View>
        <Text>i am home screen</Text>
        <Button
            title="go to planner"
            //onPress={() => alert("go to planner")}
            //onPress={() => navigation.push("Planner")}
            //push 方法用于将另一个屏幕推入导航堆栈，从而导航到 "Planner" 屏幕
            //push 会将同一个屏幕多次压入堆栈，而 navigate 会检查目标屏幕是否已在堆栈中，避免多次压入同一个页面
            //导航是通过 navigation 对象完成的，而这个对象是由 React Navigation 提供的，通过 props 传递给屏幕组件
            onPress={() => navigation.navigate("Planner")}
        />

    </View> 
    )
}