use matcha_db;

create table users (id int, name varchar(30), age int, gender int, description text);

insert into users values (1, "Liena", 25, 2, "Bonjour, je m'appelle Liena et j'adore les BD et les chats");
insert into users values (2, "Mathias", 20, 1, "Bonjour, je m'appelle Mathias et je suis sur cette application dans l'espoir de matcher avec Henry Cavill");
