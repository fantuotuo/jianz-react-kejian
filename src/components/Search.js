import React from 'react';

class SearchComp extends React.Component{
	onChange(e){
		let value=e.target.value;
		this.props.onChange(value);
	}
	render(){
		return (
			<form className="form-inline" style={{'marginLeft':'15px',marginTop:'10px'}}>
				<div className="form-group">
					<label htmlFor="search">关键字:</label>
					<input 
						id='search' 
						className="form-control" 
						onChange={(e)=>{this.onChange(e)}} 
						type="text" 
						value={this.props.keywords_inner}
						placeholder="请输入搜索关键字"
					/>
				</div>

				<button 
					type="button" 
					className="btn btn-default btn-small" 
					onClick={this.props.onClick}
				>
					查找
				</button>
				<p 
					className={[this.props.blksHide===0?"hide":"","bg-danger"].join(" ")}
					onClick={this.props.onClickClear}
					style={{cursor:"pointer"}}
				>
					此分类下有<strong>{this.props.blksHide}</strong>个课件被隐藏了，点击清空关键字以显示
				</p>
			</form>
		);
	}




}

export default SearchComp;