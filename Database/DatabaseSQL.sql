-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2020 at 08:38 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `softwareengineering`
--
CREATE DATABASE IF NOT EXISTS `softwareengineering` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `softwareengineering`;

-- --------------------------------------------------------

--
-- Table structure for table `admingeneratedkey`
--

DROP TABLE IF EXISTS `admingeneratedkey`;
CREATE TABLE `admingeneratedkey` (
  `DuoAuthent` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admingeneratedkey`
--

INSERT INTO `admingeneratedkey` (`DuoAuthent`) VALUES
('$qioVn*81z');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `OrderID` int(10) NOT NULL,
  `ProductName` varchar(50) NOT NULL,
  `Quantity` int(5) NOT NULL,
  `PurchaseDate` date NOT NULL,
  `PurchasedBy` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OrderID`, `ProductName`, `Quantity`, `PurchaseDate`, `PurchasedBy`) VALUES
(4, 'Enlightener 3000', 20, '2020-04-02', 'jadog@gmail.com'),
(5, 'Gallo Chair', 4, '2020-04-14', 'jadog@gmail.com'),
(6, 'Gallo Xtreme Coffee Table', 2, '2020-04-19', 'jadog@gmail.com'),
(7, 'Kitchennete Table Milo', 1, '2020-04-04', 'jadog@gmail.com'),
(8, 'Lovemaker Deluxe', 69, '2020-04-02', 'jadog@gmail.com'),
(9, 'PoorGuy Coffee Table', 1, '2020-03-18', 'jadog@gmail.com'),
(10, 'Shelfmaker Project Uno', 6, '2020-02-07', 'jadog@gmail.com'),
(11, 'Gallo Chair', 5, '2020-04-01', 'jadog@gmail.com'),
(12, 'PoorGuy Coffee Table', 3, '2020-03-07', 'jadog@gmail.com'),
(13, 'Enlightener 3000', 1, '2020-04-25', 'jadog@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `Name` varchar(50) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `Price` int(11) NOT NULL,
  `Quantity` int(5) NOT NULL,
  `Model` varchar(75) NOT NULL,
  `Dimensions` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`Name`, `Description`, `Price`, `Quantity`, `Model`, `Dimensions`, `type`) VALUES
('Enlightener 3000', 'Why even bother buying furniture if you\'re not going to get this to pair along with every single piece of furniture your purchase? How else are you going to see what you buy? Light up your world like never before!', 1000, 998, 'Lamp.jpg', '10\"x10\"x20\"', 'lamp'),
('Gallo Chair', 'This impressive chair has the ability to hold you up when none of your friends will. Bonus points for being extra comfortable', 455, 85, 'Chairs.jpg', '2\'x3\'x3\'', 'chair'),
('Gallo Xtreme Coffee Table', 'You know those type of people who live and breathe coffee? Take their enthusiasm for coffee and double it, and that\'s how much you\'ll be craving this jaw-dropper. Imported from England.', 8000, 10, 'Coffee Table2_3d.jpg', '10\'x5\'x2\'', 'table'),
('Kitchennete Table Milo', 'The perfect table for any modern household. Stores stuff on top really well. You can fit so much food on this bad boy!', 733, 73, 'Kitchen Table.jpg', '7\'x4\'x4\'', 'table'),
('Lovemaker Deluxe', 'This sofa will get you all the ladies, just for the number one guy. You own this and you\'ll be an absolute champ. Smells like every Axe body spray created.', 420, 69, 'Sofa.jpg', '420\"x69\"x1\'', 'sofa'),
('PoorGuy Coffee Table', 'It\'s a table that barely counts as one, but hey, got to get that bang for your buck! Great for storing all your useless crap on!', 25, 800, 'Coffee Table1.jpg', '5\'x5\'x3\'', 'table'),
('Shelfmaker Project Uno', 'A professional shelf for those hoping to express a more professional standard of living. Pairs great with bedroom appliances.', 250, 101, 'Shelf_3d.jpg', '10\'x2\'x3\'', 'shelf');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `fName` varchar(50) NOT NULL,
  `LNAME` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `AdminKey` varchar(10) DEFAULT NULL,
  `DateOfCreation` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`fName`, `LNAME`, `Email`, `Password`, `AdminKey`, `DateOfCreation`) VALUES
('Jadon', 'Steinmetz', 'jadog@gmail.com', 'password', '$qioVn*81z', '2020-04-23'),
('Jan', 'Sippi', 'Jan.Sippi@pfw.edu', 'SoccerMom221', NULL, '2020-04-20'),
('Leeroy', 'Jenkins', 'test@myFake.org', 'software', NULL, '2020-04-23'),
('Test', 'Account', 'yeye@gmail.com', 'intricate', NULL, '2020-04-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
