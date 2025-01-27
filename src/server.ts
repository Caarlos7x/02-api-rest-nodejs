import { app } from './app';
import { env } from './env';

const port = process.env.PORT || 3333;

app
  .listen({
    port: Number(port),
  })
  .then(() => {
    console.log(`Server started on port ${port}`);
  });








// import { app } from './app';
// import { env } from './env';

// app
//   .listen({
//     port: env.PORT,
//   })
//   .then(() => {
//     console.log("Server started on port 3333");
//   });
