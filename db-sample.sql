-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2022 at 06:25 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_katsir`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Coffee', '2022-02-27 16:36:28', NULL),
(2, 'Non Coffee', '2022-02-27 16:36:28', NULL),
(3, 'Food', '2022-02-27 16:36:28', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(13) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(20) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` int(13) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `image`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Espresso', 10000, 'http://localhost:3939/uploads/Mon_Aug_16_2021-23.22.16-1629130937376-Espresso.jpg', 1, '2021-08-16 16:22:17', '2021-08-16 16:22:17'),
(2, 'Cofee Latte', 15000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.55.59-1625115359204-Cofee_Latte.jpg', 1, '2021-07-01 04:55:59', '2021-07-01 04:55:59'),
(3, 'Cappucino', 5000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.56.18-1625115378523-Cappucino.jpg', 1, '2021-07-01 04:56:18', '2021-07-01 04:56:18'),
(4, 'Red Velvet Latte', 33000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.56.45-1625115405891-Red_Velvet_Latte.jpg', 4, '2021-07-01 04:56:45', '2021-07-01 04:56:45'),
(5, 'Choco Rhum', 28000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.57.24-1625115444010-Choco_Rhum.jpg', 4, '2021-07-01 04:57:24', '2021-07-01 04:57:24'),
(6, 'Black Forest', 30000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.58.48-1625115528860-Black_Forest.jpg', 4, '2021-07-01 04:58:48', '2021-07-01 04:58:48'),
(7, 'Chicken Katsu Dabu-dabu', 60000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-11.59.41-1625115581830-Chicken_Katsu_Dabu-dabu.jpg', 3, '2021-07-01 04:59:41', '2021-07-01 04:59:41'),
(8, 'Salmon Truffle Teriyaki', 60000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-12.00.07-1625115607835-Salmon_Truffle_Teriyaki.jpg', 3, '2021-07-01 05:00:07', '2021-07-01 05:00:07'),
(9, 'Wiener Schnitzel', 69000, 'http://localhost:3939/uploads/Thu_Jul_01_2021-12.00.33-1625115633345-Wiener_Schnitzel.jpg', 3, '2021-07-01 05:00:33', '2021-07-01 05:00:33');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','cashier') COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`, `username`, `created_at`, `updated_at`) VALUES
(5, 'fiamma@gmail.com', '$2a$10$WVh8p4398erOi2NKcXipVOHCJh5OA1NiV1wR1JaoaHaogj50nF5jK', 'admin', 'Fiamma', '2022-02-27 17:06:17', NULL),
(6, 'theoto@gmail.com', '$2a$10$h6lWuyu4y0W56AwWDKkCF.JGxbzvJP6lmESyZJsLGF8E756tVTp22', 'cashier', 'Theo', '2022-02-27 17:08:40', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
