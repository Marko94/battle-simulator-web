import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import Battle from "../models/Battle";
import BattlesTable from "../components/BattlesTable";

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

	useEffect(() => {
		//This will fetch battles on page load
		loadBattles(setBattles);
	},[]);

	return (
		<Box display="flex" flexDirection="column" alignItems="center" sx={{ height: '65vh', minHeight: 380, overflow: 'hidden', width: "65vw" }}>
			<Typography variant="h4" gutterBottom>
				List of battles
			</Typography>
			<BattlesTable battles={battles} setBattles={setBattles} loadBattles={loadBattles}/>
		</Box>
	);
};

export default ListBattlesPage;