-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: businessmanagementdb
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `last_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `role` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `salary_day` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Jonas','Towne','94085 Clay Extension Apt. 469\nMelvinaborough, WY 49069','1999-07-25','Cashier',9),(2,'Arno','Carter','647 Leon Station Apt. 745\nZiemechester, VT 41442-0825','1987-05-08','Waiter',7),(3,'Mozell','Koepp','2293 Adrien Mews Suite 185\nPort Bernadineside, CT 59441','1992-07-31','Bartender',9),(4,'Erick','Graham','06864 Connor Falls Suite 541\nEast Marvinview, OH 77912-9880','1990-01-07','Waiter',7),(5,'Keara','Durgan','704 Jacklyn Mill\nDoylefurt, TN 25220-4806','1985-10-08','Bartender',8),(6,'Cyril','Gerlach','09217 Virginie Street\nSophiaville, MA 37625','1986-05-29','Waiter',7),(7,'Josiah','Kuhic','2752 Weber Mountains Apt. 303\nRunolfssonside, FL 94381-7557','1993-10-19','Waiter',7),(8,'Aaron','Weimann','28488 Koss Spring Suite 278\nHarberbury, AL 39909','1987-12-23','Waiter',7),(9,'Rylee','Cruickshank','01336 Mossie Extensions\nBeerfort, IL 86352','1992-08-20','Cashier',9),(10,'Dessie','Hessel','14750 Stephen Knoll Suite 163\nNorth Reymundoville, CA 58346','1997-05-18','Bartender',9),(11,'Kay','Wiza','6692 Raleigh Pass\nNorth Austinberg, CT 86739-4436','1996-01-14','Waiter',7),(12,'Ova','Morissette','2313 Deckow Mountain Apt. 552\nNorth Candidaland, ND 72555','1999-07-26','Waiter',8),(13,'Adeline','Ebert','30687 Rogahn Place Suite 155\nLake Favian, AK 15953-3125','1993-11-15','Bartender',9),(14,'Juana','Bruen','386 Vicky Fort\nHegmannview, MO 50677','1995-08-19','Waiter',7),(15,'Jeanne','Marks','6055 Doris Cove\nSouth Joe, DC 11603-3244','1987-12-12','Manager',12),(42,'Dang Khoa','Duong','124/32','2000-12-06','Waiter',9);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-27 17:13:05
