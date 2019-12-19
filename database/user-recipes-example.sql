CREATE TABLE `user` (
	`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`password` text NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `unique-email-user` (`email`)
);

CREATE TABLE `recipe` (
	`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	`title` varchar(50) NOT NULL,
	`ingredients` text DEFAULT NULL,
	`direction` text DEFAULT NULL,
	`userId` bigint(20) unsigned NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `unique-title-recipe` (`title`),
	KEY `fk-user-recipe` (`userId`),
	CONSTRAINT `fk-constr-user-recipe` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
);