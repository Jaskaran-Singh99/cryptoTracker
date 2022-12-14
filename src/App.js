import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Header from './components/Header'
import Coins from './components/coins'
import Exchanges from './components/exchanges'
import CoinDetails from './components/coinsDetails'
import Home from './components/home'

function App (){
  return(
    <Router>
      <Header/>
      <Routes>
       <Route  path='/' element={<Home/>}/>
        <Route exact path='/Coins' element={<Coins/>}></Route>
        <Route exact path='/Exchanges' element={<Exchanges/>}></Route>
        <Route exact path='/coin:id' element={<CoinDetails/>}></Route> 
      </Routes>
    </Router>
  )
}
export default App;
