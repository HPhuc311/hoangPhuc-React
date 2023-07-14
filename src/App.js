import logo from './logo.svg';
import './App.css';
import FunctionComponent from './DemoComponent/FunctionComponent';
import ClassComponent from './DemoComponent/ClassComponent';


// component lớn nhất trong dự án
// 2 loại component 
// + class component (stateful) < 2019 (lifecycle)
// + function component (stateless) 100%
// 1 component chỉ được phép return về 1 jsx duy nhất
// attribute: viết theo nguyên tắc camelCase 

// JSX: Javasript XML ==> file mở rộng viết html trong js 



function App() {
  return (
    <div className="App">
       <span className='title' tabIndex>HELLO BC47</span>
        <p></p>
        <h1></h1>

        <FunctionComponent></FunctionComponent>
        <ClassComponent></ClassComponent>
    </div>
  );
}

export default App;
