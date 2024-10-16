import { Application, Express, Request, Response } from "express";
import UserRouter from "./routes/user.route";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => res.send(`Hello from Test Service!`));

  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register API routes
  app.use("/api/users", UserRouter);

  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });
}

export default routes;
