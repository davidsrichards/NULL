import bcrypt from "bcrypt";

const saltRound = 10;

export const hashing = (value) => {
  const salt = bcrypt.genSaltSync(saltRound);
  return bcrypt.hashSync(value, salt);
};

// compare

export const compareCode = (plain, hashed) => bcrypt.compareSync(plain, hashed);
