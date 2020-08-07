import React from 'react';

import './SecondPage.scss';
import CardImage from '../../assets/Images/Two.jpg'
// import Image from 'material-ui-image'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';


class SecondPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="secondPageMainContainer">
        <div className="cardContainer">
          <img src={CardImage} className="image" alt="image" />
          <div className="cardContainerBottom">
            <div>Finance & Restructuring </div>
            <ArrowForwardIcon className="icon"/> 
             </div>
        </div>
        <div className="cardContainer">
          <img src={CardImage} className="image" alt="image" />
          <div className="cardContainerBottomTwo">
            <div>management consulting</div>
            <TrackChangesIcon className="icon"/> 
             </div>
        </div>
        <div className="cardContainer">
          <div className="cardContainerTextOne">We craft marketing and digital product thats grow business</div>
          <div className="cardContainerBottomCOntainer">
          <div className="cardContainerBottomCOntainerOne"><ArrowBackIosIcon className="icon"/></div>
          <div className="cardContainerBottomCOntainerTwo"><ArrowForwardIosIcon className="icon"/></div>
          </div>
        </div>
      </div>
    )
  }
}
export default SecondPage;