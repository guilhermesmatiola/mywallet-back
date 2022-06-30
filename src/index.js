import express from "express";
import cors from "cors";
import { loginUser, createUser} from "./controllers/userController.js";
import { getPosts, createPost} from "./controllers/postsController.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', loginUser);
app.post('/cadastrar', createUser);

app.get('/posts', getPosts);
app.post('/posts', createPost);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(chalk.bold.yellow("server on"));
});