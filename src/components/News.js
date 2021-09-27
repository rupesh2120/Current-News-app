import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
	static defaultProps = {
		country: "in",
		pageSize: 6,
		category: "general",
	};

	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	};

	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		};
		document.title = `${this.capitalizeFirstLetter(
			this.props.category
		)} - DailyNews App`;
	}

	async updateNews() {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e53a146f5622479c83119be6bfde7e88&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parseData = await data.json();
		this.setState({
			articles: parseData.articles,
			totalArticles: parseData.totalResults,
			loading: false,
		});
	}

	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e53a146f5622479c83119be6bfde7e88&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parseData = await data.json();
		this.setState({
			articles: parseData.articles,
			totalArticles: parseData.totalResults,
			loading: false,
		});
	}

	handlePrevClick = async () => {
		// let url = `https://newsapi.org/v2/top-headlines?country=${
		// 	this.props.country
		// }&category=${
		// 	this.props.category
		// }&apiKey=e53a146f5622479c83119be6bfde7e88&page=${
		// 	this.state.page - 1
		// }&pageSize=${this.props.pageSize}`;
		// this.setState({ loading: true });
		// let data = await fetch(url);
		// let parseData = await data.json();

		// this.setState({
		// 	page: this.state.page - 1,
		// 	articles: parseData.articles,
		// 	loading: false,
		// });
		this.setState({ page: this.state.page - 1 });
		this.updateNews();
	};

	handleNextClick = async () => {
		// if (
		// 	this.state.page + 1 >
		// 	Math.ceil(this.state.totalArticles / this.props.pageSize)
		// ) {
		// } else {
		// 	let url = `https://newsapi.org/v2/top-headlines?country=${
		// 		this.props.country
		// 	}&category=${
		// 		this.props.category
		// 	}&apiKey=e53a146f5622479c83119be6bfde7e88&page=${
		// 		this.state.page + 1
		// 	}&pageSize=${this.props.pageSize}`;
		// 	this.setState({ loading: true });
		// 	let data = await fetch(url);
		// 	let parseData = await data.json();
		// 	this.setState({
		// 		page: this.state.page + 1,
		// 		articles: parseData.articles,
		// 		loading: false,
		// 	});
		// }
		this.setState({ page: this.state.page + 1 });
		this.updateNews();
	};

	render() {
		return (
			<div className="container my-3">
				<h1 className="text-center">
					DailyNews Top Headlines on{" "}
					{this.capitalizeFirstLetter(this.props.category)}
				</h1>
				{this.state.loading && <Spinner />}
				<div className="row">
					{!this.state.loading &&
						this.state.articles.map((element) => {
							return (
								<div key={element.url} className="col-md-4">
									<NewsItem
										title={element.title ? element.title.slice(0, 45) : ""}
										description={
											element.description
												? element.description.slice(0, 88)
												: ""
										}
										imageUrl={element.urlToImage}
										newsUrl={element.url}
										author={element.author}
										date={element.publishedAt}
									/>
								</div>
							);
						})}
				</div>
				<div className="container d-flex justify-content-between">
					<button
						disabled={this.state.page <= 1}
						type="button"
						className="btn btn-dark"
						onClick={this.handlePrevClick}
					>
						&larr; Previous
					</button>
					<button
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalArticles / this.props.pageSize)
						}
						type="button"
						className="btn btn-dark"
						onClick={this.handleNextClick}
					>
						Next &rarr;
					</button>
				</div>
			</div>
		);
	}
}

export default News;
