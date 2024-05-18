import sql from "../db";

export async function getUsers() {
  const users = await sql`
      select *
      from users
    `;
  return users;
}

export async function getUserById(id) {
  const users = await sql`
    select *
    from users
    where id = ${id}
  `;
  return users;
}

export async function createUser({ name, balance }) {
  const id = crypto.randomUUID();
  const createdAt = Date.now();
  await sql`
      INSERT INTO users (id, name, balance, created_at)
      VALUES (${id}, ${name}, ${balance}, ${createdAt})
    `;
  return { id, name, balance, createdAt };
}

export async function updateUser(id, body) {
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
