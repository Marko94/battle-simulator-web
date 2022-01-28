import React, {useState} from "react";
import {
	Button,
	CircularProgress,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {useNavigate} from "react-router-dom";
import Battle from "../models/Battle";

const columns = ["ID", "STATUS", "ARMIES"];

interface Props {
	battles?: Battle[];
	setBattles: React.Dispatch<React.SetStateAction<Battle[] | undefined>>;
	loadBattles: (setFunction: any)=>void;
}
const BattlesTable: React.FC<Props> = ({battles, setBattles, loadBattles}) => {
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleRefreshList = async () => {
		setLoading(true);
		setBattles(undefined);
		loadBattles(setBattles);
		setLoading(false);
	};

	const handleRedirect = (battleId: string) => {
		navigate("/battles/" + battleId, {});
	};

	return (
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
								onClick={handleRefreshList}
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
								<TableCell key={battle.id + "_armies"} align="left" sx={{border: "1px solid #480000", color: 'white', fontWeight: 700}}>
									{battle.armies}
								</TableCell>
								<TableCell key={battle.id + "_redirect"} align="center" sx={{border: "1px solid #480000", display: "flex", justifyContent: "center"}}>
									<IconButton aria-label="View" onClick={() => handleRedirect(battle.id)}>
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
	);
};

export default BattlesTable;
