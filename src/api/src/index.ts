import express from 'express'
import cors from 'cors';
const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors());

app.listen(3000, () => {
    console.log("Start on port 3000.")
});

app.get('/', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify({ ok: true, body: { message: "hello world!" } }));
});