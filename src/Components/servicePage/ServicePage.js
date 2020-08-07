import React from 'react';
import CastConnectedIcon from '@material-ui/icons/CastConnected';

import './ServicePage.scss'


class ServicePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="ServicePageMainContainer">
        <div className="headerContainer">
          <div className="headerContainerOne"></div>
          <div className="headerContainerTwo">service we provide</div>
        </div>
        <div className="bottomContainer">
          <div className ="bottomContainerColumn">
          <div className="bottomContainerOne">
            <div className="iconContainer"><CastConnectedIcon  className="icon"/></div>
            <text className="bottomContainerOneTextOne">capital market</text>
            <div className="bottomContainerOneTextTwo">impedit quo minus id quod maxime placeat facer possimus,omnis voluptas assumeda est</div>
          </div>  
          <div className="bottomContainerOne">
            <div className="iconContainer"><CastConnectedIcon  className="icon"/></div>
            <text className="bottomContainerOneTextOne">capital market</text>
            <div className="bottomContainerOneTextTwo">impedit quo minus id quod maxime placeat facer possimus,omnis voluptas assumeda est</div>
          </div>  
          </div> 
          <div className ="bottomContainerColumn">
          <div className="bottomContainerOne">
            <div className="iconContainer"><CastConnectedIcon  className="icon"/></div>
            <text className="bottomContainerOneTextOne">capital market</text>
            <div className="bottomContainerOneTextTwo">impedit quo minus id quod maxime placeat facer possimus,omnis voluptas assumeda est</div>
          </div>  
          <div className="bottomContainerOne">
            <div className="iconContainer"><CastConnectedIcon  className="icon"/></div>
            <text className="bottomContainerOneTextOne">capital market</text>
            <div className="bottomContainerOneTextTwo">impedit quo minus id quod maxime placeat facer possimus,omnis voluptas assumeda est</div>
          </div>  
          </div> 
          <div className ="bottomContainerColumn">
          <div className="bottomContainerOne">
            <div className="iconContainer"><CastConnectedIcon  className="icon"/></div>
            <text className="bottomContainerOneTextOne">capital market</text>
            <div className="bottomContainerOneTextTwo">impedit quo minus id quod maxime placeat facer possimus,omnis voluptas assumeda est</div>
          </div>  
          <div className="bottomContainerOne">
            <div className="iconContainer"><CastConnectedIcon  className="icon"/></div>
            <text className="bottomContainerOneTextOne">capital market</text>
            <div className="bottomContainerOneTextTwo">impedit quo minus id quod maxime placeat facer possimus,omnis voluptas assumeda est</div>
          </div>  
          </div>        
        </div>
      </div>
    )
  }
}
export default ServicePage;