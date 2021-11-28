import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import English from './pages/English'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Movies from './pages/Movies'
import Weather from './pages/Weather'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='content container'>
          <Switch>
            <Route exact path='/' component={Movies} />
            <Route path='/weather' component={Weather} />
            <Route path='/english' component={English} />
            <Route component={NotFound} />
          </Switch>
          {/* <English /> */}
          {/* <Weather /> */}
          {/* <Movies /> */}
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
