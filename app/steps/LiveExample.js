import React, { Component } from "react";
import {
	ReactiveBase,
	DateRange,
	NumberBox,
	RangeSlider,
	ResultCard
} from "@appbaseio/reactivesearch";
import { dataOperation } from "../service/DataOperation";

require("./styles.scss");

export class LiveExample extends Component {
	dateQuery(value) {
		let query = null;
		if (value) {
			query = [
				{
					"range": {
						"date_from": {
							"lte": moment(value.startDate).format("YYYYMMDD")
						}
					}
				},
				{
					"range": {
						"date_to": {
							"gte": moment(value.endDate).format("YYYYMMDD")
						}
					}
				}
			];
		}
		return query;
	}

	onData(res) {
		return {
			image: res.image,
			title: res.name,
			desc: (
				<div>
					<div className="price">${res.price}</div>
					<span className="host" style={{"backgroundImage": `url(${res.host_image})`}}></span>
					<p>{res.room_type} · {res.accommodates} guests</p>
				</div>
			),
			url: res.listing_url
		};
	}

	render() {
		return (
			<div className="row" style={{"margin": "0"}}>
				<ReactiveBase
					app="housing"
					credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
					type="listing"
					theme="rbc-red"
				>
					<nav>
						<a href="/examples/airbeds" className="brand">Airbeds</a>
					</nav>

					<div className="sensor-wrapper clearfix">
						<DateRange
							componentId="DateRangeSensor"
							appbaseField={["date_from", "date_to"]}
							title="When"
							numberOfMonths={1}
							customQuery={this.dateQuery}
						/>

						<RangeSlider
							componentId="PriceSensor"
							appbaseField="price"
							title="Price Range"
							defaultSelected={{
								start: 10,
								end: 50
							}}
							stepValue={10}
							range={{
								start: 10,
								end: 250
							}}
							rangeLabels={{
								start: "$10",
								end: "$250"
							}}
							react={{
									and: ["DateRangeSensor", "GuestSensor"]
								}}
						/>

						<NumberBox
							componentId="GuestSensor"
							appbaseField="accommodates"
							title="Guests"
							defaultSelected={2}
							data={{
								start: 1,
								end: 16
							}}
						/>
					</div>

					<div className="row result-wrapper clearfix">
						<div className="col s12">
							<div className="row">
								<ResultCard
									componentId="SearchResult"
									appbaseField="name"
									from={0}
									size={12}
									onData={this.onData}
									pagination={true}
									react={{
										and: ["DateRangeSensor", "GuestSensor", "PriceSensor"]
									}}
								/>
							</div>
						</div>
					</div>
				</ReactiveBase>
			</div>
		);
	}
}
