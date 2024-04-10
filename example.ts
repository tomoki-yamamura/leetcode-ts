interface User {
  name: string;
  email: string;
  age?: number;
}

let user1: User = {
  name: "john",
  email: "hoge@gmail",
  age: 18,
};

function updateUser(user: User, fieldsToUpdate: Partial<User>) {
  return {...user, ...fieldsToUpdate}
}

console.log(updateUser(user1, {email: "hgoe" }));
