import React from 'react';

import './ExpertInThisField.scss'
import CheckIcon from '@material-ui/icons/Check';
import Profile from '../../assets/Images/Two.jpg'


class ExpertInThisField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="expertInThisFieldMainContainer">
        <div className="firstContainer">
          <div className="firstContainerTextOne">WE ARE AN EXPERT IN THIS FIELD</div>
          <div className="firstContainerTextTwo">Real peoples are available 24 hours a day , 7days a week to help you with what ever you need </div>
          <div className="tickContainer"><CheckIcon className="icon"/>
              <div>premium service and beyond your expression</div>
          </div>
          <div className="tickContainer"><CheckIcon className="icon"/>
              <div>premium service fdv</div>
          </div>
          <div className="tickContainer"><CheckIcon className="icon"/>
              <div>premium service </div>
          </div>
          <div className="tickContainer"><CheckIcon className="icon"/>
              <div>premium service </div>
          </div>
          <div className="bottomContainer">
            <div className="bottomContainerOne">
              <div className="bottomContainerTextOne">1200</div>
              <div className="bottomContainerTextTwo">completed projects</div>
            </div>
            <div className="bottomContainerOne">
              <div className="bottomContainerTextOne">1200</div>
              <div className="bottomContainerTextTwo">completed projects</div>
            </div>
            <div className="bottomContainerOne">
              <div className="bottomContainerTextOne">1200</div>
              <div className="bottomContainerTextTwo">completed projects</div>
            </div>
            <div className="bottomContainerOne">
              <div className="bottomContainerTextOne">1200</div>
              <div className="bottomContainerTextTwo">completed projects</div>
            </div>            
          </div>          
        </div>
        <div className="secondContainer">
          <div className="secondContainerOne">
            <div className="imageContainer">
            <img src={Profile} className="secondContainerImage"/>
            </div>
            <div className="secondContainerOneTextOne">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspdNeque , consenter adiperte aspdNeque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspdNeque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
            <div className="secondContainerOneBottom">
              <div className="secondContainerOneBottomTextOne">JHON DOE</div>
              <div className="secondContainerOneBottomTextTwo">Bankl manager</div>
              <div className="curouselContainer">
                  <div className="curouselContainerActive"></div>
                  <div className="curouselContainerTwo"></div>
                  <div className="curouselContainerTwo"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ExpertInThisField;