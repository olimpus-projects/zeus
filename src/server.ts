import { app } from "./app";

app.listen(process.env.PORT || 3000);

console.log(`Server is on in port ${process.env.PORT}`);