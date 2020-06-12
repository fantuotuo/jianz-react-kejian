import React from 'react';

class Cards extends React.Component{
	render(){
		let blks=this.props.blks;
		
		// let height=Math.ceil(blks.length/5)*230;

		let cards=blks.map((value,index)=>{
			let first=index%5===0;
			first=false;
			// let top=Math.floor(index/5)*230,
			// 	left=(index%5)*256;

			return (
				<Card 
					key={value.index} 
					id={value.id} 
					type={value.type} 
					cnName={value.cnName} 
					pic={value.pic} 
					first={first} 
					// top={top}
					// left={left}
					onChangeGroup={()=>{this.props.onChangeGroup()}}
				/>
			)
		});

		return (
			<div className="kt-cards">
				{cards}
			</div>
		);
	}
}
class Card extends React.Component{
	render(){
		let className=" c"+this.props.type;
		if(this.props.first) className+=" first";

		let txt=this.props.id.replace(/\$/g,"")+" "+this.props.cnName;
		let Beta="";
		if(txt.indexOf("[Beta]")>=0){
			txt=txt.replace(/\[Beta\]/g,"");
			Beta="[Beta]";
		}

		if(this.props.id===""){
			return (
				<div className="kt-card-wrapper" style={{"height":"230px"}}>
				<div className={"kt-card"+className}>
					<a title={"所有课件"} target="_blank" onClick={()=>{this.props.onChangeGroup()}}>
						<div className="pic">
							<div style={{"fontSize":"2rem"}}>
								所有课件
							</div>
						</div>
						<div className="title">
							{txt}
							<span className="beta">{Beta}</span>
						</div>
					</a>
				</div>
				</div>
			);
		}else{
			return (
				<div className="kt-card-wrapper" style={{"height":"230px"}}>
				<div className={"kt-card"+className}>
					<a href={"./"+this.props.id} title={"健知在线课件-"+this.props.cnName} target="_blank">
						<div className="pic">
							<img alt={"健知在线课件-"+this.props.cnName} src={"./images/"+(this.props.pic?this.props.pic:this.props.id+".png")} />
						</div>
						<div className="title">
							{txt}
							<span className="beta">{Beta}</span>
						</div>
					</a>
				</div>
				</div>
			);
		}
	}
}





export {Cards,Card};