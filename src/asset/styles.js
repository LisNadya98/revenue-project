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
  iconWrap:{
    marginTop:"0.5rem"
  },

  icon:{
    margin:"0 0.5rem",
    fontSize:"20px",
    opacity:"1",
    transition:"0.5s",
    cursor:"pointer",
    '&:hover':{
      opacity:"0.5"
    }
  },

  primaryIcon:{
    marginLeft:"0.5rem",
    color:"#404040"
  },

  secondaryIcon:{
    marginLeft:"1.1rem",
    color:"#A7A7A7"
  },

  //<---- RULE GROUP --->//
  group:{
    padding:"0.27rem",
    margin:"0.6rem 0"
  },

  groupNormal:{
    background:"#EEEEEE",
    padding:"1rem 0 1rem 1rem",
  },

  groupBorder:{
    background:"#EEEEEE",
    borderTop: "1px solid #D6D6D6", 
    borderBottom: "1px solid #D6D6D6",
    padding:"1rem 0 1rem 1rem",
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
  button:{
    color:"#fff",
    fontSize:"12px",
    transition:"0.5s",
    textTransform:"none",
    padding:"0.5rem 1.6rem",
    '&:hover':{
      background:"#E68124",
      opacity:"0.5"
    }
  },

  primary:{
    background:"#E68124",
    marginRight:"0.6rem",
    
  },

  secondary:{
    background:"#878787",
  },

  //<---- LINKS --->//
  link:{
    fontWeight:"bold",
    cursor:"pointer",
  },

  addLink:{
    color:"#6EAFD9"
  },

  removeLink:{
    color:"#C14E49"
  },

}));

export {useStyles} 