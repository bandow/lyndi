import './../src/styles/common.css';
import './../src/styles/one.scss';
import Layer from './components/layer/layer.js';
const App=function(){
	const NUM=1;
	alert(NUM);
	console.log(layer);
	var dom=document.getElementById("App");
	var layer =new Layer;
	dom.innerHTML=layer.tpl
}
new App();