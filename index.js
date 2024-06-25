const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Home Page Route'));
// Add more routes as needed

app.get('/api', (req, res) => {
	res.json({ name: 'oumate', age: 15 });
});

app.get('/names', (req, res) => {
	const names = [
		{ id: 1, name: 'oumate' },
		{ id: 2, name: 'oumate' },
		{ id: 3, name: 'oumate' },
		{ id: 4, name: 'oumate' },
		{ id: 5, name: 'oumate' },
		{ id: 6, name: 'oumate' },
		{ id: 7, name: 'oumate' },
		{ id: 8, name: 'oumate' },
		{ id: 9, name: 'oumate' },
		{ id: 10, name: 'oumate' },
		{ id: 11, name: 'oumate' },
		{ id: 12, name: 'oumate' },
		{ id: 13, name: 'oumate' },
		{ id: 14, name: 'oumate' },
		{ id: 15, name: 'oumate' },
		{ id: 16, name: 'oumate' },
		{ id: 17, name: 'oumate' },
		{ id: 18, name: 'oumate' },
		{ id: 19, name: 'oumate' },
		{ id: 20, name: 'oumate' },
	];
	res.json(names);
});

const port = process.env.PORT || 3030;
app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
