create database proyecto1

use proyecto1

CREATE TABLE pacientes(
    dni INT NOT NULL ,
    nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    edad INT,
    telefono CHAR(11),
    direccion VARCHAR (256) NOT NULL, 
    PRIMARY KEY (dni)
);

DESCRIBE  pacientes;



CREATE TABLE distrito (
    id INT PRIMARY KEY,
    nombre_distrito VARCHAR(100)
);

INSERT INTO distrito (id, nombre_distrito)
VALUES
(1, 'Ciudad de Las Heras'),
(2, 'El Algarrobal'),
(3, 'El Borbollón'),
(4, 'El Challao'),
(5, 'El Pastal'),
(6, 'Gral. Gutiérrez'),
(7, 'Las Vegas'),
(8, 'Panquehua'),
(9, 'Puente de Hierro'),
(10, 'Ugarteche');

CREATE TABLE patologia (
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

INSERT INTO patologia (id, nombre) VALUES
(1, 'grupo a'),
(2, 'grupo b'),
(3, 'grupo c');


ALTER TABLE pacientes
ADD COLUMN id_patologia INT,
ADD COLUMN id_distrito INT,
ADD CONSTRAINT fk_patologia FOREIGN KEY (id_patologia) REFERENCES patologia(id),
ADD CONSTRAINT fk_distrito FOREIGN KEY (id_distrito) REFERENCES distrito(id);
