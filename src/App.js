import './App.css';
import Calc from './Calc';
import ComboBox from './ComboBox'
import StudentsList from './StudentsList'


const App = () => {
  
  return(
    <div className='App'>
      <ComboBox></ComboBox> <hr/>
      <Calc></Calc> <hr/>
      <StudentsList></StudentsList> 
    
    </div>
  )}

export default App
