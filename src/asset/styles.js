import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  //<---- MODAL --->//
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    background: theme.palette.background.paper,
    width: "800px",
    boxShadow: theme.shadows[5],
    outline:"none",
    maxHeight:"80vH",
    overflowY:"auto",
    overflowX:"hidden"
  },

  //<---- FIELDS --->//
  field:{
    borderRadius:"5px",
    background:"#FFFFFF",
    padding:"0 10px",
    fontSize:"12px",
    margin:"0.2rem 0",
    border: '1px solid #C0C0C0',
    width:"100%",
  },

  fieldInput:{
    '&::placeholder': {
      fontStyle:"italic"
    }
  },

  inline:{
    width: 'fit-content',
    minWidth:"120px"
  },
  
  //<---- FONTS --->//
  ruleHeader:{
    fontSize:"12px",
    fontWeight:"bold",
    textTransform:"uppercase"
  },

  small:{
    display:'inline',
    fontSize:"12px"
  },

  medium:{
    display:'inline',
    fontSize:"14px"
  },

  large:{
    fontWeight:"medium",
    display:'inline',
    fontSize:"18px"
  },

  //<---- ICONS --->//
  icon:{
    textAlign:"center",
    marginTop:"0.5rem"
  },

  primaryIcon:{
    margin:"0 0.5rem",
    fontSize:"20px",
    color:"#404040"
  },

  secondaryIcon:{
    margin:"0 0.5rem",
    fontSize:"20px",
    color:"#A7A7A7"
  },

  //<---- RULE GROUP --->//
  group:{
    padding:"0.27rem",
    margin:"0.6rem 0"
  },

  groupNormal:{
    background:"#EEEEEE",
    padding:"1rem",
  },

  groupBorder:{
    background:"#EEEEEE",
    borderTop: "1px solid #D6D6D6", 
    borderBottom: "1px solid #D6D6D6",
    padding:"1rem",
  },
  
  //<---- ROWS --->//
  formBlock: {
    display:"block",
  },

  formInline: {
    display:"inline-block",
    margin:"0 1rem"
  },

  headerMargin:{
    margin:"1rem 1rem 0.6rem 1rem"
  },

  footerMargin:{
    margin:"0.6rem 1rem 1rem 1rem"
  },

  rowMargin:{
    margin:"0.6rem 1rem"
  },

  //<---- BUTTONS --->//
  primary:{
    background:"#E68124",
    color:"#fff",
    marginRight:"0.6rem",
    fontSize:"12px",
    transition:"0.5s",
    textTransform:"none",
    padding:"0.5rem 1.6rem",
    '&:hover':{
      background:"#E68124",
      opacity:"0.5"
    }
  },

  secondary:{
    background:"#878787",
    color:"#fff",
    fontSize:"12px",
    transition:"0.5s",
    textTransform:"none",
    padding:"0.5rem 1.6rem",
    '&:hover':{
      background:"#878787",
      opacity:"0.5"
    }
  },

  //<---- LINKS --->//
  link:{
    fontWeight:"bold",
    color:"#6EAFD9"
  },

  removeLink:{
    fontWeight:"bold",
    color:"#C14E49"
  },

}));

export {useStyles} 