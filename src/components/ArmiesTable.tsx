import React from "react";
import {
	Button,
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Toolbar,
	Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Army from "../models/Army";

const columns = ["NAME", "UNITS", "STRATEGY"];

interface Props {
	armies?: Army[];
	onAddArmy: () => void;
}
const ArmiesTable: React.FC<Props> = ({armies, onAddArmy}) => {

	return (
		<TableContainer component={Paper} sx={{marginBottom: 2, overflowX: 'auto', backgroundColor: '#440000'}}>
			<Toolbar sx={{flex: 1, px: 0, display:'flex', justifyContent: 'space-between', color: 'white'}}>
				<Typography color="inherit" variant="h5" component="div">
					Armies
				</Typography>
				<Button
					variant="contained"
					color="primary"
					aria-label="filter list"
					onClick={onAddArmy}
					style={{ flexShrink: 0, backgroundColor: '#600101' }}
				>
					<AddIcon style={{ color: "white" }}/>
				</Button>
			</Toolbar>
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
					</TableRow>
				</TableHead>
				<TableBody sx={{border: "1px solid #480000", backgroundColor: 'rgba(66,0,0,0.35)'}}>
					{armies ?
						Array.isArray(armies) && armies.map(army =>
							<TableRow key={army.armyName} sx={{border: "1px solid #480000"}}>
								<TableCell key={army.armyName + "_name"} align="left" sx={{border: "1px solid #480000", color: 'white', fontWeight: 700}}>
									{army.armyName}
								</TableCell>
								<TableCell key={army.armyName + "_units"} align="left" sx={{border: "1px solid #480000", color: 'white', fontWeight: 700}}>
									{army.currentHealth/2 + " / " + army.startingHealth/2}
								</TableCell>
								<TableCell key={army.armyName + "_strategy"} align="left" sx={{border: "1px solid #480000", color: 'white', fontWeight: 700}}>
									{"Attack: " + army.attackStrategy}
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
	);
};

export default ArmiesTable;
