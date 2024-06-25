const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Home Page Route'));
// Add more routes as needed

app.get('/api', (req, res) =>
	res.json({name: "oumate", age: 15});
);

app.get('/names', (req, res) => {
	res.json({
		{
			id: 1,
			name: 'oums',
			age: '12',
		},
		{
			id: 2,
			name: 'fred',
			age: 23,
		},
	});
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

