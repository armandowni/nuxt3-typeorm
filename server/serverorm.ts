// import "reflect-metadata";
import { AppDataSource } from "./datasource";

async function server() {
  await AppDataSource.initialize()
    .then((conn) => {
      console.log(`load orm connection`);
    })
    .catch((err) =>
      console.error("Error during Data Source initialization:", err)
    );

  return ;
}

export default server;
