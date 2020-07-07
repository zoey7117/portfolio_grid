import React from 'react';
import simon2 from '../../assets/simon2.jpg';

const SimonProject = () => {
	return (
		<div className="solo-card">
			<a href="https://colorpicksimon.netlify.app">
				<img src={simon2} className="project-solo" alt="game home page" />
			</a>

			<h3>
				<strong>Color Pick Simon</strong> is variation of a childhood game.<br />• In order to win, you match
				color sequences a total of 10 times.<br />• Sequences start with one color, and then add one to each
				sucessful sequence.<br />• Built with CSS, HTML and Javascript.
			</h3>
		</div>
	);
};

export default SimonProject;
