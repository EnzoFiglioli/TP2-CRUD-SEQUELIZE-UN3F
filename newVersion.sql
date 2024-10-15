DROP DATABASE trailerflix;
CREATE DATABASE trailerflix DEFAULT CHARACTER SET 'utf8mb4';
USE trailerflix;

CREATE TABLE IF NOT EXISTS Categoria (
	id_categoria INTEGER NOT NULL UNIQUE , 
    nombre_categoria CHAR(100) NOT NULL, 
    PRIMARY KEY (id_categoria)
);

INSERT INTO Categoria VALUES
(1,"Serie"),
(2,'Pelicula');

CREATE TABLE IF NOT EXISTS `Genero` (
`id_genero` INTEGER auto_increment UNIQUE , 
`nombre_genero` CHAR(20) NOT NULL, 
PRIMARY KEY (`id_genero`));

INSERT INTO Genero VALUES
(1,'Drama'),
(2,'Ficción'),
(3,'Misterio'),
(4,'N/A'),
(5, 'Ciencia Ficcion'),
(6, 'Suceso Real');

INSERT INTO Genero(nombre_genero) VALUES ('Suceso Real');

CREATE TABLE IF NOT EXISTS Peliculas (
	id_pelicula INTEGER NOT NULL auto_increment UNIQUE , 
	titulo CHAR(100) NOT NULL, 
	poster CHAR(150) NOT NULL, 
	categoria INTEGER NOT NULL DEFAULT 4,
	resumen CHAR(255) NOT NULL, 
    duracion INTEGER DEFAULT 60,
	trailer CHAR(255) NOT NULL, 
	createdAt DATETIME NOT NULL DEFAULT NOW(), 
	updatedAt DATETIME NOT NULL DEFAULT NOW(), 
    PRIMARY KEY (`id_pelicula`),
    FOREIGN KEY (`categoria`) REFERENCES `Genero` (`id_genero`)
);
 
 INSERT INTO Peliculas(titulo, poster, categoria, resumen, trailer) VALUES
 ('Enola Holmes','./posters/6.jpg', 1,
 'La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord.','https://www.youtube.com/embed/3t1g2pa355k');
 
CREATE TABLE IF NOT EXISTS Series (
	id_serie INTEGER NOT NULL auto_increment UNIQUE ,
	titulo VARCHAR(100) NOT NULL,
	poster VARCHAR(150) NOT NULL,
    genero INTEGER NOT NULL DEFAULT 4,
    categoria INTEGER NOT NULL Default 4, 
    resumen VARCHAR(255) NOT NULL,
    temporadas INTEGER DEFAULT 1,
    trailer VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT NOW(), 
    updatedAt DATETIME NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id_serie), 
    FOREIGN KEY (categoria) REFERENCES Categoria (id_categoria)
);

INSERT INTO Series(titulo,poster,genero,categoria,resumen,temporadas,trailer)VALUES
('The Mandalorian','./posters/3.jpg',5,1, 'Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.',3,'https://www.youtube.com/embed/aOC8E8z_ifw'),
('The Umbrella Academy','./posters/4.jpg',5,1,"La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.",1,"https://www.youtube.com/embed/KHucKOK-Vik"),
('Gambito de Dama','./posters/4.jpg',1,1,"En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones.",1,"https://www.youtube.com/embed/lbleRbyGKL4"),
('Riverdale','./posters/2.jpg',1,1,"El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.",5,"https://www.youtube.com/embed/HxtLlByaYTc"),
('The Crown','./posters/1.jpg',6,1,'Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.',4,'https://www.youtube.com/embed/JWtnJjn6ng0');

CREATE TABLE IF NOT EXISTS Pelicula_Genero (
	id_pelicula INTEGER NOT NULL , id_genero INTEGER NOT NULL , 
	es_principal TINYINT(1) NOT NULL DEFAULT false, 
    PRIMARY KEY (id_pelicula, id_genero), 
	FOREIGN KEY (id_pelicula) REFERENCES Peliculas (id_pelicula), 
	FOREIGN KEY (id_genero) REFERENCES Genero (id_genero)
);

INSERT INTO Pelicula_Genero VALUES
(1,1,true),
(1,2,false),
(1,3,false);

 
SELECT s.id_serie, s.titulo, s.poster, g.nombre_genero, s.categoria
FROM  series s
INNER JOIN genero g ON g.id_genero = s.genero;