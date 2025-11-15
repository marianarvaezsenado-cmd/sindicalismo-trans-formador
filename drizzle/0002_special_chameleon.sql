CREATE TABLE `contactos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(255) NOT NULL,
	`tipo` enum('organizacion','abogade','referente','obra_social','internacional','otro') NOT NULL,
	`provincia` varchar(100),
	`ciudad` varchar(100),
	`email` varchar(320),
	`telefono` varchar(50),
	`sitio_web` varchar(500),
	`descripcion` text,
	`especialidad` varchar(255),
	`es_publico` enum('si','no') DEFAULT 'si',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contactos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `curriculums` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`telefono` varchar(50),
	`provincia` varchar(100) NOT NULL,
	`ciudad` varchar(100),
	`nivel_educativo` varchar(255),
	`experiencia_laboral` text,
	`areas_interes` text,
	`archivo_url` varchar(500),
	`estado_postulacion` enum('pendiente','revisado','contactado','archivado') DEFAULT 'pendiente',
	`comentarios` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `curriculums_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `efemerides` (
	`id` int AUTO_INCREMENT NOT NULL,
	`dia` int NOT NULL,
	`mes` int NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`descripcion` text,
	`tipo` enum('feminista','sindical','feriado','trans','otro') NOT NULL,
	`pais` varchar(100) DEFAULT 'Argentina',
	`es_internacional` enum('si','no') DEFAULT 'no',
	`referencia_historica` text,
	`fuente_url` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `efemerides_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `encuentros_pluri` (
	`id` int AUTO_INCREMENT NOT NULL,
	`numero` int NOT NULL,
	`anio` int NOT NULL,
	`ciudad` varchar(100) NOT NULL,
	`provincia` varchar(100) NOT NULL,
	`fecha_inicio` timestamp NOT NULL,
	`fecha_fin` timestamp NOT NULL,
	`descripcion` text,
	`conclusiones_taller` text,
	`participantes` int DEFAULT 0,
	`documentos_url` text,
	`imagen_url` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `encuentros_pluri_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reportes_radar_trans` (
	`id` int AUTO_INCREMENT NOT NULL,
	`tipo_incidente` enum('violencia_institucional','despido','discriminacion','acoso','otro') NOT NULL,
	`provincia` varchar(100) NOT NULL,
	`ciudad` varchar(100),
	`organismo` varchar(255),
	`descripcion` text NOT NULL,
	`fecha_incidente` timestamp,
	`es_anonimo` enum('si','no') DEFAULT 'si',
	`nombre_reportante` varchar(255),
	`email_contacto` varchar(320),
	`telefono_contacto` varchar(50),
	`estado_seguimiento` enum('nuevo','en_proceso','resuelto','archivado') DEFAULT 'nuevo',
	`es_publico` enum('si','no') DEFAULT 'no',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `reportes_radar_trans_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `visitas_contador` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fecha` timestamp NOT NULL DEFAULT (now()),
	`pagina` varchar(255) NOT NULL,
	`visitas` int NOT NULL DEFAULT 1,
	CONSTRAINT `visitas_contador_id` PRIMARY KEY(`id`)
);
