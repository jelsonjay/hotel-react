import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				{/*columm1*/}
				<div className='l-footer'>
					<h1>Hotel Leeds</h1>
					<p className='txt-color'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
				</div>
				<ul className='r-footer'>
					<li>
						<h2>Explore</h2>
						<ul className='box'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/rooms'>Our Rooms</Link>
							</li>
							<li>
								<Link to='/services'>Services</Link>
							</li>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</li>
					{/*columm2*/}
					<li className='features'>
						<h2>Address</h2>
						<ul className='box h-box'>
							<li>45 Street Park</li>
							<li>LS 12 HJ85</li>
							<li>Leeds, Uk</li>
						</ul>
					</li>

					{/*columm3*/}
					<li>
						<h2>Need Help</h2>
						<ul className='box'>
							<li>Blog</li>
							<li>Custumer Services</li>
							<li>+255 852 369</li>
						</ul>
					</li>
				</ul>
				<hr />
				<div className='b-footer'>
					<p>
						&copy; {new Date().getFullYear()} Hotel Leeds | All right reverved |
						Terms of Services
					</p>

					<div className='icons'>
						{/*GitHub*/}
						<ul>
							<li>
								<a
									href='http://youtube.com'
									rel='noopener noreferrer'
									target='_black'
								>
									<i className='fa fa-youtube' arial-hidden='ture' />
								</a>
							</li>
							{/*Codepen*/}
							<li>
								<a
									href='http://instagram.com'
									rel='noopener noreferrer'
									target='_black'
								>
									<i className='fa fa-instagram' arial-hidden='ture' />
								</a>
							</li>
							{/*Google*/}
							<li>
								<a
									href='http://google.com'
									rel='noopener noreferrer'
									target='_black'
								>
									<i className='fa fa-google' arial-hidden='ture' />
								</a>
							</li>
							{/*Linkedin*/}
							<li>
								<a
									href='http://likedin.com'
									rel='noopener noreferrer'
									target='_black'
								>
									<i className='fa fa-facebook-square' arial-hidden='ture' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}
