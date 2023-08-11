import '../../styles/App.css'

//import components
import Main from './main'
import Quiz from './quiz'
import Result from './result'
// setting up router
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Main />}/>
         <Route path='/quiz' element={<Quiz />}/>
         <Route path='/result' element={<Result />}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
