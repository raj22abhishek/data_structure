CREATE SCHEMA `explorehome`;

CREATE TABLE `explorehome`.`user` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `roleId` BIGINT NOT NULL,
  `firstName` VARCHAR(50) DEFAULT NULL,
  `lastName` VARCHAR(50) DEFAULT NULL,
  `mobile` VARCHAR(15),
  `email` VARCHAR(50),
  `passwordHash` VARCHAR(32) NOT NULL,
  `registeredAt` DATETIME NOT NULL,
  `lastLogin` DATETIME DEFAULT NULL,
  `intro` TINYTEXT DEFAULT NULL,
  `profile` TEXT DEFAULT NULL
);

CREATE TABLE `explorehome`.`role` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(100) NOT NULL,
  `description` TINYTEXT,
  `active` TINYINT(1) NOT NULL DEFAULT 0,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME DEFAULT NULL
);

CREATE TABLE `explorehome`.`permission` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(100) NOT NULL,
  `description` TINYTEXT,
  `active` TINYINT(1) NOT NULL DEFAULT 0,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME DEFAULT NULL
);

CREATE TABLE `explorehome`.`role_permission` (
  `roleId` BIGINT NOT NULL,
  `permissionId` BIGINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME
);

CREATE TABLE `explorehome`.`builder` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `contact_person` VARCHAR(50) DEFAULT NULL,
  `userId` BIGINT NOT NULL,
  `name` VARCHAR(50) DEFAULT NULL,
  `mobile` VARCHAR(15),
  `email` VARCHAR(50),
  `description_html` VARCHAR(32) NOT NULL,
  `office_map_url` VARCHAR(32) NOT NULL
);

CREATE TABLE `explorehome`.`property` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) DEFAULT NULL,
  `heading` VARCHAR(50) DEFAULT NULL,
  `sub_heading` VARCHAR(50) DEFAULT NULL,
  `address` VARCHAR(50) DEFAULT NULL,
  `mobile` VARCHAR(15),
  `email` VARCHAR(50),
  `description_html` VARCHAR(32) NOT NULL,
  `lat` VARCHAR(32) NOT NULL,
  `lon` VARCHAR(32) NOT NULL,
  `map_url` VARCHAR(32) NOT NULL,
  `desktop_image_url` VARCHAR(250) NOT NULL,
  `mob_image_url` VARCHAR(250) NOT NULL,
  `logo_url` VARCHAR(250) NOT NULL,
  `areaId` BIGINT NOT NULL
);

CREATE TABLE `explorehome`.`city` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) DEFAULT NULL,
  `country` VARCHAR(50) DEFAULT NULL
);

CREATE TABLE `explorehome`.`area` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) DEFAULT NULL,
  `pincode` VARCHAR(50) DEFAULT NULL,
  `cityId` BIGINT NOT NULL,
  `nearby_html` VARCHAR(250) NOT NULL
);

CREATE TABLE `explorehome`.`builder_property` (
  `builderId` BIGINT NOT NULL,
  `propertyId` BIGINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME
);

CREATE TABLE `explorehome`.`layout_details` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) DEFAULT NULL,
  `heading` VARCHAR(50) DEFAULT NULL,
  `sub_heading` VARCHAR(50) DEFAULT NULL,
  `description_html` VARCHAR(32) NOT NULL,
  `desktop_image_url` VARCHAR(250) NOT NULL,
  `mob_image_url` VARCHAR(250) NOT NULL,
  `logo_url` VARCHAR(250) NOT NULL,
  `layoutId` BIGINT NOT NULL,
  `propertyId` BIGINT NOT NULL
);

CREATE TABLE `explorehome`.`layout` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `layout_name` VARCHAR(50) DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME
);

CREATE TABLE `explorehome`.`review` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(50) NOT NULL,
  `image_url` VARCHAR(250) DEFAULT NULL,
  `active` TINYINT(1) NOT NULL DEFAULT 0,
  `upvote` VARCHAR(50) DEFAULT NULL,
  `downvote` VARCHAR(50) DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `propertyId` BIGINT NOT NULL
);

CREATE TABLE `explorehome`.`sub_review` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(50) NOT NULL,
  `image_url` VARCHAR(250) DEFAULT NULL,
  `active` TINYINT(1) NOT NULL DEFAULT 0,
  `upvote` VARCHAR(50) DEFAULT NULL,
  `downvote` VARCHAR(50) DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `parentId` BIGINT NOT NULL
);

CREATE TABLE `explorehome`.`rating` (
  `id` BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `original` TINYINT(1) NOT NULL DEFAULT 0,
  `internal` TINYINT(1) NOT NULL DEFAULT 0,
  `createdAt` DATETIME NOT NULL,
  `propertyId` BIGINT NOT NULL
);

ALTER TABLE `explorehome`.`builder` ADD CONSTRAINT `fk_usr_user` FOREIGN KEY (`userId`) REFERENCES `explorehome`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`role_permission` ADD CONSTRAINT `fk_rp_role` FOREIGN KEY (`roleId`) REFERENCES `explorehome`.`role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`role_permission` ADD CONSTRAINT `fk_rp_permission` FOREIGN KEY (`permissionId`) REFERENCES `explorehome`.`permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`user` ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`roleId`) REFERENCES `explorehome`.`role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`rating` ADD CONSTRAINT `fk_prtng_property` FOREIGN KEY (`propertyId`) REFERENCES `explorehome`.`property` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`review` ADD CONSTRAINT `fk_pr_property` FOREIGN KEY (`propertyId`) REFERENCES `explorehome`.`property` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`layout_details` ADD CONSTRAINT `fk_ly_layout` FOREIGN KEY (`layoutId`) REFERENCES `explorehome`.`layout` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`layout_details` ADD CONSTRAINT `fk_lp_property` FOREIGN KEY (`propertyId`) REFERENCES `explorehome`.`property` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`builder_property` ADD CONSTRAINT `fk_bp_builder` FOREIGN KEY (`builderId`) REFERENCES `explorehome`.`builder` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`builder_property` ADD CONSTRAINT `fk_bp_property` FOREIGN KEY (`propertyId`) REFERENCES `explorehome`.`property` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`area` ADD CONSTRAINT `fk_cty_city` FOREIGN KEY (`cityId`) REFERENCES `explorehome`.`city` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`property` ADD CONSTRAINT `fk_ar_area` FOREIGN KEY (`areaId`) REFERENCES `explorehome`.`area` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `explorehome`.`sub_review` ADD CONSTRAINT `fk_srr_review` FOREIGN KEY (`parentId`) REFERENCES `explorehome`.`review` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;