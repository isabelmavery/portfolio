import bcrypt from "bcrypt";

import { getUserByEmail, createUser } from "./db-access";

export const registerUser = async ({ name, email, password, balance }) => {
  const [foundUser] = await getUserByEmail(email);

  if (!foundUser) {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({
      name,
      email,
      password: hashPassword,
      balance,
    });

    return { id: newUser.id, name, email, balance };
  } else {
    throw new Error("User already created with that email");
  }
};

export const loginUser = async ({ email, password }) => {
  const [foundUser] = await getUserByEmail(email);

  if (foundUser) {
    const submittedPassword = password;
    const storedPassword = foundUser.password;

    const passwordMatch = await bcrypt.compare(
      submittedPassword,
      storedPassword
    );

    if (passwordMatch) {
      const { id, name, balance } = foundUser;
      return { id, name, email, balance };
    } else {
      throw new Error(`Invalid password`);
    }
  } else {
    throw new Error("Failed to find an account with the provided email");
  }
};
