import React, { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';
export default function App(props) {
	const [name, updateName] = useState('Arthur');
	const [query, updateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + 'b5563b0',
		option: '&s=',
		title: '',
		searchURL: ''
	});
	const [movie, setMovie] = useState({});
	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setMovie(data);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'http://www.omdbapi.com/?',
						apiKey: 'apikey=' + '8d432cb5',
						option: '&s=',
						title: '',
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);
	const handleChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};
	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.apiKey + query.option + query.title
		});
	};
	return (
		<div className="Page-wrapper">
			<h1>Netflix and Chill</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
				/>
				<input type="submit" value="Search Movie" />
			</form>
			<div className={'Page'}></div>
			{Object.keys(movie).length ? <MovieInfo movie={movie} /> : ''}
		</div>
	);
}
