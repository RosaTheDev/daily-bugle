import React, {useEffect, useState} from 'react';
import './App.css';
import api from './apicall';
import {Route} from 'react-router-dom';
import NavBar from './NavComponent/navBar';
import NewsPapers from './NewsPaperComponent/newsPaper';
import SingleArticle from './SingleArticleComponent/SingleArticleComponent';
import LolNotFound from './ErrorHandling/404NotFound';
const App = () =>  {

  const [results, setResults] = useState();
  useEffect(() => {
    api()
    .then(data => setResults(data.results))
  }, []) 

    return (
      <main className="App">
        <NavBar />
        <header className="App-header">
          <Route exact path='/' render={() => results && <NewsPapers newsArticles={results} />} />
          <Route exact path="/DailyBugle/ArticleId:/:id" render={({match}) => {
            const filterArticles = results.find((result) => result.created_date === match.params.id)
            if(filterArticles) {
              return(
                <SingleArticle article={filterArticles}/>
              )
            } else if(filterArticles === undefined) {
              return (
                <LolNotFound/>
              )
            }
        }}
        />
        </header>
      </main>
    );
}

export default App;
