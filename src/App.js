import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the text below to analyze" />
      </div>

    </>
  );
}

export default App;
