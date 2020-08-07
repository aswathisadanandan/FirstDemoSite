import React from 'react';
import Header from './header/Header'
import FirstPage from './firstPage/firstPage'
import SecondPage from './secondPage/SecondPage'
import ServicePage from './servicePage/ServicePage'
import CasesPage from './casesPage/CasesPage'
import WhyChooseUs from './whyChooseUs/WhyChooseUs'
import ConsultationForm from './consultationForm/ConsultationForm'
import ExpertInThisField from './expertInThisField/ExpertInThisField'
import Blog from './blog/Blog'
import Footer from './footer/Footer'

import './Index.scss'


class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
 
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div>
        <Header/>
        <FirstPage/>
        <SecondPage/>
        <ServicePage/>
        <CasesPage/>
        <WhyChooseUs/>
        <ConsultationForm/>
        <ExpertInThisField/>
        <Blog/>
        <Footer/>
      </div>
    )
  }
}
export default MainPage;