CREATE TABLE cityes (
  id INT PRIMARY KEY,
  city VARCHAR(50),
  guild_id INT,
  FOREIGN KEY (guild_id) REFERENCES guilds(id)
);

CREATE TABLE guilds (
  id INT PRIMARY KEY,
  guild VARCHAR(50),
  employee_id INT,
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE employees (
  id INT PRIMARY KEY,
  employee VARCHAR(50)
);
