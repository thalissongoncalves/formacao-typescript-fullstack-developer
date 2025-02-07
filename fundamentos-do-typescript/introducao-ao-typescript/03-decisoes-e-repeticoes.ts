// const num: number = 13;

// if (num > 15) {
//   console.log('Num maior que 15');
// } else if (num === 15) {
//   console.log('Num igual a 15');
// } else {
//   console.log('Num menor que 15');
// }

const typeUser = {
  admin: "Seja bem vindo admin",
  student: "Você é um estudante",
  viewer: "Você pode visualizar",
};

function validateUser(user: string) {
  console.log(typeUser[user as keyof typeof typeUser]);
}

const usuario = "admin";

validateUser(usuario);
validateUser("student");
validateUser("viewer");
