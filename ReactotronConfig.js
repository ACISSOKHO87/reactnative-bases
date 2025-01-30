import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
        name: "React Native ",
    })
    .useReactNative()
    .connect();
