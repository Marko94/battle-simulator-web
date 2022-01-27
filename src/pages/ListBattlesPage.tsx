import React, {useEffect, useState} from "react";
import {
	Box,
	Button,
	CircularProgress,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Battle from "../models/Battle";

const columns = ["ID", "STATUS"];
const loadBattles = (setBattles: (value: React.SetStateAction<Battle[] | undefined>) => void) => {
	const url = `http://localhost:8080/listBattles`;
	fetch(url, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(response => {
		if (response.ok) {
			response.json().then(data => {
				setBattles(data.body as Battle[] || undefined);
			}).catch(() =>
				console.error(`Failed to get battles from response`)
		)} else {
			console.error(`Failed to request:`, response.status, response.statusText);
		}
	});
}

const ListBattlesPage: React.FC = ({}) => {
	const [battles, setBattles] = useState<Battle[] | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		//This will fetch battles on page load
		loadBattles(setBattles);
	},[]);

	const handleClick = async () => {
		setLoading(true);
		setBattles(undefined);
		loadBattles(setBattles);
		setLoading(false);
	};

	return (
		<Box display="flex" flexDirection="column" alignItems="center" sx={{ height: '60vh', minHeight: 350, overflow: 'hidden', width: "65vw" }}>
			<Typography variant="h4" gutterBottom>
				List of battles
			</Typography>
			<TableContainer sx={{marginBottom: 2}}>
				<Table stickyHeader aria-label="sticky table" sx={{border: "1px solid #480000"}}>
					<TableHead sx={{border: "1px solid #480000"}}>
						<TableRow sx={{border: "1px solid #480000"}}>
							{columns.map((column) => (
								<TableCell
									key={column}
									align={'left'}
									sx={{minWidth: "fit-content", backgroundColor: '#600101', color: 'white', fontWeight: 700, border: "1px solid #480000"}}
								>
									{column}
								</TableCell>
							))}
							<TableCell key={"redirect"} align="center" sx={{backgroundColor: '#600101', border: "1px solid #480000", alignItems: "center"}}>
								<Button
									onClick={handleClick}
									sx={{
										color: 'white',
										display: 'flex',
										width: 'max-content',
										margin: 'auto',
										alignItems: 'center',
										justifyContent: 'center',
										fontWeight: 700,
										px: 4,
										'&:hover': { background: '#440000' },
										'&:disabled': {background: '#600101'},
									}}
									disabled={loading}
								>
									{loading ?
										<CircularProgress style={{ color: "white" }}/>
										:
										<AutorenewIcon style={{ color: "white" }}/>
									}
								</Button>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody sx={{border: "1px solid #480000", backgroundColor: 'rgba(66,0,0,0.35)'}}>
						{battles ?
							battles.map(battle =>
								<TableRow key={battle.id} sx={{border: "1px solid #480000"}}>
									<TableCell key={battle.id + "_id"} align="left" sx={{border: "1px solid #480000", color: 'white', fontWeight: 700}}>
										{battle.id}
									</TableCell>
									<TableCell key={battle.id + "_status"} align="left" sx={{border: "1px solid #480000", color: 'white', fontWeight: 700}}>
										{battle.status}
									</TableCell>
									<TableCell key={battle.id + "_redirect"} align="center" sx={{border: "1px solid #480000", display: "flex", justifyContent: "center"}}>
										<IconButton aria-label="View">
											<OpenInNewIcon style={{ color: "white" }}/>
										</IconButton>
									</TableCell>
								</TableRow>
							)
							:
							<TableRow sx={{border: "1px solid #480000"}}>
								<TableCell align="center" colSpan={3} sx={{border: "1px solid #480000", color: 'white', fontWeight: 700}}>
									<CircularProgress color="inherit" />
								</TableCell>
							</TableRow>
						}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default ListBattlesPage;