CREATE TABLE IF NOT EXISTS `users` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  description varchar(255) NULL,
  published BOOLEAN DEFAULT false,
  extra LONGTEXT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


