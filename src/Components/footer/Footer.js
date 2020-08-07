import React from 'react';

import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CameraIcon from '@material-ui/icons/Camera';


class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="footerMainContainer">
        <div className="headerContainer">         
          <div className="headerContainerOne">____</div>
          <div className="headerContainerTwo">Our Newsletter</div>          
        </div>
        <div className="bottomContainer">
          <div className="bottomContainerHeader">
            <div className="bottomContainerHeaderOne">
              <div className="inputContainer"><input type="text" className="input" placeholder="Email" /></div>
              <div className="subscribeContainer">Subscribe</div>
            </div>
          </div>
          <div className="footerListView">
            <div className="footerListViewOne">
              <div className="footerListViewTextOne">About Us</div>
              <div className="footerListViewTextTwo">sed guru nadd feji baguthu nasthi furunthi dnebuna vaijooni mafhdatdcdg vellandnsy</div>
              <div className="footerListViewTextThree">
                  <FacebookIcon className="icon"/>
                  <LinkedInIcon className="icon"/>
                  <TwitterIcon className="icon"/>
                  <CameraIcon className="icon"/>
              </div>
            </div>
            <div className="footerListViewTwo">
              <div className="footerListViewTwoMainText">Leatest News</div>
             <div className="footerListViewTwoOne">
               <div className="footerListViewTwoOneTextOne"> edfdhbu asdhgasu kdahif</div>
              <div className="footerListViewTwoOneTextTwo">25 may 2015</div>
             </div>
             <div className="footerListViewTwoOne">
               <div className="footerListViewTwoOneTextOne"> edfdhbu asdhgasu kdahif</div>
              <div className="footerListViewTwoOneTextTwo">25 may 2015</div>
             </div>
             <div className="footerListViewTwoOne">
               <div className="footerListViewTwoOneTextOne"> edfdhbu asdhgasu kdahif</div>
              <div className="footerListViewTwoOneTextTwo">25 may 2015</div>
             </div>
             
            </div>
            <div className="footerListViewThree">
              <div className="footerListViewThreeMainText">Useful links</div>
              <div className="footerListViewThreeTextTwo">Our team</div>
              <div className="footerListViewThreeTextTwo">contact us</div>
              <div className="footerListViewThreeTextTwo">help</div>
            </div>
            <div className="footerListViewFour">
              <div className="footerListViewFourHeader">Twitter widget</div>
              <div className="footerListViewFourSubContainer">
                <div className="footerListViewFourSubContainerTextOne">Business custom</div>
                <div className="footerListViewFourSubContainerTextTwo">http://google.com</div>
                <div className="footerListViewFourSubContainerTextThree">3 days ago</div>
              </div>
              <div className="footerListViewFourSubContainer">
                <div className="footerListViewFourSubContainerTextOne">Business custom</div>
                <div className="footerListViewFourSubContainerTextTwo">http://google.com</div>
                <div className="footerListViewFourSubContainerTextThree">3 days ago</div>
              </div>
              <div className="footerListViewFourSubContainer">
                <div className="footerListViewFourSubContainerTextOne">Business custom</div>
                <div className="footerListViewFourSubContainerTextTwo">http://google.com</div>
                <div className="footerListViewFourSubContainerTextThree">3 days ago</div>
              </div>

            </div>
          </div>
        </div>
        <div className="copyrightContainer">
          <div className="copyrightContainerText">Copyright  @  ZealTheme</div>
        </div>
      </div>
    )
  }
}
export default Footer;