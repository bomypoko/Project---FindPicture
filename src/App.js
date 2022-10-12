import React from 'react'
import PhotoContextProvider from './context/PhotoContext'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'

const App = () => {

  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (

    <PhotoContextProvider>
          <BrowserRouter>

            <div className='container'>
              <Route 
                render={props => (
                  <Header 
                  handleSubmit={handleSubmit}
                  history={props.history}
                   />
                )}
              />
            </div>
          </BrowserRouter>
    </PhotoContextProvider>
  )
}

export default App
