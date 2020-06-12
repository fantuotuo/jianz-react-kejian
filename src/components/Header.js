import React from 'react';

const img_logo =require("../images/logo.png");
import Search from './Search.js';

class Header extends React.Component{
	render(){
		let btns=this.props.groups.map((obj,index)=>{
			let className=obj.active?" active":"";
			return (
				<button className={"btn btn-info"+className} key={index} onClick={()=>{this.props.onChangeGroup(index)}}>
					{obj.name} <span className="badge">{obj.n}</span>
				</button>
			)
		})
		return (
			<div className="kt-header">
				<div className="kt-header-top">
					<div className="kt-logo">
						<img src={img_logo} alt="健知教育logo" />
					</div>
					<div className="kt-title">{this.props.title}</div>
					<div className="kt-header-blks">
						<div className="kt-header-blk c1">教师用书</div>
						<div className="kt-header-blk c4">学生用书</div>
						<div className="kt-header-blk c2">教学卡片</div>
						<div className="kt-header-blk c3">游戏素材</div>
					</div>
				</div>
				
				<div className="kt-hr">

				</div>

				<div className="btn-group" style={{'marginLeft':'15px'}}>
					{btns}
				</div>

				<Search 
					onClick={this.props.onClickSearch}
					keywords_inner={this.props.keywords_inner} 
					onChange={this.props.onChangeSearch}
					blksHide={this.props.blksHide}
					onClickClear={this.props.onClickSearchClear}
				/>
			</div>
		);
	}
}

export default Header;