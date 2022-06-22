import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import loginRouter from './routes/login';
import teamsRouter from './routes/teams';
import matchesRouter from './routes/matches';
import leaderboardRouter from './routes/leaderboard';

class App {
  public app: express.Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    // ...
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use('/login', loginRouter);
    this.app.use('/teams', teamsRouter);
    this.app.use('/matches', matchesRouter);
    this.app.use('/leaderboard', leaderboardRouter);
    this.app.use(errorMiddleware);
    // ...
  }

  // ...
  public start(PORT: string | number): void {
    // ...
    this.app.listen(PORT, () => console.log(`Listen to PORT: ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
