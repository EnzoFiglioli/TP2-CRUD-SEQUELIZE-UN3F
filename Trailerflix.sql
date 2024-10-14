DROP DATABASE IF EXISTS Trailerflix;
CREATE DATABASE Trailerflix;
USE Trailerflix;

CREATE TABLE IF NOT EXISTS Categoria (
    id_categoria int AUTO_INCREMENT NOT NULL UNIQUE,
    nombre_categoria varchar(100) NOT NULL,
    PRIMARY KEY (id_categoria)
);

CREATE TABLE IF NOT EXISTS Pelicula (
    id_pelicula int AUTO_INCREMENT NOT NULL UNIQUE,
    titulo varchar(100) NOT NULL,
    poster varchar(150) NOT NULL,  
    categoria int NOT NULL,
    resumen varchar(255) NOT NULL,  
    temporadas int DEFAULT 1,       
    trailer varchar(255) NOT NULL,
    PRIMARY KEY (id_pelicula),
    CONSTRAINT fk_categoria FOREIGN KEY (categoria) REFERENCES Categoria(id_categoria)
);

CREATE TABLE IF NOT EXISTS Serie (
    id_serie int AUTO_INCREMENT NOT NULL UNIQUE,  
    titulo varchar(100) NOT NULL,
    poster varchar(150) NOT NULL,  
    categoria int NOT NULL,
    resumen varchar(255) NOT NULL,  
    temporadas int DEFAULT 1,       
    trailer varchar(255) NOT NULL,
    PRIMARY KEY (id_serie),  
    CONSTRAINT fk_categoriaSerie FOREIGN KEY (categoria) REFERENCES Categoria(id_categoria)
);

CREATE TABLE IF NOT EXISTS Usuario (
    id_usuario int AUTO_INCREMENT NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE IF NOT EXISTS ListaPeliculas (
    id_listaPelicula int AUTO_INCREMENT NOT NULL UNIQUE,
    id_usuario int NOT NULL,
    id_pelicula int NOT NULL,
    PRIMARY KEY (id_listaPelicula),
    CONSTRAINT fk_lista_usuario FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    CONSTRAINT fk_lista_pelicula FOREIGN KEY (id_pelicula) REFERENCES Pelicula(id_pelicula)
);

CREATE TABLE IF NOT EXISTS ListaSeries (
    id_listaSeries int AUTO_INCREMENT NOT NULL UNIQUE,
    id_usuario int NOT NULL,
    id_serie int NOT NULL, 
    PRIMARY KEY (id_listaSeries),
    CONSTRAINT fk_lista_usuarioSerie FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    CONSTRAINT fk_lista_series FOREIGN KEY (id_serie) REFERENCES Serie(id_serie)  -- Corregido
);

CREATE TABLE IF NOT EXISTS Genero (
    id_genero int AUTO_INCREMENT NOT NULL UNIQUE,
    nombre_genero varchar(50) NOT NULL,
    PRIMARY KEY (id_genero)
);

CREATE TABLE IF NOT EXISTS Pelicula_Genero (
    id_pelicula int NOT NULL,
    id_genero int NOT NULL,
    es_principal boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id_pelicula, id_genero),
    CONSTRAINT fk_pelicula_genero_pelicula FOREIGN KEY (id_pelicula) REFERENCES Pelicula(id_pelicula),
    CONSTRAINT fk_pelicula_genero_genero FOREIGN KEY (id_genero) REFERENCES Genero(id_genero)
);

CREATE TABLE IF NOT EXISTS Serie_Genero ( 
    id_serie int NOT NULL,
    id_genero int NOT NULL,
    es_principal boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id_serie, id_genero),
    CONSTRAINT fk_serie_genero_serie FOREIGN KEY (id_serie) REFERENCES Serie(id_serie),
    CONSTRAINT fk_serie_genero_genero FOREIGN KEY (id_genero) REFERENCES Genero(id_genero)
);

CREATE TABLE IF NOT EXISTS Actor (
    id_actor int AUTO_INCREMENT NOT NULL UNIQUE,
    nombre varchar(50) NOT NULL,
    apellido varchar(50) NOT NULL,
    PRIMARY KEY (id_actor)
);

CREATE TABLE IF NOT EXISTS Pelicula_Actor (
    id_pelicula int NOT NULL,
    id_actor int NOT NULL,
    PRIMARY KEY (id_pelicula, id_actor),
    CONSTRAINT fk_pelicula_actor_pelicula FOREIGN KEY (id_pelicula) REFERENCES Pelicula(id_pelicula),
    CONSTRAINT fk_pelicula_actor_actor FOREIGN KEY (id_actor) REFERENCES Actor(id_actor)
);

CREATE TABLE IF NOT EXISTS Serie_Actor(
    id_serie int NOT NULL,
    id_actor int NOT NULL,
    PRIMARY KEY (id_serie, id_actor),
    CONSTRAINT fk_serie_actor_serie FOREIGN KEY (id_serie) REFERENCES Serie(id_serie),
    CONSTRAINT fk_serie_actor_actor FOREIGN KEY (id_actor) REFERENCES Actor(id_actor)
);

CREATE TABLE IF NOT EXISTS Busqueda (
    id_busqueda int AUTO_INCREMENT NOT NULL UNIQUE,
    id_pelicula int DEFAULT NULL,
    id_serie int DEFAULT NULL,
    id_genero int NOT NULL,
    id_actor int NOT NULL,
    PRIMARY KEY (id_busqueda),
    CONSTRAINT fk_busqueda_pelicula FOREIGN KEY (id_pelicula) REFERENCES Pelicula(id_pelicula),
    CONSTRAINT fk_busqueda_serie FOREIGN KEY (id_serie) REFERENCES Serie(id_serie),
    CONSTRAINT fk_busqueda_genero FOREIGN KEY (id_genero) REFERENCES Genero(id_genero),
    CONSTRAINT fk_busqueda_actor FOREIGN KEY (id_actor) REFERENCES Actor(id_actor)
);
