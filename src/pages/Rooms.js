import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
	return (
		<>
			<Hero hero='roomsHero'>
				<Banner
					title='luxury hotel rooms at leeds'
					subtitle='comfortable spacious rooms'
				>
					<Link to='/' className='btn-primary'>
						back to home page
					</Link>
				</Banner>
			</Hero>
			<RoomContainer />
		</>
	);
};

export default Rooms;
