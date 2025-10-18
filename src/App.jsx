import { Routes, Route} from 'react-router-dom';
import SingleFace from './SingleFace';
import ManyFaces from './ManyFaces';
import MainFile from './CircleMovesWithMouse/mainFile';


const App = ()=>{
  return(
      <Routes>
        <Route path="*" element= {<SingleFace/>}/>
        <Route path="/single" element= {<SingleFace/>}/>
        <Route path="/many" element= {<ManyFaces/>}/>
        <Route path="/movecircle"element={<MainFile/>}/>
      </Routes>

  )
}
export default App;