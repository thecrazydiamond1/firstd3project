import { Routes, Route} from 'react-router-dom';
import SingleFace from './SingleFace';
import ManyFaces from './ManyFaces';


const App = ()=>{
  return(
      <Routes>
        <Route path="*" element= {<SingleFace/>}/>
        <Route path="/single" element= {<SingleFace/>}/>
        <Route path="/many" element= {<ManyFaces/>}/>
      </Routes>

  )
}
export default App;