/*
Navicat MySQL Data Transfer

Source Server         : docker-mysql
Source Server Version : 50744
Source Host           : localhost:3306
Source Database       : uki

Target Server Type    : MYSQL
Target Server Version : 50744
File Encoding         : 65001

Date: 2024-02-28 15:00:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `Food`
-- ----------------------------
DROP TABLE IF EXISTS `Food`;
CREATE TABLE `Food` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Food_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Food
-- ----------------------------
INSERT INTO `Food` VALUES ('1', 'Pecel Lele', '1000', '2024-02-28 07:53:13.230', '2024-02-28 07:53:13.232');
INSERT INTO `Food` VALUES ('2', 'Ayam Goreng', '2000', '2024-02-28 07:53:13.272', '2024-02-28 07:53:13.273');
INSERT INTO `Food` VALUES ('3', 'Bebek Goreng', '3000', '2024-02-28 07:53:13.336', '2024-02-28 07:53:13.338');

-- ----------------------------
-- Table structure for `Order`
-- ----------------------------
DROP TABLE IF EXISTS `Order`;
CREATE TABLE `Order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `food_id` int(11) NOT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Order
-- ----------------------------

-- ----------------------------
-- Table structure for `User`
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of User
-- ----------------------------
INSERT INTO `User` VALUES ('1', 'Ano', 'anovanmaximuz@gmail.com', 'coba123', '2024-02-28 07:53:12.841', '2024-02-28 07:53:13.031');
