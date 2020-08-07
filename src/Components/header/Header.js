import React from 'react';

import './Header.scss'
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CameraIcon from '@material-ui/icons/Camera';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="headerMainContainer">
          <div className="headerContainerOne" >
              <div className="headerContainerOneOne">
                  <CallIcon className="icon" />
                  <div>140 820 1003 244</div>
              </div>
              <div className="headerContainerOneTwo">
                  <LocationOnIcon className="icon" />
                  <div>140 820 1003 244</div>
              </div>
          </div>
          <div className="headerContainerTwo">
              <div className="headerContainerTwoOne">
                  <FacebookIcon className="icon"/>
                  <LinkedInIcon className="icon"/>
                  <TwitterIcon className="icon"/>
                  <CameraIcon className="icon"/>
              </div>
              <div className="headerContainerTwoTwo">
                  <div className="headerContainerTwoTwoOne">Login</div>
                  <div>&nbsp;|&nbsp;</div>
                  <div className="headerContainerTwoTwoTwo">Register</div>

              </div>
          </div>
      </div>
    )
  }
}
export default Header;