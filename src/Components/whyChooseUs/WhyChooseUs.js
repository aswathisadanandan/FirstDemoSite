import React from 'react';

import './WhyChooseUs.scss'
import TrackChangesIcon from '@material-ui/icons/TrackChanges';


class WhyChooseUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="whyChooseUsMainContainer">
        <div className="firstContainer">
          <div className="firstContainerOne">
            <div className="firstContainerOneOne">22 YEARS</div>
            <div className="firstContainerOneTwo">EXPERIENCE</div>
          </div>
        </div>
        <div className="secondContainer">
          <div className="whyChooseUsText">WHY CHOOSE US</div>
          <div className="whyChooseUsTextSubText">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd of tdsf wdminfwj</div>
          <div className="secondContainerOne">
            <div className="secondContainerOneOne"> <TrackChangesIcon  className="Icon"/></div>           
            <div className="secondContainerTwo">
              <div className="secondContainerTwoTextOne">Diverse Expertise</div>
              <div className="secondContainerTwoTextTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd of tdsf wdminfwj</div>
            </div>
          </div>
          <div className="secondContainerOne">
            <div className="secondContainerOneOne"> <TrackChangesIcon  className="Icon"/></div>           
            <div className="secondContainerTwo">
              <div className="secondContainerTwoTextOne">Diverse Expertise</div>
              <div className="secondContainerTwoTextTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd of tdsf wdminfwj</div>
            </div>
          </div>
          <div className="secondContainerOne">
            <div className="secondContainerOneOne"> <TrackChangesIcon  className="Icon"/></div>           
            <div className="secondContainerTwo">
              <div className="secondContainerTwoTextOne">Diverse Expertise</div>
              <div className="secondContainerTwoTextTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd of tdsf wdminfwj</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WhyChooseUs;