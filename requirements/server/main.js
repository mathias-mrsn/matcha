import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
	origin: 'http://localhost',
	credentials: true, // Active la prise en charge des credentials (cookies, en-têtes d'autorisation, etc.)
  };
  
app.use(cors(corsOptions));

app.use('/', routes)

// app.get('/', async (req, res) => {
// //   try {
// //     const data = { message: 'Hello, World!' };
// //     res.json(data);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// 	console.log("Test reload222");

// });

async function startServer() {
  try {
    await app.listen(port);
    console.log(`Serveur lancé sur le port ${port}`);
  } catch (error) {
    console.error(`Erreur lors du démarrage du serveur : ${error}`);
  }
}

startServer();