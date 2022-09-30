import { Paper, TextField } from '@mui/material';
import Btn from '../../components/Btn';
import Nav from '../../components/Nav';
import Logo from '../../Constants/assets/Logo';
import './contact.css';
export default function Contact() {
	return (
		<>
			<Nav />
			<Paper elevation={16} className="contact-container">
				<Logo id="logo" />
				<TextField placeholder="Name" margin="normal" />
				<TextField placeholder="Email" margin="normal" />
				<TextField placeholder="Phone" margin="normal" />
				<TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" margin="normal" />
				<Btn variant={'outlined'} title="Send message" />
			</Paper>
		</>
	);
}
