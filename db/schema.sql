DROP TABLE IF EXISTS elves;
DROP TABLE IF EXISTS users;

CREATE TABLE elves(
    elf_id serial PRIMARY KEY, 
    elf_name VARCHAR(255), 
    elf_avatar VARCHAR(255), 
    elf_messages TEXT []
);

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    username VARCHAR(255) NOT NULL, 
    user_password VARCHAR(255) NOT NULL, 
    user_avatar VARCHAR(255), 
    user_messages VARCHAR(255)
);