import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Main = (props) => {
  return (
    <div className="template-main">
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3 main-card">
                {props.children}
            </div>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default Main
