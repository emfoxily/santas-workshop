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
    user_first_name VARCHAR(255), 
    user_last_name VARCHAR(255), 
    username VARCHAR(255), 
    user_password VARCHAR(255), 
    user_avatar VARCHAR(255), 
    user_messages VARCHAR(255)
);