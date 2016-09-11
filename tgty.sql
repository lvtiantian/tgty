SET NAMES utf8;

DROP DATABASE IF EXISTS tgty;
CREATE DATABASE tgty CHARSET=UTF8;
USE tgty;
CREATE TABLE IF NOT EXISTS `tgty_users` (
  `user_id` int(11) PRIMARY KEY  AUTO_INCREMENT,
  `user_name` varchar(100),
  `user_pwd` varchar(100)
);

INSERT INTO `tgty_users` VALUES(NULL, 'qiangdong', '123456');






