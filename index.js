const express = require('express');
const app = express();

console.log("Hello world");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
