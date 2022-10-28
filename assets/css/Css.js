import { color } from '@rneui/base';
import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        backgroundColor:"#001d66",
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
      
    },
    darkbg:{
        backgroundColor:"#001d66"
    },
    
    login__logomarca:{
        marginBottom: 10,
        color:"white",
    },
    login__msg:{
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        
    },
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 10,
        marginBottom: 15,

    },
    login__button:{
        padding: 12,
        alignSelf:"center",
        borderRadius:5,
        alignItems: 'center',
        backgroundColor: '#ddd',
        marginTop: 12,
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    },
    fonts: {
        marginBottom: 8,
      },
      user: {
        flexDirection: "row",
        marginBottom: 6,
      },
      image: {
        width: 30,
        height: 30,
        marginRight: 10,
      },
      name: {
        fontSize: 16,
        marginTop: 5,
      },
      containerSalas: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#bbb'
      }
})

export default style; 