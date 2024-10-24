import dotenv from "dotenv";
import createServer from "./utils/server";
import { db } from "./database";

dotenv.config();

export const app = createServer();
const port = process.env.PORT || 8000;

console.log({
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: String(process.env.POSTGRES_PASSWORD),
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  max: 10,
});

console.log(process.env.PGUSER);

async function main() {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port http://localhost:${port}`);
  });
}

main().then(() => {});
