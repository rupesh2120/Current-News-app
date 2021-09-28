import { getByTitle } from "@testing-library/dom";
import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl, author, date } = this.props;
		return (
			<div className="my-3">
				<div className="card">
					{/* <img
						src={
							imageUrl
								? imageUrl
								: "https://c.ndtvimg.com/2021-09/g4jtibg8_assam-boats-crash_625x300_08_September_21.jpg"
						}
						className="card-img-top"
						alt="..."
					/> */}
					<div className="card-body">
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">Click on below link to read more</p>
						<p className="card-text">
							<small className="text-muted">
								Author {author ? author : "Unknow"}
							</small>
						</p>
						<a
							rel="noreferrer"
							href={newsUrl}
							target="_blank"
							className="btn btn-sm btn-dark"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
