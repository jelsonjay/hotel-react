import React, { Component } from 'react';
import { FaWifi, FaSwimmer, FaPaw, FaUtensils } from 'react-icons/fa';
import Title from './Title';
import StarRating from '../components/StarRating';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaWifi color='orange' size='6rem' />,
				title: 'Free FaWifi',
				info: 'Lorem ispsum dolor sit consectetour!'
			},
			{
				icon: <FaUtensils color='orange' size='6rem' />,
				title: 'Restaurant',
				info: 'Lorem ispsum dolor sit consectetour!'
			},
			{
				icon: <FaSwimmer color='orange' size='6rem' />,
				title: 'Free Swimming Pool',
				info: 'Lorem ispsum dolor sit consectetour!'
			},
			{
				icon: <FaPaw color='orange' size='6rem' />,
				title: 'Pets allowed',
				info: 'Lorem ispsum dolor sit consectetour!'
			}
		]
	};

	render() {
		return (
			<section className='services'>
				<Title title='our hotel services' />
				<div className='services-center'>
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className='services'>
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
				<StarRating />
			</section>
		);
	}
}
