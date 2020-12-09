-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: BusinessManagementDB
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
-- Table structure for table `Menu`
--

DROP TABLE IF EXISTS `Menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_price` float(11,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Menu`
--

LOCK TABLES `Menu` WRITE;
/*!40000 ALTER TABLE `Menu` DISABLE KEYS */;
INSERT INTO `Menu` VALUES (1,'Vanilla Cream Frappuccino® Blended Beverage',4.35),(2,'Éclair chocolate Size L',4.35),(3,' Bánh Cookie Nho & Oatmeal',4.15),(4,'Raspberry Black Currant Blended Juice',5.00),(5,'Chocolate Crème Frappuccino® blended beverage',4.35),(6,'Trà Earl Grey Pha Nóng',4.80),(7,'Caramel Frappuccino® Blended Beverage',4.15),(8,' Cà phê sữa Size L',5.00),(9,'Vanilla Cream Frappuccino® Blended Beverage Size L',4.45),(10,' Cà phê sữa nóng',4.85),(11,'Iced Shaken Hibiscus Tea',4.15),(12,' Cà phê Americano',5.00),(13,'Hazelnut Macchiatob',4.15),(14,'Hazelnut Macchiatob Size L',4.35),(15,'Bánh Cookie Sô Cô La',4.35),(16,'Black Shaken Iced Tea',4.05),(17,'Iced Shaken Hibiscus Tea Size L',5.00),(18,'Éclair chocolate',4.15),(19,' Cà phê sữa',4.85),(20,'Trà Earl Grey Pha',4.85),(21,'Mango Passion Fruit Blended Juice',5.00),(22,'Bánh ngot Chocolate',4.05),(23,'Espresso',4.15),(24,'Trà Earl Grey Pha Size L',5.00),(25,'Bánh Trà Xanh',4.85);
/*!40000 ALTER TABLE `Menu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-01  1:56:36
