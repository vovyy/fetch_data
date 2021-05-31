
import './App.css';
import ArticleList from './component/ArticleList';
import EditForm from './component/EditForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
  
  <Switch>
        <Route exact path="/">
          <ArticleList/>
        </Route>
        <Route path="/editform/:id">
          <EditForm title="gdgdg" content='article.content' articles=""/>
        </Route>
      </Switch>
        
    </div>
  </Router>
  );
}

export default App;
