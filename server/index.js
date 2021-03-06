const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
