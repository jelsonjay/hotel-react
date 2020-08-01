import React, { Component } from 'react';
import {
	FaFish,
	FaGlassCheers,
	FaMugHot,
	FaGlassMartiniAlt
} from 'react-icons/fa';
import Title from './Title';
import StarRating from '../components/StarRating';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaGlassMartiniAlt color='orange' size='9rem' />,
				title: 'Bar',
				info: 'Lorem ispsum dolor sit consectetour!'
			},
			{
				icon: <FaFish color='orange' size='9rem' />,
				title: 'Restaurant',
				info: 'Lorem ispsum dolor sit consectetour!'
			},
			{
				icon: <FaGlassCheers color='orange' size='9rem' />,
				title: 'Free Drinks',
				info: 'Lorem ispsum dolor sit consectetour!'
			},
			{
				icon: <FaMugHot color='orange' size='9rem' />,
				title: 'Breakfast',
				info: 'Lorem ispsum dolor sit consectetour!'
			}
		]
	};

	render() {
		return (
			<section className='services'>
				<Title title='dining in our hotel' />
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
