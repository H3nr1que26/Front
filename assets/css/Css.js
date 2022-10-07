import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        backgroundColor:"#001d66",
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    darkbg:{
        backgroundColor:"#001d66"
    },
    
    login__logomarca:{
        marginBottom: 10
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
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    }
})

export default style; 