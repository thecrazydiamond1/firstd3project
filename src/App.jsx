import { Routes, Route} from 'react-router-dom';
import SingleFace from './SingleFace';
import ManyFaces from './ManyFaces';
import MainFile from './CircleMovesWithMouse/mainFile';
import Fetch from './playingWithCsv';


const App = ()=>{
  return(
      <Routes>
        <Route path="*" element= {<SingleFace/>}/>
        <Route path="/single" element= {<SingleFace/>}/>
        <Route path="/many" element= {<ManyFaces/>}/>
        <Route path="/movecircle"element={<MainFile/>}/>
        <Route path="/csv" element={<Fetch/>}/>
      </Routes>

  )
}
export default App;