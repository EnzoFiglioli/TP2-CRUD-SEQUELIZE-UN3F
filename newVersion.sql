DROP DATABASE trailerflix;
CREATE DATABASE IF NOT EXISTS trailerflix DEFAULT CHARACTER SET 'utf8mb4';
USE trailerflix;

CREATE TABLE IF NOT EXISTS Genero (
id_genero INTEGER auto_increment UNIQUE , 
nombre_genero CHAR(20) NOT NULL, 
PRIMARY KEY (id_genero));

INSERT INTO Genero VALUES
(1,'Drama'),
(2,'Ficción'),
(3,'Misterio'),
(4,'N/A'),
(5, 'Ciencia Ficcion'),
(6, 'Suceso Real');

CREATE TABLE IF NOT EXISTS contenidos (
	id_contenido INTEGER auto_increment , 
	poster VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL, 
    categoria ENUM('Pelicula', 'Serie') NOT NULL DEFAULT 'Pelicula', 
    genero INTEGER,
    resumen TEXT NOT NULL,
    temporadas INTEGER, 
    duracion VARCHAR(255), 
    trailer VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_contenido), 
    FOREIGN KEY (genero) REFERENCES Genero (id_genero)
);
 
 INSERT INTO Contenidos(titulo, poster, categoria, genero, duracion, resumen, trailer) VALUES
 ('Enola Holmes','./posters/6.jpg', 'Pelicula',1,'97 minutos',
 'La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.','https://www.youtube.com/embed/3t1g2pa355k');
 
CREATE TABLE IF NOT EXISTS Series (
	id_serie INTEGER NOT NULL auto_increment UNIQUE ,
	titulo VARCHAR(100) NOT NULL,
	poster VARCHAR(150) NOT NULL,
    genero INTEGER NOT NULL DEFAULT 4,
    categoria INTEGER NOT NULL Default 1, 
    resumen TEXT NOT NULL,
    temporadas INTEGER DEFAULT 1,
    trailer VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT NOW(), 
    updatedAt DATETIME NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id_serie), 
    FOREIGN KEY (categoria) REFERENCES Categoria (id_categoria)
);

INSERT INTO Series(titulo,poster,genero,resumen,temporadas,trailer)VALUES
('The Mandalorian','./posters/3.jpg',5, 'Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.',3,'https://www.youtube.com/embed/aOC8E8z_ifw'),
('The Umbrella Academy','./posters/4.jpg',5,"La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.",1,"https://www.youtube.com/embed/KHucKOK-Vik"),
('Gambito de Dama','./posters/4.jpg',1,"En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones.",1,"https://www.youtube.com/embed/lbleRbyGKL4"),
('Riverdale','./posters/2.jpg',1,"El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.",5,"https://www.youtube.com/embed/HxtLlByaYTc"),
('The Crown','./posters/1.jpg',6,'Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.',4,'https://www.youtube.com/embed/JWtnJjn6ng0');

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

INSERT INTO actores(nombre_actor) VALUES
('Pedro Pascal');


INSERT INTO contenido_actor VALUES
(1,1),
(2,1);
