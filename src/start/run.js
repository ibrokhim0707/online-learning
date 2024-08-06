const app = require('../start/modules');
const port = process.env.PORT || 8100;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
