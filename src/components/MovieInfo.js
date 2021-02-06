import React from 'react';

export default function MovieInfo(props) {
	console.log(props);
	let moviesLibrary = props.movie.Search;
	return (
		<ul>
			{moviesLibrary.map(item => {
				return <li>{item.Title}</li>;
			})}
		</ul>
	);
}
