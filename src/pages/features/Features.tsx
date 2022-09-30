import { Card, Typography } from '@mui/material';
import Nav from '../../components/Nav';
import './features.css';
const features = [
	{
		id: 1,
		url: 'https://raw.githubusercontent.com/prashantkr006/assets/master/images/feature1.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit eros vitae nulla sodales viverra. Donec libero turpis, viverra ut commodo id, congue at mi. Nulla rutrum convallis lectus ac vestibulum. Suspendisse potenti. Sed arcu tortor, dictum ut tincidunt ut, laoreet eget sem. Donec ut massa id dui vulputate aliquet in ut metus. Fusce maximus feugiat lacus in congue. Etiam ut pellentesque nulla, vel finibus mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eu gravida enim, vel tincidunt velit. Morbi tempor tincidunt odio eget tincidunt. Integer rutrum dolor vitae lacinia posuere.',
		title: 'feature 1'
	},
	{
		id: 2,
		url: 'https://raw.githubusercontent.com/prashantkr006/assets/master/images/feature2.jpg',
		description:
			'Vivamus aliquam molestie nunc ac porta. Cras ornare vitae massa elementum fringilla. Proin dignissim libero eu lectus volutpat, sit amet euismod nibh sagittis. Sed enim ex, hendrerit sed dui ac, egestas tempor magna. Fusce ut tempus nisl, sed finibus neque. Maecenas commodo dui in egestas lobortis. Nam pulvinar suscipit mollis. Mauris ut nisi ut purus convallis accumsan quis fermentum ante. Nulla vitae elit a leo tincidunt pharetra varius pulvinar mauris. Sed consectetur purus nec turpis commodo, ut eleifend est vulputate. Aliquam ut lectus lacus. Praesent sollicitudin placerat dignissim.',
		title: 'feature 2'
	},
	{
		id: 3,
		url: 'https://raw.githubusercontent.com/prashantkr006/assets/master/images/feature3.jpg',
		description:
			'Curabitur ut augue sit amet mauris facilisis finibus. Pellentesque cursus laoreet ante, a dignissim diam dapibus sed. Pellentesque tellus ex, laoreet at mollis et, cursus ac urna. Morbi rhoncus tempus tortor, eget auctor justo fringilla quis. Nam viverra, lacus sed eleifend feugiat, magna ligula ullamcorper ex, eget ornare libero eros eget est. Nullam dapibus erat in commodo suscipit. Nulla nec augue ante. Integer congue mattis elit in dignissim. Donec tortor lacus, venenatis luctus vehicula at, rutrum ac neque. Quisque sit amet diam purus. Curabitur hendrerit luctus accumsan. Vestibulum eu faucibus sem, a imperdiet velit. Vivamus at tellus eros.',
		title: 'feature 3'
	},
	{
		id: 4,
		url: 'https://raw.githubusercontent.com/prashantkr006/assets/master/images/feature4.jpg',
		description:
			'Nunc interdum nisl justo, ut blandit nibh viverra non. Proin at felis in enim porttitor varius. Curabitur in condimentum lacus. Vivamus auctor mollis quam, eget euismod dolor vestibulum non. Cras rhoncus, lorem eget tempus aliquet, lacus nisl ultrices purus, ac ornare nibh nisl nec mauris. Aenean pulvinar justo vitae blandit tempus. Pellentesque at efficitur diam, vitae ullamcorper lacus. Praesent pulvinar mauris non magna sagittis auctor. Donec auctor sagittis diam sed vehicula.',
		title: 'feature 4'
	}
];

export default function Features() {
	return (
		<div>
			<Nav />
			<div className='body'>
				<div className="feature-container">
					<img id="img1" src={features[0].url} width="800px" height="auto" alt="feature1" />
					<div className="feature">
						<Typography variant="h2">{features[0].title}</Typography>
						<Typography padding={10} textAlign={'justify'} fontWeight="400" variant="inherit">
							{features[0].description}
						</Typography>
					</div>
				</div>
				<div className="feature-container reverse">
					<img id="img2" src={features[1].url} width="740px" height="auto" alt="feature1" />
					<div className="feature">
						<Typography variant="h2">{features[1].title}</Typography>
						<Typography padding={10} textAlign={'justify'} fontWeight="400" variant="inherit">
							{features[1].description}
						</Typography>
					</div>
				</div>
				<div className="feature-container">
					<img id="img1" src={features[2].url} width="800px" height="auto" alt="feature1" />
					<div className="feature">
						<Typography variant="h2">{features[2].title}</Typography>
						<Typography padding={10} textAlign={'justify'} fontWeight="400" variant="inherit">
							{features[2].description}
						</Typography>
					</div>
				</div>
				<div className="feature-container reverse">
					<img id="img2" src={features[3].url} width="740px" height="auto" alt="feature1" />
					<div className="feature">
						<Typography variant="h2">{features[3].title}</Typography>
						<Typography padding={10} textAlign={'justify'} fontWeight="400" variant="inherit">
							{features[3].description}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}
