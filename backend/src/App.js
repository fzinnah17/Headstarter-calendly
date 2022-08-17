
import CalendarHeader from './components/CalenderHeader';
import CalendarScreen from "./screens/CalendarScreen";
import CalendarState from "./Context";
import Form from "./components/Form";

function App() {

  return (
    <div className="container">
      <CalendarState>
        <CalendarHeader />
        <CalendarScreen />
        <Form />
      </CalendarState>

    </div>
  );
}

export default App;