CREATE TABLE `delegados_trans` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(255) NOT NULL,
	`sindicato_id` int NOT NULL,
	`organismo_id` int,
	`rol` varchar(255),
	`email` varchar(320),
	`telefono` varchar(50),
	`es_publico` enum('si','no') DEFAULT 'si',
	`biografia` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `delegados_trans_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `noticias` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`resumen` text,
	`contenido` text NOT NULL,
	`categoria` enum('sindicalismo','politica','salud','derechos','otro') NOT NULL,
	`imagen_url` varchar(500),
	`autor_id` int,
	`es_destacada` enum('si','no') DEFAULT 'no',
	`publicada_en` timestamp NOT NULL DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `noticias_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `organismo_sindicato` (
	`id` int AUTO_INCREMENT NOT NULL,
	`organismo_id` int NOT NULL,
	`sindicato_id` int NOT NULL,
	`es_principal` enum('si','no') DEFAULT 'no',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `organismo_sindicato_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `organismos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(255) NOT NULL,
	`tipo` enum('ministerio','secretaria','ente','empresa','otro') NOT NULL,
	`jurisdiccion` enum('nacional','provincial','municipal') NOT NULL,
	`provincia` varchar(100),
	`sitio_web` varchar(500),
	`descripcion` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `organismos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `recursos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`descripcion` text,
	`tipo` enum('guia','infografia','video','documento','otro') NOT NULL,
	`categoria` varchar(100),
	`archivo_url` varchar(500) NOT NULL,
	`imagen_url` varchar(500),
	`descargas` int DEFAULT 0,
	`es_destacado` enum('si','no') DEFAULT 'no',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `recursos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `registro_trans` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(255) NOT NULL,
	`email` varchar(320),
	`telefono` varchar(50),
	`organismo` varchar(255) NOT NULL,
	`sindicato` varchar(255),
	`esta_afiliada` enum('si','no','no_sabe') DEFAULT 'no_sabe',
	`quiere_afiliar` enum('si','no','mas_info') DEFAULT 'mas_info',
	`provincia` varchar(100),
	`ciudad` varchar(100),
	`situacion_laboral` enum('planta_permanente','contrato','monotributo','otro'),
	`necesita_acompanamiento` enum('si','no') DEFAULT 'no',
	`comentarios` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `registro_trans_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `seccionales` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sindicato_id` int NOT NULL,
	`nombre` varchar(255) NOT NULL,
	`direccion` text NOT NULL,
	`provincia` varchar(100) NOT NULL,
	`ciudad` varchar(100) NOT NULL,
	`latitud` varchar(50),
	`longitud` varchar(50),
	`telefono` varchar(50),
	`email` varchar(320),
	`horario_atencion` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `seccionales_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sindicatos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(255) NOT NULL,
	`sigla` varchar(50) NOT NULL,
	`ambito` text NOT NULL,
	`sitio_web` varchar(500),
	`telefono` varchar(50),
	`email` varchar(320),
	`direccion` text,
	`tiene_referente_diversidad` enum('si','no','no_sabe') DEFAULT 'no_sabe',
	`descripcion` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `sindicatos_id` PRIMARY KEY(`id`)
);
