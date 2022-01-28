import React, {useEffect, useState} from "react";
import {Box, CircularProgress, Typography} from "@mui/material";
import {START_GLOBAL_LOADING, STOP_GLOBAL_LOADING} from "../reducers/GlobalReducer";
import useGlobalAppState from "../contexts/useGlobalAppState";
import Battle from "../models/Battle";
import ArmiesTable from "../components/ArmiesTable";

const addNewArmy = (battleId: string) => {
	const url = `http://localhost:8080/addArmyToBattle/${battleId}`;
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
				// setBattles(data.body as Battle[] || undefined);
			}).catch(() =>
				console.error(`Failed to get battles from response`)
			)} else {
			console.error(`Failed to request:`, response.status, response.statusText);
		}
	});
}

const ViewBattlePage: React.FC = ({}) => {
	const [, dispatch] = useGlobalAppState();
	const [battle, setBattle] = useState<Battle | undefined>(undefined);
	const battleId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
	console.log(battleId);

	useEffect(() => {
		//This will fetch the battle on page load
		dispatch({type: START_GLOBAL_LOADING});

		const url = `http://localhost:8080/fetchBattle/${battleId}`;
		fetch(url, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then(response => {
			dispatch({type: STOP_GLOBAL_LOADING});
			if (response.ok) {
				response.json().then(responseJson => {
					const battles = (responseJson).body as Battle[];
					if (battles.length > 0)
						setBattle(battles[0]);
					console.log(battles);
				}).catch(e => console.error(e));
			} else {
				console.error(`Failed to request:`, response.status, response.statusText);
			}
		}).catch(e => console.error(e));
	},[]);

	const handleAddArmy = async () => {
		battleId && addNewArmy(battleId);
	};

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			{battle ?
				<>
					<Typography variant="h4" gutterBottom>
						{`Battle ${battle?.id}`}
					</Typography>
					<ArmiesTable armies={battle.armies} onAddArmy={handleAddArmy}/>
				</>
				:
				<CircularProgress color="inherit" />
			}

		</Box>
	);
};

export default ViewBattlePage;