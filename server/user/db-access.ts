import sql from "../db.js";
import { User } from "./user-types.ts";

const DEFAULT_BALANCE = 100;

export async function getUsers() {
  const users = await sql<User[]>`
      select *
      from users
    `;
  return users;
}

export async function getUserById(id: string) {
  const users = await sql<User[]>`
    select *
    from users
    where id = ${id}
  `;
  return users;
}

export async function getUserByEmail(email: string) {
  const users = await sql<User[]>`
    select *
    from users
    where email = ${email}
  `;
  return users;
}

export async function createUser(
  body: Pick<User, "email" | "name" | "balance" | "password">
) {
  const { name, email, password, balance = DEFAULT_BALANCE } = body;
  console.log("body", body);
  const id = crypto.randomUUID();
  const createdAt = new Date(Date.now()).toISOString();

  await sql`
      INSERT INTO users (id, name, balance, email, password, created_at)
      VALUES (${id}, ${name}, ${balance}, ${email}, ${password}, ${createdAt})
    `;
  return { id, name, balance, createdAt };
}

export async function updateUser(
  id: string,
  body: Omit<User, "id" | "createdAt">
) {
  const { name, balance } = body;
  if (name) {
    await sql`
      UPDATE users SET name = '${name}' WHERE id = ${id};
    `;
  }
  if (balance) {
    await sql`
      UPDATE users SET balance = ${balance} WHERE id = ${id};
    `;
  }
  return { id, name, balance };
}
