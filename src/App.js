import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

import {Modal, 
        Grid,
        Backdrop, 
        Fade,
        Input,
        Link,
        Select,
        MenuItem,
        Typography,
        Button,
        InputAdornment} from '@material-ui/core';
import {AddCircleOutline, RemoveCircleOutline} from '@material-ui/icons';
import {useStyles} from './asset/styles';


function App(props) {
  const classes = useStyles(props);
  const uuidv4 = require("uuid/v4")
  const [rule, setRule] = useState([{id:uuidv4(), type:"aff_sub",  logic:"is",  parameter:[{id: uuidv4(), value: null}] }]);

  /**
   * addRule is to add new rules 
   */
  const addRule = () =>{
    let newRules = {
      id: uuidv4(),
      type:"aff_sub",  
      logic:"is",  
      parameter:[{id: uuidv4(), value: null}] 
    }
    setRule(state=>[...state, newRules])

  }

  /**
   * removeRule is to remove targeted rule 
   * @param {string} id - rule id
   */
  const removeRule = (id) =>{
    if(rule.length>1){
      const index = rule.findIndex((val)=> {return val.id === id})
      let newRule = [...rule]
      newRule.splice(index, 1)
      setRule(newRule)
    }
    
  }

  /**
   * addParameter is to add new parameters into the rule
   * @param {string} id - parameter id
   */
  const addParameter = (id) =>{
    const index = rule.findIndex((val)=> {return val.id === id})

    let newRule = [...rule]
    newRule[index].parameter.push({id: uuidv4(), value: null})

    setRule(newRule)
  }

  /**
   * removeParameter is to remove targeted parameters from respective rule
   * @param {string} id - rule id
   * @param {string} paramId - parameter id
   */
  const removeParameter = (id, paramId) =>{
    const index = rule.findIndex((val)=> {return val.id === id})
    const paramIndex = rule[index].parameter.findIndex((param)=> {return param.id === paramId})

    let newRule = [...rule]
    newRule[index].parameter.splice(paramIndex, 1)

    setRule(newRule)
  }

  /**
   * removeParameter is to remove targeted parameters from respective rule
   * @param {string} id - rule id
   * @param {string} paramId - parameter id
   */
  const changeField = (id, paramId, event) =>{
    const index = rule.findIndex((val)=> {return val.id === id})
    const paramIndex = rule[index].parameter.findIndex((val)=> {return val.id === paramId})
    
    let newRule = [...rule]
    newRule[index].parameter[paramIndex].value = event.target.value

    setRule(newRule)
  }

  useEffect(() => {
    
  },[rule]);


  return (
    <div>
      {/* Modal */}
      <Modal
        className={classes.modal}
        open={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          {/* Modal Content */}
          <div className={classes.paper}>
            <Grid container justify="center" alignItems="center">
              {/* Header */}
              <Grid item xs={12}  className={classes.headerMargin}>
                <Typography className={classes.large}>
                  Add Revenue Group
                </Typography>
              </Grid>

              {/* Body */}
              <Grid container justify="center" alignItems="center">
                {/* Title */}
                <Grid item xs={12}  className={classes.rowMargin}>
                  <Typography className={classes.medium}>
                    Revenue Group Title
                  </Typography>
                  <Input
                    className={classes.field}
                    variant="outlined"
                    disableUnderline
                    name="title"
                    placeholder="title"
                  />
                </Grid>

                {/* Conditions */}
                <Grid item xs={12}  className={classes.rowMargin}>
                  <Typography className={classes.small}>
                    If &nbsp;
                  </Typography>
                  <Select
                    disableUnderline
                    className={`${classes.field} ${classes.inline}`}
                    name="condition"
                    value={"all"}
                  >
                    <MenuItem value="all">ALL</MenuItem>
                  </Select>
                  <Typography className={classes.small}>
                  &nbsp; of the conditions are met
                  </Typography>
                </Grid>

                {/* Rule */}
                <Grid item xs={12} className={classes.group}>
                  {
                    rule.map((val, index) => (
                        <Grid key={val.id} container justify="center" spacing={1}  alignItems="flex-start"
                              className={rule.length>1 ? classes.groupBorder : classes.groupNormal}
                        >
                          {rule.length > 1 && 
                            <Grid item xs={12}>
                              <Typography className={classes.ruleHeader}>
                                Rule {index+1}
                              </Typography>
                            </Grid>
                          }
                          <Grid item xs={2}>
                            <Select
                              disableUnderline
                              className={classes.field}
                              name="type"
                              value={val.type}
                            >
                              <MenuItem value="aff_sub">aff_sub</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={2}>
                            <Select
                              disableUnderline
                              className={classes.field}
                              name="logic"
                              value={"is"}
                            >
                              <MenuItem value={val.logic}>is</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={8}>
                            {
                              val.parameter.map((param, paramIndex) => (
                                <Grid key={param.id} container>
                                  <Grid item xs={10}>
                                    <Input
                                        key={param.id}
                                        className={classes.field}
                                        value={param.value}
                                        onChange={(e)=>changeField(val.id, param.id, e)}
                                        inputProps={{
                                          style:{fontStyle:"italic"}
                                        }}
                                        placeholder="insert parameter"
                                        endAdornment={
                                          <InputAdornment position="end">
                                            <Typography className={classes.small}>
                                              {
                                                paramIndex !== val.parameter.length - 1 ?
                                                  <Link  className={`${classes.link} ${classes.removeLink}`} onClick={() => {removeParameter(val.id, param.id)}}>
                                                    remove rule
                                                  </Link>
                                                :
                                                  <Link className={`${classes.link} ${classes.addLink}`} onClick={() => {addParameter(val.id)}}>
                                                    add rule
                                                  </Link>
                                              }
                                              
                                            </Typography>
                                          </InputAdornment> 
                                        }
                                        variant="outlined"
                                        disableUnderline
                                    />
                                  </Grid>
                                  {
                                    paramIndex === val.parameter.length - 1 &&
                                    <>
                                    <Grid item xs={1}>
                                      <Typography className={classes.iconWrap}>
                                        <RemoveCircleOutline className={`${classes.icon} ${classes.secondaryIcon}`} onClick={()=> {removeRule(val.id)}}/>
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                      <Typography className={classes.iconWrap}>
                                        {index === rule.length - 1 &&
                                          <AddCircleOutline className={`${classes.icon} ${classes.primaryIcon}`} onClick={()=> {addRule()}}/>
                                        }
                                      </Typography>
                                    </Grid>
                                    </>
                                  }
                                  
                                </Grid>
                                )
                              )
                            }
                          </Grid>
                          
                        </Grid>
                      )
                    )
                  }
                </Grid>
                
                {/* Revenue Amount */}
                <Grid item xs={12}  className={classes.rowMargin}>
                  <Typography className={classes.small}>
                  then revenue is &nbsp;
                  </Typography>
                  <Input
                      className={`${classes.field} ${classes.inline}`}
                      placeholder="revenue amount"
                      type="number"
                      endAdornment={
                        <InputAdornment position="end">
                          %
                        </InputAdornment>
                      }
                      variant="outlined"
                      disableUnderline
                    />
                </Grid>
              </Grid>  

              {/* Footer */}
              <Grid item xs={12}  className={classes.footerMargin}>
                <Button className={`${classes.button} ${classes.primary}`}>
                  Confirm
                </Button>
                <Button className={`${classes.button} ${classes.secondary}`}>
                  Cancel
                </Button>
              </Grid>
          </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default App;
