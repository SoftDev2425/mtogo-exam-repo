import { db } from "../database";
import { NotFoundError } from "../utils/NotFoundErrorClass";

export const getUserById = async (id: string) => {
  try {
    let user = await db.selectFrom("Users").selectAll().where("id", "=", id).execute();

    if (user.length === 0) {
      throw new NotFoundError("User not found");
    }

    return user;
  } catch (e) {
    throw e;
  }
};

export async function getAllUsers() {
  try {
    return await db.selectFrom("Users").selectAll().execute();
  } catch (e) {
    console.log(e);
  }
}

export const createUser = async (name: string, password: string) => {};
