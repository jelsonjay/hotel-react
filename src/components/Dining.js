import React from 'react';
import Hero from '../components/DiningHero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from './DiningServices';

export default function Dining() {
	return (
		<>
			<Hero>
				<Banner
					title='dining in leeds'
					subtitle='With a welcoming and relaxed approach to dining'
				>
					<Link to='/rooms' className='btn-primary'>
						our rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
		</>
	);
}
