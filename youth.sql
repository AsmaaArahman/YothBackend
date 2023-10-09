-- Adminer 4.7.8 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `faculties`;
CREATE TABLE `faculties` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `faculty` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `faculties` (`id`, `faculty`, `created_at`, `updated_at`) VALUES
(1,	'كلية التربية',	NULL,	NULL),
(2,	'كلية العلوم',	NULL,	NULL),
(3,	'كلية الآداب',	NULL,	NULL),
(4,	'كلية الطب البشري',	NULL,	NULL),
(5,	'كلية التجارة',	NULL,	NULL),
(6,	'كلية الزراعة',	NULL,	NULL),
(7,	'كلية التعليم الصناعى',	NULL,	NULL),
(8,	'كلية التمريض',	NULL,	NULL),
(9,	'كلية الطب البيطري',	NULL,	NULL),
(10,	'كلية الهندسة',	NULL,	NULL),
(11,	'كلية التربية الرياضية',	NULL,	NULL),
(12,	'كلية الصيدلة',	NULL,	NULL),
(13,	'كلية الحقوق',	NULL,	NULL),
(14,	'كلية اللآثار',	NULL,	NULL),
(15,	'كلية الألسن',	NULL,	NULL),
(16,	'كلية الحاسبات والمعلومات',	NULL,	NULL),
(17,	'المدن الجامعية',	NULL,	NULL),
(18,	'مركز نور البصيرة',	NULL,	NULL);

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1,	'2014_10_12_000000_create_users_table',	1),
(2,	'2014_10_12_100000_create_password_resets_table',	1),
(3,	'2019_08_19_000000_create_failed_jobs_table',	1),
(4,	'2019_09_25_045143_create_faculties_table',	1),
(5,	'2019_09_25_045336_create_projects_table',	1),
(6,	'2019_09_25_045351_create_project_objectives_table',	1),
(7,	'2019_09_25_045420_create_project_programs_table',	1),
(8,	'2019_09_25_045526_create_project_outside_partners_table',	1),
(9,	'2019_09_25_045542_create_project_financials_table',	1),
(10,	'2019_09_25_065132_create_project_videos_table',	1),
(11,	'2019_09_25_065139_create_project_images_table',	1),
(12,	'2019_09_26_025913_create_project_rewards_table',	1);

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `project_financials`;
CREATE TABLE `project_financials` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8mb4_unicode_ci,
  `budget` int DEFAULT NULL,
  `type` text COLLATE utf8mb4_unicode_ci,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_financials_project_id_foreign` (`project_id`),
  CONSTRAINT `project_financials_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `project_images`;
CREATE TABLE `project_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uri` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_images_project_id_foreign` (`project_id`),
  CONSTRAINT `project_images_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `project_objectives`;
CREATE TABLE `project_objectives` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `objective` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_objectives_project_id_foreign` (`project_id`),
  CONSTRAINT `project_objectives_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `project_outside_partners`;
CREATE TABLE `project_outside_partners` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `partner` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_outside_partners_project_id_foreign` (`project_id`),
  CONSTRAINT `project_outside_partners_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `project_programs`;
CREATE TABLE `project_programs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `program` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_programs_project_id_foreign` (`project_id`),
  CONSTRAINT `project_programs_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `project_rewards`;
CREATE TABLE `project_rewards` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8mb4_unicode_ci,
  `fac` text COLLATE utf8mb4_unicode_ci,
  `type` text COLLATE utf8mb4_unicode_ci,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_rewards_project_id_foreign` (`project_id`),
  CONSTRAINT `project_rewards_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `project_videos`;
CREATE TABLE `project_videos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uri` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_videos_project_id_foreign` (`project_id`),
  CONSTRAINT `project_videos_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8mb4_unicode_ci,
  `faculty` text COLLATE utf8mb4_unicode_ci,
  `field` text COLLATE utf8mb4_unicode_ci,
  `date` datetime DEFAULT NULL,
  `place` text COLLATE utf8mb4_unicode_ci,
  `targeted_boys` int unsigned DEFAULT NULL,
  `targeted_girls` int unsigned DEFAULT NULL,
  `targeted_staff` int unsigned DEFAULT NULL,
  `targeted_others` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faculty` text COLLATE utf8mb4_unicode_ci,
  `admin` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `name`, `email`, `faculty`, `admin`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1,	'edu_f',	NULL,	'كلية التربية',	'0',	NULL,	'p_edu_f12',	NULL,	NULL,	NULL),
(2,	'sci_f',	NULL,	'كلية العلوم',	'0',	NULL,	'p_sci_f32',	NULL,	NULL,	NULL),
(3,	'art_f',	NULL,	'كلية الآداب',	'0',	NULL,	'p_art_f1432',	NULL,	NULL,	NULL),
(4,	'med_f',	NULL,	'كلية الطب البشري',	'0',	NULL,	'p_med_f90',	NULL,	NULL,	NULL),
(5,	'com_f',	NULL,	'كلية التجارة',	'0',	NULL,	'p_com_f888',	NULL,	NULL,	NULL),
(6,	'agr_f',	NULL,	'كلية الزراعة',	'0',	NULL,	'p_agr_f1732',	NULL,	NULL,	NULL),
(7,	'ind_f',	NULL,	'كلية التعليم الصناعى',	'0',	NULL,	'p_ind_f9090',	NULL,	NULL,	NULL),
(8,	'nur_f',	NULL,	'كلية التمريض',	'0',	NULL,	'p_nur_f1300',	NULL,	NULL,	NULL),
(9,	'vet_f',	NULL,	'كلية الطب البيطري',	'0',	NULL,	'p_vet_f654',	NULL,	NULL,	NULL),
(10,	'eng_f',	NULL,	'كلية الهندسة',	'0',	NULL,	'p_eng_f1517',	NULL,	NULL,	NULL),
(11,	'spo_f',	NULL,	'كلية التربية الرياضية',	'0',	NULL,	'p_spo_f1494',	NULL,	NULL,	NULL),
(12,	'pha_f',	NULL,	'كلية الصيدلة',	'0',	NULL,	'p_spo_f606',	NULL,	NULL,	NULL),
(13,	'law_f',	NULL,	'كلية الحقوق',	'0',	NULL,	'p_law_f1566',	NULL,	NULL,	NULL),
(14,	'arc_f',	NULL,	'كلية اللآثار',	'0',	NULL,	'p_arc_f1979',	NULL,	NULL,	NULL),
(15,	'lan_f',	NULL,	'كلية الألسن',	'0',	NULL,	'p_lan_f644',	NULL,	NULL,	NULL),
(16,	'csi_f',	NULL,	'كلية الحاسبات والمعلومات',	'0',	NULL,	'p_csi_f440',	NULL,	NULL,	NULL),
(17,	'dorm',	NULL,	'المدن الجامعية',	'0',	NULL,	'p_dorm_f9846',	NULL,	NULL,	NULL),
(18,	'noor',	NULL,	'مركز نور البصيرة',	'0',	NULL,	'p_noor_f571',	NULL,	NULL,	NULL),
(19,	'admin',	NULL,	NULL,	'1',	NULL,	'admin_2020',	NULL,	NULL,	NULL);

-- 2020-12-27 03:48:56
