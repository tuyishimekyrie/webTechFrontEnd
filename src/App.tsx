import Login from "./components/Login";
import DisplayStudents from "./components/DisplayStudents";
import "./index.css"
const App = () => {
  return (
    <div className="app">
      {/* <h1>First React App( Website Technology)</h1>
      <form>
        <div>
          <label htmlFor="">UserName</label>
          <input type="text" name="" id=""  placeholder="Type Your UserName"/>
        </div>
      </form> */}
      <Login />
      <DisplayStudents/>
    </div>
  );
};

export default App;
