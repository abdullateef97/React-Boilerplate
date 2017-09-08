 const React = require('react');
 const ReactDOM = require('react-dom')
 const { BrowserRouter, Route,Switch,HashRouter} = require('react-router-dom')
//  const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const main = require('main')

 
// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$('document').foundation();

//load app.css
require('style-loader!css-loader!sass-loader!applicationStyles')
  
  ReactDOM.render(
          <HashRouter>
          <div className="container">
  
   <Switch>
 <Route exact path='/' component={main}/> 
<Route render = {function(){
  return <p>Page not found</p>
}}/>
     </Switch>
     
          </div>
 
          </HashRouter>,
            document.getElementById('app')
        )