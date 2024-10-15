-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: trailerflix
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actores`
--

DROP TABLE IF EXISTS `actores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actores` (
  `id_actor` int NOT NULL AUTO_INCREMENT,
  `nombre_actor` varchar(255) NOT NULL,
  PRIMARY KEY (`id_actor`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actores`
--

LOCK TABLES `actores` WRITE;
/*!40000 ALTER TABLE `actores` DISABLE KEYS */;
INSERT INTO `actores` VALUES (1,'Pedro Pascal'),(2,'Millie Bobby Brown'),(3,'Henry Cavill'),(4,'Sam Claflin'),(5,'Helena Bonham Carter'),(6,'Louis Partridge, Adeel Akhtar'),(7,'Emilia Clarke'),(8,'Lena Headey'),(9,'Sophie Turner'),(10,'Kit Harington'),(11,'Peter Dinklage');
/*!40000 ALTER TABLE `actores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contenido_actores`
--

DROP TABLE IF EXISTS `contenido_actores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contenido_actores` (
  `id_contenido_actor` int NOT NULL AUTO_INCREMENT,
  `id_contenido` int NOT NULL,
  `id_actor` int NOT NULL,
  PRIMARY KEY (`id_contenido_actor`),
  KEY `id_contenido` (`id_contenido`),
  KEY `id_actor` (`id_actor`),
  CONSTRAINT `contenido_actores_ibfk_1` FOREIGN KEY (`id_contenido`) REFERENCES `contenidos` (`id_contenido`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `contenido_actores_ibfk_2` FOREIGN KEY (`id_actor`) REFERENCES `actores` (`id_actor`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenido_actores`
--

LOCK TABLES `contenido_actores` WRITE;
/*!40000 ALTER TABLE `contenido_actores` DISABLE KEYS */;
INSERT INTO `contenido_actores` VALUES (1,1,1),(3,1,2),(4,1,3),(5,1,4),(6,1,5),(7,1,6),(8,3,7),(9,3,8),(10,3,9),(11,3,10),(12,3,11);
/*!40000 ALTER TABLE `contenido_actores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contenidos`
--

DROP TABLE IF EXISTS `contenidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contenidos` (
  `id_contenido` int NOT NULL AUTO_INCREMENT,
  `poster` varchar(255) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `categoria` enum('Pelicula','Serie') NOT NULL DEFAULT 'Pelicula',
  `genero` int DEFAULT NULL,
  `resumen` text NOT NULL,
  `temporadas` int DEFAULT NULL,
  `duracion` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) NOT NULL,
  `id_genero` int DEFAULT NULL,
  PRIMARY KEY (`id_contenido`),
  KEY `contenidos_id_genero_foreign_idx` (`id_genero`),
  KEY `genero` (`genero`),
  CONSTRAINT `contenidos_ibfk_1` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_11` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_13` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_15` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_2` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_3` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_4` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_5` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_7` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_ibfk_9` FOREIGN KEY (`genero`) REFERENCES `genero` (`id_genero`),
  CONSTRAINT `contenidos_id_genero_foreign_idx` FOREIGN KEY (`id_genero`) REFERENCES `genero` (`id_genero`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenidos`
--

LOCK TABLES `contenidos` WRITE;
/*!40000 ALTER TABLE `contenidos` DISABLE KEYS */;
INSERT INTO `contenidos` VALUES (1,'./posters/6.jpg','Enola Holmes','Pelicula',1,'Enola Holmes, Ficción, Drama, Misterio, Millie Bobby Brown, Henry Cavill, Sam Claflin, Helena Bonham Carter, Louis Partridge, Adeel Akhtar\",\n      \"resumen\": \"La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.',NULL,'97 minutos','https://www.youtube.com/embed/3t1g2pa355k',NULL),(2,'./posters/7.jpg','Guasón','Pelicula',9,'Arthur Fleck (Phoenix) es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una Serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en el popular personaje de DC Comics Joker, conocido como archivillano de Batman, pero que en este film tomará un cariz más realista y oscuro.',NULL,'90 minutos','https://www.youtube.com/embed/zAGVQLHvwOY',NULL),(3,'./posters/9.jpg','Juego de tronos','Serie',7,'En un mundo fantástico y en un contexto medieval varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.',8,NULL,'https://www.youtube.com/embed/KPLWWIOCOOQ',NULL);
/*!40000 ALTER TABLE `contenidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero` (
  `id_genero` int NOT NULL AUTO_INCREMENT,
  `nombre_genero` char(20) NOT NULL,
  `genero` int DEFAULT NULL,
  PRIMARY KEY (`id_genero`),
  UNIQUE KEY `id_genero` (`id_genero`),
  KEY `Genero_genero_foreign_idx` (`genero`),
  CONSTRAINT `Genero_genero_foreign_idx` FOREIGN KEY (`genero`) REFERENCES `contenidos` (`id_contenido`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
INSERT INTO `genero` VALUES (1,'Drama',NULL),(2,'Ficción',NULL),(3,'Misterio',NULL),(4,'N/A',NULL),(5,'Ciencia Ficcion',NULL),(6,'Suceso Real',NULL),(7,'Fantasía',NULL),(8,'Aventura',NULL),(9,'Suspenso',NULL);
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero_contenido`
--

DROP TABLE IF EXISTS `genero_contenido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero_contenido` (
  `id_genero_contenido` int NOT NULL AUTO_INCREMENT,
  `id_contenido` int DEFAULT NULL,
  `id_genero` int DEFAULT NULL,
  PRIMARY KEY (`id_genero_contenido`),
  KEY `id_contenido` (`id_contenido`),
  KEY `id_genero` (`id_genero`),
  CONSTRAINT `genero_contenido_ibfk_1` FOREIGN KEY (`id_contenido`) REFERENCES `contenidos` (`id_contenido`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `genero_contenido_ibfk_2` FOREIGN KEY (`id_genero`) REFERENCES `genero` (`id_genero`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero_contenido`
--

LOCK TABLES `genero_contenido` WRITE;
/*!40000 ALTER TABLE `genero_contenido` DISABLE KEYS */;
INSERT INTO `genero_contenido` VALUES (1,1,2),(2,1,1),(3,1,3);
/*!40000 ALTER TABLE `genero_contenido` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-15 18:55:04
