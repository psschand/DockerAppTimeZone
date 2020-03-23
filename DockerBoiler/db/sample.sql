-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 20, 2020 at 08:24 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `surya_timezoe`
--
CREATE DATABASE IF NOT EXISTS `surya_timezoe` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `surya_timezoe`;

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
CREATE TABLE IF NOT EXISTS `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '1503248427885_user', 1, '2020-02-10 13:04:12'),
(2, '1503248427886_token', 1, '2020-02-10 13:04:13'),
(3, '1540490086875_post_schema', 1, '2020-02-10 13:04:13'),
(4, '1584570388323_time_zone_schema', 2, '2020-03-18 22:28:30');

-- --------------------------------------------------------

--
-- Table structure for table `time_zones`
--

DROP TABLE IF EXISTS `time_zones`;
CREATE TABLE IF NOT EXISTS `time_zones` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `TimeZone_id` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `time_zones`
--

INSERT INTO `time_zones` (`id`, `name`, `TimeZone_id`, `created_at`, `updated_at`) VALUES
(1, 'Baker Island, Howland Island (both uninhabited) UTC-12:00', '-12:0:0', '2020-03-19 07:01:04', '2020-03-19 07:01:04'),
(2, 'American Samoa, Niue UTC-11:00', '-11:0:0', '2020-03-19 07:01:04', '2020-03-19 07:01:04'),
(3, 'United States (Hawaii) UTC-10:00', '-10:0:0', '2020-03-19 07:01:04', '2020-03-19 07:01:04'),
(4, 'Marquesas Islands UTC-09:30', '-9:30:0', '2020-03-19 07:01:04', '2020-03-19 07:01:04'),
(5, 'Gambier Islands UTC-09:00', '-9:0:0', '2020-03-19 07:01:04', '2020-03-19 07:01:04'),
(6, 'Canada (most of British Columbia), Mexico (Baja California), United States (California, most of Nevada, most of Oregon, Washington (state)) UTC-08:00', '-8:0:0', '2020-03-19 07:01:04', '2020-03-19 07:01:04'),
(7, 'Canada (northeastern British Columbia), Mexico (Sonora), United States(Arizona) UTC-07:00', '-7:0:0', '2020-03-19 07:01:04', '2020-03-19 07:01:04'),
(8, 'Canada (almost all of Saskatchewan), Costa Rica, El Salvador, Ecuador (Galápagos Islands), Guatemala, Honduras, Mexico (most), Nicaragua, UTC-06:00', '-6:0:0', '2020-03-19 07:01:04', '2020-03-19 07:01:04');

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
CREATE TABLE IF NOT EXISTS `tokens` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  KEY `tokens_token_index` (`token`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'testuser', 'test@mail.com', '$2a$10$JLXWxYVuBYo.7iAj5FlKFelctrz.BzoenIHwNvlpICORaRtl4AwG2', '2020-02-10 18:35:30', '2020-02-10 18:35:30'),
(2, 'user.test1@gmail.com1', 'test1.test@gmail.com', '$2a$10$WynlZzI17ELhgKlhGK2LbOEY3AgN3ONqabu/kGq71YSQwk0CrZp/2', '2020-03-19 03:19:28', '2020-03-19 03:19:28');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
