//todo need to refactor
import React, { useState } from 'react';
import { Image, ImageStyle, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle} from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import Ions from 'react-native-vector-icons/Ionicons';
import useTheme from "../../hooks/useTheme";
import ImagePicker from 'react-native-image-picker';

interface Props {
    userImageSource: ImageSourcePropType;
    editInfo?: boolean;
};

const contact = require("../../images/new-contact.png");

const PhotoUpload: React.FunctionComponent<Props> = ({
    userImageSource,
    editInfo,
}: Props) => {
    const theme: AppTheme = useTheme();
    const [saveItem, setSaveItem] = useState<boolean>(false);
    const [image, onBrowseImage] = React.useState<ImageSourcePropType>(userImageSource);

    const selectPhotoTapped = (): void => {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
        },
    };

    ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
  
          onBrowseImage(source);
          setSaveItem(false);
        }
      });
    }

    return (
      <View>
        <View style={style.container}>
            {
                editInfo && !saveItem ?
                    <TouchableOpacity onPress={() => {setSaveItem(true);}} style={style.specialContainer}>
                        <Image source={contact} style={style.specialStyle}/>
                    </TouchableOpacity> 
                : null
            }
        </View>
        <View style={style.contentContainer}>
            { editInfo && !saveItem ?
                <Image source={image} style={[style.imageStyle, {borderColor: theme.backgroundColor}]}/>
            :   <TouchableOpacity onPress={() => {selectPhotoTapped();}}>
                    <Image source={image} style={[style.imageStyle, {opacity: 0.5}]} />
                    <Ions name="ios-camera" size={40} color={theme.textColor} style={style.imageUpload}/>
                </TouchableOpacity> 
            }
        </View>
      </View>
    );
};

export default PhotoUpload;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    backButton: ViewStyle;
    editButton: ViewStyle;
    userImageContainer: ImageStyle;
    imageStyle: ImageStyle;
    imageUpload: ImageStyle;
    userNameStyle: TextStyle;
    inputStyle: ViewStyle;
    specialContainer: ViewStyle;
    specialStyle: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 5,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    backButton: {
        padding: 10,
        alignItems: "flex-start",
    },
    editButton: {
        padding: 10,
        alignItems: "flex-end",
    },
    userImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userNameStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    inputStyle: {
        borderWidth: 2, 
        padding: 10, 
    },
    imageStyle: {
        justifyContent: 'center',
        width: 200, 
        height: 200,
        borderWidth: 5,
        borderRadius: 150,
        marginTop: 60,
    },
    imageUpload: {
        position: "absolute",
        alignSelf: 'center',
        top: 130,
    },
    specialStyle: {
        marginLeft: 190
    },
    specialContainer: { 
        position: 'absolute', 
        alignSelf: 'center',
        top: 100,
    },
})
