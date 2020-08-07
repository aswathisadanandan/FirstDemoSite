import React from 'react';

import './CasesPage.scss'
import CardImage from '../../assets/Images/Two.jpg'


class CasesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="casesPageMainContainer">
        <div className="headerBarContainer">
          <div className="headerBarContainerOne">Looking for an experienced Consultant</div>
          <div className="headerBarContainerTwo">GET A QUOTE</div>
        </div>
        <div className="bottomCOntainer">
        <div className="headerContainer">         
          <div className="headerContainerOne">____</div>
          <div className="headerContainerTwo"> Our Cases</div>          
        </div>
        <div className="cardMainContainer">
        <div className="cardContainer">
          <img src={CardImage} className="image" alt="image" />
          <div className="cardContainerBottom">
            <div className="cardContainerBottomOne">Family Asset Management</div>
            <div className="cardContainerBottomTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
            <div className="cardContainerBottomThree"><div className="cardContainerBottomThreeOne">Read More</div></div>
             </div>
        </div>
        <div className="cardContainer">
          <img src={CardImage} className="image" alt="image" />
          <div className="cardContainerBottom">
            <div className="cardContainerBottomOne">Family Asset Management</div>
            <div className="cardContainerBottomTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
            <div className="cardContainerBottomThree"><div className="cardContainerBottomThreeOne">Read More</div></div>
             </div>
        </div>
        <div className="cardContainer">
          <img src={CardImage} className="image" alt="image" />
          <div className="cardContainerBottom">
            <div className="cardContainerBottomOne">Family Asset Management</div>
            <div className="cardContainerBottomTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
            <div className="cardContainerBottomThree"><div className="cardContainerBottomThreeOne">Read More</div></div>
             </div>
        </div>
        </div>
        <div className="curouselContainer">
          <div className="curouselContainerActive"></div>
          <div className="curouselContainerTwo"></div>
          <div className="curouselContainerTwo"></div>
        </div>
        </div>

      </div>
    )
  }
}
export default CasesPage;