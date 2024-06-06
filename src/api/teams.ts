import { Router } from 'express';

const teamsRouter = Router();

teamsRouter.get('/', (req, res) => {
    // logica per ottenere gli utenti
    console.log("heyy")
    res.send('teamss');
});


export default teamsRouter;
