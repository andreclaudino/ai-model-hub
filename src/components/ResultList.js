import React, { Component } from "react";
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import "./ResultList.css"

class ResultList extends Component {
	
	// eslint-disable-next-line
	constructor(props){
		super(props);
	}


	makeCard(model){

		const maxDescriptionlimit = 10;

		return (
			<div key={model.id} className="col-sm-12 col-md-4 mt-1 card .resul-card">
				<Card tag="span">
					<CardImg left width="50px" height="50px" src={'/assets/types/' +model.type + '.svg'} alt={'Modelo do tipo ' + model.type} />
					<CardBody>
						<CardTitle>{model.name}</CardTitle>
						<CardSubtitle>{model.lastUpdate}</CardSubtitle>
						<CardText>
						{((model.description).length > maxDescriptionlimit) ? (((model.description).substring(0,maxDescriptionlimit-3)) + '...') : model.description}
						</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}

	render(){
		const cards = this.props.items.map(this.makeCard);
		return (
			<div className="container col-md-8 result-list-panel">
				<div className="row">
					{cards}
				</div>
			</div>
		);
	}
}

export default ResultList;