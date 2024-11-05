

import { useEffect } from "react";
import {View,Text, Button, useAnimatedValue} from "react-native";//引入 UI 组件
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


/*
要创建一个新的屏幕，只需定义一个函数组件并导出它。
通过这种方式，React Native 能将这些屏幕集成到导航中，使应用具备多个页面并能够在它们之间切换
*/
export default function PlannerScreen({navigation}:NativeStackHeaderProps){
    /*
    写成 ({ navigation }) 相当于写了：
function HomeScreen(props) {
    const navigation = props.navigation;
    // 其他代码
}
这就把 navigation 直接作为一个变量使用了，代码更简洁。
    */


    useEffect(()=>{
        console.log("rending home screen")
    },[])

    return(
    <View>
        <Text>i am planner  screen</Text>
        <Button
            title="go to home "
            onPress={() => navigation.navigate("Home")}
        />

    </View>
    )
}