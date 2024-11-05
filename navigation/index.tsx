

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

/*
NavigationContainer：从 @react-navigation/native 导入的组件，
是 React Navigation 的顶层容器。
所有的导航逻辑都需要放在 NavigationContainer 中，它负责管理应用的导航状态。
*/

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";

const Stack= createNativeStackNavigator();
//创建了一个堆栈导航器 Stack。可以用 Stack.Navigator 组件将不同的屏幕放在堆栈中

export default function Navigation(){
    //创建一个名为 Navigation 的组件，它定义了应用的导航结构

    //buttom button navigation
    //测试

    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
         <Stack.Screen
            name="Planner"
            component={PlannerScreen}
        />

        </Stack.Navigator>
        
    </NavigationContainer>

    )

    //test branch22222222

    //test11111111

    //test in branch2
    

}