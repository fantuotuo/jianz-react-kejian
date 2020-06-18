import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Header=require('./components/Header.js').default;
const {Cards}=require('./components/Cards.js');
const GROUPS=require('./Groups.js').default;

class App extends React.Component{
	constructor(){
		super();

		let blks=[
			{id:"A11",cnName:"舒尔特方格",type:2,pic:""},
			{id:"A111",cnName:"注意选择测评",type:0,pic:""},
			{id:"A12",cnName:"一眼数点",type:3,pic:""},
			{id:"A14",cnName:"注意搜索",type:0,pic:""},
			{id:"A15",cnName:"视觉控制",type:3,pic:""},
			{id:"A17",cnName:"矩阵广度",type:3,pic:""},
			{id:"A21",cnName:"单双判任务",type:1,pic:""},
			{id:"A23",cnName:"曼陀罗",type:0,pic:""},
			{id:"A24",cnName:"限时说数",type:2,pic:""},
			{id:"A26",cnName:"N-back1",type:1,pic:""},
			{id:"A27",cnName:"N-back2",type:1,pic:""},
			{id:"A31",cnName:"划消",type:3,pic:""},
			{id:"A35",cnName:"数字辨别",type:3,pic:"A35.png?v=200523.0"},
			{id:"A36",cnName:"注意察觉",type:0,pic:""},
			{id:"A37",cnName:"两只老虎",type:3,pic:""},
			{id:"A39",cnName:"选择辨识",type:0,pic:""},
			{id:"A41",cnName:"颜色冲突",type:3,pic:""},
			{id:"A42",cnName:"反说图片",type:1,pic:""},
			{id:"A45",cnName:"两两相加",type:3,pic:""},
			{id:"A48",cnName:"心理旋转",type:0,pic:""},
			{id:"A49",cnName:"延时判断",type:1,pic:""},
			{id:"A50",cnName:"双任务操作",type:3,pic:""},
			{id:"A51",cnName:"方向冲突",type:1,pic:""},
			{id:"A52",cnName:"任务切换",type:1,pic:""},
			{id:"A53",cnName:"小写颜色",type:1,pic:""},
			{id:"A57",cnName:"数序分明",type:0,pic:""},
			{id:"A58",cnName:"威斯康辛",type:1,pic:""},
			{id:"A59",cnName:"听觉运算(打印)",type:0,pic:""},
			{id:"A59$",cnName:"听觉运算",type:0,pic:""},
			{id:"A102",cnName:"摘串星星[Beta]",type:3,pic:""},
			{id:"A302",cnName:"找表情[Beta]",type:3,pic:""},

			{id:"E11",cnName:"真实大小",type:0,pic:""},
			{id:"E13",cnName:"一笔画",type:3,pic:""},
			{id:"E14",cnName:"数方块",type:0,pic:""},
			{id:"E15",cnName:"积少成多",type:1,pic:""},
			{id:"E16",cnName:"收集数字",type:3,pic:""},
			{id:"E17",cnName:"空间排序",type:3,pic:""},
			{id:"E22",cnName:"仔细观察",type:0,pic:""},
			{id:"E26",cnName:"同时加工",type:0,pic:""},
			{id:"E28",cnName:"同时既时加工",type:1,pic:""},
			{id:"E103",cnName:"数地盘[Beta]",type:3,pic:""},
			{id:"E106",cnName:"寻找图形[Beta]",type:3,pic:""},

			{id:"B12",cnName:"视觉追随",type:0,pic:""},
			{id:"B13",cnName:"扫视追踪",type:0,pic:""},
			{id:"B14",cnName:"螺旋追踪",type:0,pic:""},
			{id:"B15",cnName:"数星星",type:0,pic:""},
			{id:"B22",cnName:"轮廓整合",type:0,pic:""},
			{id:"B24",cnName:"空间角度",type:0,pic:""},
			{id:"B27",cnName:"形状感知",type:0,pic:""},
			{id:"B29",cnName:"皮包公司",type:0,pic:""},
			{id:"B103",cnName:"射箭涂色[Beta]",type:3,pic:""},
			{id:"B204",cnName:"空间忽略[Beta]",type:3,pic:""},

			{id:"C1",cnName:"听知觉训练",type:0,pic:""},
			{id:"C19",cnName:"听觉转移",type:0,pic:""},
			{id:"C20",cnName:"视听匹配[Beta]",type:0,pic:""},
			{id:"C26",cnName:"人物搜索",type:0,pic:""},
			{id:"C28",cnName:"场景辨识",type:0,pic:""},
			{id:"C29",cnName:"摩斯密码",type:0,pic:""},
			{id:"C101",cnName:"边听边看[Beta]",type:0,pic:""},

			{id:"D14",cnName:"AO星[Beta]",type:3,pic:""},
			{id:"D15",cnName:"点中心",type:3,pic:""},
			{id:"D16",cnName:"镜像练习",type:3,pic:""},
			{id:"D18",cnName:"皮亚诺线",type:3,pic:""},
			{id:"D27",cnName:"卧8练习",type:3,pic:""},
			{id:"D102",cnName:"逢空拍手",type:3,pic:""},
			{id:"D201",cnName:"一笔建构",type:0,pic:""},

			{id:"F10",cnName:"飞行路线",type:2,pic:""},
			{id:"F16",cnName:"火柴盒/#",type:2,pic:""},
			{id:"F19",cnName:"抓三堆",type:2,pic:""},
		].map((obj,index)=>{
			return {...obj,index};
		});

		this.state={
			blks:blks,
			group:0,
			keywords:"",
			keywords_inner:"",
		};
	}
	onClickSearch(){
		this.setState({
			keywords:this.state.keywords_inner
		});
	}
	onChangeSearch(keywords){
		this.setState({
			keywords_inner:keywords
		});
	}
	onClickSearchClear(){
		this.setState({
			keywords:"",
			keywords_inner:""
		});
	}
	onChangeGroup(g){
		this.setState({
			group:g,
			keywords:"",
			keywords_inner:""
		});
	}
	render(){
		let blks,
			blksPre=0;
		let ids=GROUPS[this.state.group].ids;

		if(this.state.group===0){
			blks=this.state.blks;
		}else{
			blks=this.state.blks.filter((obj)=>{
				return ids.indexOf(obj.id)>=0;
			});
			blks.push({id:"",cnName:"...",type:3,pic:"",index:-1});
		}
		blksPre=blks.length;
		let key=this.state.keywords.toLowerCase();
		// let reg=new RegExp("","i");
		// // 防止用户输入特殊代码导致程序中断
		// try{
		// 	reg=new RegExp(this.state.keywords,"i");
		// }catch(e){
		// 	console.log(e);
		// }

		blks=blks.filter((obj)=>{
			return (obj.id.toLowerCase().match(key) || obj.cnName.toLowerCase().match(key)) || obj.id==="";
		});
		let blksHide=blksPre-blks.length;

		let groups=GROUPS.map((obj,index)=>{
			let n=this.state.blks.filter(blk=>{
				return obj.ids.indexOf(blk.id)>=0;
			}).length;
			n=index===0?this.state.blks.length:n;

			return {name:obj.name,n,active:index===this.state.group};
		});

		return (
			<div className="kt-app">
				<Header 
					groups={groups}
					title={"健知在线课件中心"} 
					onChangeGroup={(g)=>{this.onChangeGroup(g)}} 
					onClickSearch={()=>{this.onClickSearch()}} 
					keywords_inner={this.state.keywords_inner}
					onChangeSearch={(keywords)=>{this.onChangeSearch(keywords)}}
					blksHide={blksHide}
					onClickSearchClear={()=>{this.onClickSearchClear()}}
				/>
				<Cards 
					blks={blks}
					onChangeGroup={()=>{this.onChangeGroup(0);}} 
				/>
			</div>
		);
	}
}





// class Footer extends React.Component{
// 	render(){
// 		return (
// 			<div className="kt-footer">
// 				<div>
// 					版权所有：健知教育|儿童注意力读写力训练专家&nbsp;网站备案：粤ICP备12070958号&nbsp;<a title="关于我们" href="/nzj/view.aspx?id=17">关于我们</a>
// 				</div>
// 				<div>
// 					地址：广州市天河区华穗路174号星辰大厦东塔802&nbsp;电话：020-29066529&nbsp;
// 					<script src="http://s84.cnzz.com/stat.php?id=4617020&web_id=4617020&show=pic" language="JavaScript">&nbsp;&nbsp;</script>
// 				</div>
// 			</div>
// 		);
// 	}
// }


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
