import { makeStyles } from '@mui/styles';
export const useStyl=makeStyles((theme)=>({
    card:{
        marginTop:"1rem",
        width:"100%",
        height:"3rem",
        // backgroundColor:"#DB2FDB",
        borderRadius:".2rem",
        color:"#fff",
        display:"flex",
        alignItems:"center",
        fontSize:"1.3rem",
        justifyContent:'space-between',
    },
    text:{
        paddingLeft:"1rem",
    },
    icon:{
        cursor:"pointer",
    },
    editIcon:{
        cursor:"pointer",
        paddingRight:"1rem"
    }
}))