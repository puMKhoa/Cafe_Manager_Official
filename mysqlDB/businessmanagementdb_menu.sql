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
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_price` float(11,2) NOT NULL,
  `urlImg` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'Vanilla Cream Frappuccino® Blended Beverage',4.30,'https://globalassets.starbucks.com/assets/b68fa7003557464a8abfaf3e04e2704b.jpg?impolicy=1by1_wide_1242'),(2,'Éclair chocolate Size L',4.35,'https://images.ricardocuisine.com/services/recipes/a-eclairschocolat-ricardo-automne224000-cmyk.jpg'),(3,' Bánh Cookie Nho & Oatmeal',4.15,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdZJcefE971vhFPIOXyaeXshT8A-0Mc93cA&usqp=CAU'),(4,'Raspberry Black Currant Blended Juice',5.00,'https://www.starbucks.com.cn/images/products/blackcurrant-raspberry.jpg'),(5,'Chocolate Crème Frappuccino® blended beverage',4.35,'https://globalassets.starbucks.com/assets/41daf68bcbf84ee68b7d23e0b820127f.jpg?impolicy=1by1_wide_1242'),(6,'Trà Earl Grey Pha Nóng',4.80,'https://cdn.tgdd.vn/Files/2020/04/29/1252676/tra-earl-grey-la-gi-cong-dung-cua-tra-earl-grey-n-760x367.jpg'),(7,'Caramel Frappuccino® Blended Beverage',4.15,'https://globalassets.starbucks.com/assets/6ab7d70c4fff435faf090a2f1a6f30d5.jpg?impolicy=1by1_wide_1242'),(8,' Cà phê sữa Size L',5.00,'https://product.hstatic.net/1000075078/product/cfsd_615a3cb2b1e342d2b1986bfeb6572070_master.jpg'),(9,'Vanilla Cream Frappuccino® Blended Beverage Size L',4.45,'https://globalassets.starbucks.com/assets/b68fa7003557464a8abfaf3e04e2704b.jpg?impolicy=1by1_wide_1242'),(10,' Cà phê sữa nóng',4.85,'https://vietblend.vn/wp-content/uploads/2018/12/cach-lam-cafe-sua-nong.jpg'),(11,'Iced Shaken Hibiscus Tea',4.15,'https://globalassets.starbucks.com/assets/35154226b40d49139a4dd82d00c38110.jpg'),(12,' Cà phê Americano',5.00,'https://bonjourcoffee.vn/blog/wp-content/uploads/2020/01/americano.jpg'),(13,'Hazelnut Macchiatob',4.15,'https://tmtcaffe.files.wordpress.com/2016/10/e89ec7b5cb5443408549ee7c457f907f.jpg?w=640'),(14,'Hazelnut Macchiatob Size L',4.35,'https://images.foody.vn/res/g9/85848/s800/foody-starbucks-coffee-ba-trieu-351-637225864954691142.jpg'),(15,'Bánh Cookie Sô Cô La',4.35,'https://cdn.dealtoday.vn/img/s630x0/542149a5573c4eb5b180e6e9bff3fc66.jpg?sign=dQeomzF_yFDAX_hIaws9Ew'),(16,'Black Shaken Iced Tea',4.05,'https://globalassets.starbucks.com/assets/b87b4ec73da2443d9e505319ac46168b.jpg?impolicy=1by1_wide_1242'),(17,'Iced Shaken Hibiscus Tea Size L',5.00,'https://globalassets.starbucks.com/assets/03e0fa75324b4d00aeca3b2d865cb830.jpg?impolicy=1by1_wide_1242'),(18,'Éclair chocolate',4.15,'https://www.dovesfarm.co.uk/uploads/images/presets/product_page_full/recipes/Freee%20Pastry/600_Freee_GlutenFreeChocolateEclairs.jpg'),(19,' Cà phê sữa',4.85,'https://product.hstatic.net/1000075078/product/cfsd_615a3cb2b1e342d2b1986bfeb6572070_master.jpg'),(20,'Trà Earl Grey Pha',4.85,'https://cdn.tgdd.vn/Files/2020/04/29/1252676/tra-earl-grey-la-gi-cong-dung-cua-tra-earl-grey-n-760x367.jpg'),(21,'Mango Passion Fruit Blended Juice',5.00,'https://leelalicious.com/wp-content/uploads/2016/04/Easy-Mango-Passion-Fruit-Lassi.jpg'),(22,'Bánh ngot Chocolate',4.05,'https://images.foody.vn/images/Banh-gato-chocolate.jpg'),(23,'Espresso',4.15,'https://product.hstatic.net/1000075078/product/espressonong_f60fc6f25baa404c8a8bfc40c396f27e_master.jpg'),(24,'Trà Earl Grey Pha Size L',5.00,'https://toiyeutra.vn/upload/files/tra%20earl%20grey%20tra%20ba%20tuoc.jpg'),(25,'Bánh Trà Xanh',4.85,'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/PHOMAITRAXANH.jpg');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
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
