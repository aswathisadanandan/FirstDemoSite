import React from 'react';

import './Blog.scss'
import CardImage from '../../assets/Images/Two.jpg'


class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="blogMainContainer">
        <div className="headerContainer">         
          <div className="headerContainerOne">____</div>
          <div className="headerContainerTwo">Blog</div>          
        </div>
        <div className="cardMainContainer">
        <div className="cardContainer">
          <img src={CardImage} className="image" alt="image" />
          <div className="cardContainerBottom">
            <div className="cardContainerBottomOne">
            <div className="cardContainerBottomOneTextOne">10 may 2020</div>
            <div className="cardContainerBottomOneTextTwo">. comment(5)</div>
            </div>
            <div className="cardContainerBottomTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
            <div className="cardContainerBottomThree">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
        </div>
      </div>
      <div className="cardContainer">
          <img src={CardImage} className="image" alt="image" />
          <div className="cardContainerBottom">
            <div className="cardContainerBottomOne">
            <div className="cardContainerBottomOneTextOne">10 may 2020</div>
            <div className="cardContainerBottomOneTextTwo">. comment(5)</div>
            </div>
            <div className="cardContainerBottomTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
            <div className="cardContainerBottomThree">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
        </div>
      </div>
      <div className="cardContainer">
          <img src={CardImage} className="image" alt="image" />
          <div className="cardContainerBottom">
            <div className="cardContainerBottomOne">
            <div className="cardContainerBottomOneTextOne">10 may 2020</div>
            <div className="cardContainerBottomOneTextTwo">. comment(5)</div>
            </div>
            <div className="cardContainerBottomTwo">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
            <div className="cardContainerBottomThree">Neque  porro quittenm, qui dolarem ipsum quia dolor sit amet , consenter adiperte aspd</div>
        </div>
      </div>
      
    </div>

 </div>
    )
  }
}
export default Blog;