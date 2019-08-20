import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/theme';
import Nav from './components/Nav';
import Loading from './components/Loading';

const Popular = React.lazy(() => import ('./components/Popular'));
const Battle = React.lazy(() => import ('./components/Battle'));
const Result = React.lazy(() => import ('./components/Result'));


function App () {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => setTheme((theme) => theme === 'light' ? 'dark' : 'light');
  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className="container">
              <Nav toggleTheme={toggleTheme} />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' component={Popular} />
                  <Route exact path='/battle' component={Battle} />
                  <Route path='/battle/results' component={Result}/>
                  <Route render={() => <h1>404 Page Not Found</h1>} />
                </Switch>
              </React.Suspense>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
