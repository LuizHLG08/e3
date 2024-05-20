import { app } from "./app";

const port : number = Number(process.env.PORT);

app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});