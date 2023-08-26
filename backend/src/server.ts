import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/config";
import userRoutes from "./routes/User"

const router = express();
// console.log("server");
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });


router.use(express.urlencoded({ extended: true}));

router.use(express.json());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }

  next();
});


router.use('/api', userRoutes);
// router.get('/ping', (req, res, next)=>{
//     console.log("pong");
// })
// console.log(config.server.port);
http.createServer(router).listen(config.server.port), ()=>{
    console.log(`server is running on port ${config.server.port}`);
} 
