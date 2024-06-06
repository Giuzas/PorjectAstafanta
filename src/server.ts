import express from 'express';
import teamsRouter from './api/teams';

const app = express();
app.use(express.json());


// Configurazione delle rotte
app.use('/teams', teamsRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});

export default app;
