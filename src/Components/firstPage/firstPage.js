import React from 'react';

import './firstPage.scss'
import SearchIcon from '@material-ui/icons/Search';


class FirstPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="firstPageContainer">
        <div className="headerContainer">
          <div className="headerContainerOne">BizRoot</div>
          <div className="headerContainerTwo">
            <div className="headerContainerTwoOne">HOME</div>
            <div className="headerContainerTwoOne">ABOUT US</div>
            <div className="headerContainerTwoOne">PAGES</div>
            <div className="headerContainerTwoOne">SERVICE</div>
            <div className="headerContainerTwoOne">BLOG</div>
            <div className="headerContainerTwoOne">CONTACT</div>
          </div>
          <div className="headerContainerThree">
            <div className="headerContainerThreeOne">
            <SearchIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="bottomPart">
          <div className="bottomPartOne">PROVIDE BUSINESS SOLUTIONS</div>
          <div className="bottomPartTwo">Your business <text className="bottomPartTwoBlue">success</text> is our <text className="bottomPartTwoBlue">business</text></div>
          <div className="bottomPartThree">Nemo enim ipsam voluptatem quia volupatas sit aspernatur aut odit aut fugit, sed quia conseqquetuer magni dolor eos qui ratio voluptatem</div>
          <div className="bottomPartFour">
            <div className="bottomPartFourServices">services</div>
            <div className="bottomPartFourContactUs">contact us</div>
          </div>
        </div>
      </div>
    )
  }
}
export default FirstPage;