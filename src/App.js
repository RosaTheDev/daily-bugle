import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import api from './apicall';
import Articles from './articlesComponent';
import {Route} from 'react-router-dom';
import DetailedView from './detailedView';
import NavBar from './NavComponent/navBar';
const App = () =>  {

  const [results, setResults] = useState();
  useEffect(() => {
    api()
    .then(data => setResults(data.results))
  }, []) 

  console.log(results)
    return (
      <main className="App">
        <NavBar />
        <header className="App-header">
          <Route exact path="/" render={() => results && <Articles newsPapers={results} />} /> 
          <Route exact path="/detailedView/:id" render={({match}) => {
            const filterArticles = results.find((result) => result.created_date === match.params.id)
            if(filterArticles) {
              return(
                <DetailedView articles={filterArticles}/>
              )
            }
        }}
        />
        </header>
      </main>
    );
}

export default App;
