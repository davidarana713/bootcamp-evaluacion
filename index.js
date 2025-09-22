const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function checkPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    return false;
  }

  const minLength = /.{8,}/;
  const hasUpperCase = /[A-Z]/;
  const hasNumber = /[0-9]/;

  if (minLength.test(password) && hasUpperCase.test(password) && hasNumber.test(password)) {
    return true;
  }

  return false;
}
app.post('/check-password', (req, res) => {
  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword) {
    return res.status(400).json({ error: 'Both password and confirmPassword are required' });
  }

  const isValid = checkPassword(password, confirmPassword);
  return res.json({ isValid });
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});