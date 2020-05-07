import React from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ions from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
Icon.loadFont()
MaterialIcon.loadFont()
AntDesign.loadFont()
Fontisto.loadFont()
Ions.loadFont()

const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
