import './App.css';
import CalendarList from './components/CalendarList';
import CalendarForm from './components/CalendarForm';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (<div className='m-4' style={{ height: '100vh', minHeight: '500px' }}>
    <h4 className='text-center mt-3'>Custom Calendar Component</h4>
    <div className='mt-4'><CalendarForm /></div>
    <div className='mt-4'><CalendarList /></div>
  </div>
  );
}

export default App;
