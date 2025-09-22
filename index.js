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

console.log(checkPassword("Hola1234", "Hola1234")); // true
console.log(checkPassword("hola", "hola")); // false
console.log(checkPassword("Hola1234", "hola1234")); // false
console.log(checkPassword("Hola1", "Hola1")); // false (menos de 8 caracteres)
console.log(checkPassword("holA1234", "holA1234")); // true