import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from "../src/colors.json"
import logoWeb from './logos/MyWebLogo.svg';
import logo from './logo.svg';
import Button from "./Components/Button"
import ColorGenerator from "./Components/ColorGenerator"
import './App.css';

/*
Space to differentiate imports from code
/
/
/
/
/
/
/
/
 */
class App extends Component {
  state={
    generateColors:false
  }
  
  generateColorHandler=()=>{
    const generate=this.state.generateColors;
    this.setState({generateColors:!generate})
  }

  render() {
    let PrimaryColor = Math.floor(Math.random() * (10));
    let PrimaryColorChildrenlength = Colors[PrimaryColor].children.length;
    

    var mystyleOne = {
      backgroundColor: `${Colors[PrimaryColor].children[Math.floor(Math.random() * (PrimaryColorChildrenlength))].hex}`,
      paddingBottom : "100%",
    };
    var mystyleTwo = {
      backgroundColor: `${Colors[PrimaryColor].children[Math.floor(Math.random() * (PrimaryColorChildrenlength))].hex}`,
      paddingBottom : "100%",
    };
    var mystyleThree = {
      backgroundColor: `${Colors[PrimaryColor].children[Math.floor(Math.random() * (PrimaryColorChildrenlength))].hex}`,
      paddingBottom : "100%",
    };
    var mystyleFour = {
      backgroundColor: `${Colors[PrimaryColor].children[Math.floor(Math.random() * (PrimaryColorChildrenlength))].hex}`,
      paddingBottom : "100%",
    };
    var mystyleFive = {
      backgroundColor: `${Colors[PrimaryColor].children[Math.floor(Math.random() * (PrimaryColorChildrenlength))].hex}`,
      paddingBottom : "100%",
    };
    var mystyleSix = {
      backgroundColor: `${Colors[PrimaryColor].children[Math.floor(Math.random() * (PrimaryColorChildrenlength))].hex}`,
      paddingBottom : "100%",
    };


      let ColorsGen  = null;

      if (this.state.generateColors===true || this.state.generateColors===false ) {
          ColorsGen= <ColorGenerator 
          mystyleOne={mystyleOne}
          mystyleTwo={mystyleTwo}
          mystyleThree={mystyleThree}
          mystyleFour={mystyleFour}
          mystyleFive={mystyleFive}
          mystyleSix={mystyleSix}
          ></ColorGenerator>
        }



  
    return (


        <div className="App" >
        
            <div className="container">
              <div className="row ">
                  <div className="col-lg-1 m-left  logo"> 
                      <a href=""><img src={logoWeb} alt="MyWebLogo" height="25px" width="25px;"></img> </a>
                  </div>
                  <div className="col-lg-4 ml-auto">
                      <div className="row anchorow">
                          <div className="col-lg-4 ml-auto p-0 "> <a href="" className="align-middle HeaderOptions">About</a></div>
                          <div className="col-lg-4 m-auto p-0"> <a href="" className="align-middle HeaderOptions">Projects</a> </div>
                          <div className="col-lg-4 mr-auto p-0"> <a href="" className="align-middle HeaderOptions">Achievement</a> </div>
                      </div>
                  </div>
              </div>
          </div>



            <div className="container">
              <div className="row">
                <div className="col-lg-12 m-auto">
                  <div className="row">
                    <div className="col-lg-2 mr-auto">
                      <Button className="buttonStyle" onClick={this.generateColorHandler} type="button">Generate</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {ColorsGen}
            </div>
      </div>
    );
  }
}

export default App;
