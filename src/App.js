import logo from './logo.svg';
import './App.css';
import BTComponent from './BTComponent/BTComponent';
import BindingData from './BindingData/BindingData';
import RenderWithCondition from './RenderWithCondition/RenderWithCondition';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleComponent from './StyleComponent/StyleComponent';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import State from './State/State';
import DemoProps from './Props/DemoProps';
import BTShoeShop from './BTShoeShop/BTShoeShop';

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
        <BTComponent></BTComponent>

        <BindingData></BindingData>

        <RenderWithCondition></RenderWithCondition>

        <HandleEvent></HandleEvent>

        <StyleComponent></StyleComponent>

        <RenderWithMap/>

        <State></State>

        <DemoProps></DemoProps>

        <BTShoeShop></BTShoeShop>
    </div>
  );
}

export default App;
