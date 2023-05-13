import app from "app";
import { connectToDatabase } from "@config/index";

connectToDatabase();

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
