
import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

export default function TransitionAlerts() {
	const [open, setOpen] = React.useState(true);

	return (
		<div className="container w-25">
			<Box sx={{ width: '100%' }}>
				<Collapse in={open}>
					<Alert
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setOpen(false);
								}}
							>
								<button>Click me</button>
							</IconButton>
						}
						sx={{ mb: 2 }}
						severity="error"
					>
						Faltan Datos
					</Alert>
				</Collapse>
			</Box>
			
		</div>
	);
}
