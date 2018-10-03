-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-10-2018 a las 09:53:52
-- Versión del servidor: 5.7.19
-- Versión de PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_bm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cargos`
--

DROP TABLE IF EXISTS `tbl_cargos`;
CREATE TABLE IF NOT EXISTS `tbl_cargos` (
  `codigo_cargo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_cargo` varchar(100) NOT NULL,
  `codigo_departamento_fk` int(11) NOT NULL,
  PRIMARY KEY (`codigo_cargo`),
  KEY `fk_tbl_cargos_tbl_departamento1_idx` (`codigo_departamento_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_cargos`
--

INSERT INTO `tbl_cargos` (`codigo_cargo`, `nombre_cargo`, `codigo_departamento_fk`) VALUES
(1, 'Jefe', 1),
(2, 'Técnico', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_datos_tecnicos`
--

DROP TABLE IF EXISTS `tbl_datos_tecnicos`;
CREATE TABLE IF NOT EXISTS `tbl_datos_tecnicos` (
  `codigo_datos_tecnicos` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_tipo_alimentacion_fk` int(11) NOT NULL,
  `codigo_relacion_paciente_fk` int(11) NOT NULL,
  `codigo_funcion_maquina_fk` int(11) NOT NULL,
  `codigo_uso_especifico_fk` int(11) NOT NULL,
  `codigo_mov_equipo_fk` int(11) NOT NULL,
  `voltaje_trabajo_ac` varchar(5) NOT NULL,
  `voltaje_trabajo_dc` varchar(5) NOT NULL,
  `potencia` varchar(10) NOT NULL,
  `corriente_max` varchar(10) NOT NULL,
  `frec_electrica` varchar(10) NOT NULL,
  `modo_funcionamiento` varchar(30) NOT NULL,
  `parametro_medicion` varchar(20) NOT NULL,
  PRIMARY KEY (`codigo_datos_tecnicos`),
  KEY `fk_tbl_datos_tecnicos_tbl_tipo_alimentacion1_idx` (`codigo_tipo_alimentacion_fk`),
  KEY `fk_tbl_datos_tecnicos_tbl_relacion_paciente1_idx` (`codigo_relacion_paciente_fk`),
  KEY `fk_tbl_datos_tecnicos_tbl_funcion_maquina1_idx` (`codigo_funcion_maquina_fk`),
  KEY `fk_tbl_datos_tecnicos_tbl_uso_especifico1_idx` (`codigo_uso_especifico_fk`),
  KEY `fk_tbl_datos_tecnicos_tbl_mov_equipo1_idx` (`codigo_mov_equipo_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_datos_tecnicos`
--

INSERT INTO `tbl_datos_tecnicos` (`codigo_datos_tecnicos`, `codigo_tipo_alimentacion_fk`, `codigo_relacion_paciente_fk`, `codigo_funcion_maquina_fk`, `codigo_uso_especifico_fk`, `codigo_mov_equipo_fk`, `voltaje_trabajo_ac`, `voltaje_trabajo_dc`, `potencia`, `corriente_max`, `frec_electrica`, `modo_funcionamiento`, `parametro_medicion`) VALUES
(22, 1, 1, 1, 1, 1, '120', '12', '25', '40', '60', 'No aplica', 'SPO2, NIBP, ECG, CGP');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_departamento`
--

DROP TABLE IF EXISTS `tbl_departamento`;
CREATE TABLE IF NOT EXISTS `tbl_departamento` (
  `codigo_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_departamento` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_departamento`
--

INSERT INTO `tbl_departamento` (`codigo_departamento`, `nombre_departamento`) VALUES
(1, 'Biomédica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_empleados`
--

DROP TABLE IF EXISTS `tbl_empleados`;
CREATE TABLE IF NOT EXISTS `tbl_empleados` (
  `codigo_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `id_empleado` varchar(45) NOT NULL,
  `codigo_persona_fk` int(11) NOT NULL,
  `codigo_cargo_fk` int(11) NOT NULL,
  `contrasena` varchar(500) NOT NULL,
  PRIMARY KEY (`codigo_empleado`),
  UNIQUE KEY `id_empleado_UNIQUE` (`id_empleado`),
  KEY `fk_tbl_emplados_tbl_persona1_idx` (`codigo_persona_fk`),
  KEY `fk_tbl_emplados_tbl_cargos1_idx` (`codigo_cargo_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_empleados`
--

INSERT INTO `tbl_empleados` (`codigo_empleado`, `id_empleado`, `codigo_persona_fk`, `codigo_cargo_fk`, `contrasena`) VALUES
(26, '1234', 29, 1, 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db'),
(27, '1122', 30, 1, '3ffdb04bc5d544b2125b7052ecc718afebc78f34a598500fa96431acf482fa5e2c0b604d8db458c547b54f576cc5bda609b468f96263c90d5ddb10299203524a'),
(28, '1123', 31, 2, '9c5407e659272602d26755e7b77a2dd015e9fb75c8ac3a8afb57d898e8abad3e8b394a67ee0bf95e9997de7e2439ad0078e6adc0f1060177eda28cc1be0203eb');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_equipo_medico`
--

DROP TABLE IF EXISTS `tbl_equipo_medico`;
CREATE TABLE IF NOT EXISTS `tbl_equipo_medico` (
  `codigo_equipo_medico` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_tipo_manual_fk` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `serie` varchar(50) NOT NULL,
  `codigo_hospital` varchar(45) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `ubicacion` varchar(150) NOT NULL,
  `tipo_adquisicion` varchar(45) NOT NULL,
  `fabricante` varchar(45) NOT NULL,
  `distribuidor` varchar(45) NOT NULL,
  `manual` blob,
  `codigo_datos_tecnicos_fk` int(11) NOT NULL,
  PRIMARY KEY (`codigo_equipo_medico`),
  KEY `fk_tbl_equipo_medico_tbl_tipo_manual1_idx` (`codigo_tipo_manual_fk`),
  KEY `fk_tbl_equipo_medico_tbl_datos_tecnicos1_idx` (`codigo_datos_tecnicos_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_equipo_medico`
--

INSERT INTO `tbl_equipo_medico` (`codigo_equipo_medico`, `codigo_tipo_manual_fk`, `nombre`, `modelo`, `serie`, `codigo_hospital`, `marca`, `ubicacion`, `tipo_adquisicion`, `fabricante`, `distribuidor`, `manual`, `codigo_datos_tecnicos_fk`) VALUES
(20, 1, 'Monitor de signos vitales', 'mennen', 'CZ-00123', '1.E.E0.01.MSV', 'Mindray', 'Recuperación', 'Donación', 'Mindray', 'Seijiro Yazawa Iwai', NULL, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_funcion_maquina`
--

DROP TABLE IF EXISTS `tbl_funcion_maquina`;
CREATE TABLE IF NOT EXISTS `tbl_funcion_maquina` (
  `codigo_funcion_maquina` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_funcion_maquina` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_funcion_maquina`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_funcion_maquina`
--

INSERT INTO `tbl_funcion_maquina` (`codigo_funcion_maquina`, `tipo_funcion_maquina`) VALUES
(1, 'Medición'),
(2, 'Soporte vital'),
(3, 'Asistencia a médicos'),
(4, 'N/A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_mantenimiento`
--

DROP TABLE IF EXISTS `tbl_mantenimiento`;
CREATE TABLE IF NOT EXISTS `tbl_mantenimiento` (
  `codigo_mantenimiento` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_empleado_fk` int(11) DEFAULT NULL,
  `codigo_equipo_medico_fk` int(11) NOT NULL,
  `codigo_tipo_mantenimiento_fk` int(11) NOT NULL,
  `descripcion_mant` varchar(1000) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`codigo_mantenimiento`),
  KEY `fk_tbl_mantenimiento_tbl_emplados1_idx` (`codigo_empleado_fk`),
  KEY `fk_tbl_mantenimiento_tbl_equipo_medico1_idx` (`codigo_equipo_medico_fk`),
  KEY `fk_tbl_mantenimiento_tbl_tipo_mantenimiento1_idx` (`codigo_tipo_mantenimiento_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_mantenimiento`
--

INSERT INTO `tbl_mantenimiento` (`codigo_mantenimiento`, `codigo_empleado_fk`, `codigo_equipo_medico_fk`, `codigo_tipo_mantenimiento_fk`, `descripcion_mant`, `fecha`) VALUES
(1, 27, 20, 1, 'Cambio de cables troncales y sensores', '2018-09-28'),
(2, 27, 20, 1, 'Limpieza', '2018-09-28'),
(3, 27, 20, 1, 'Cambio de puerto de ECG', '2018-09-28'),
(8, 28, 20, 1, 'safdfsd\r\nasdfsdafsa\r\nsadfsd', '2018-10-03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_mov_equipo`
--

DROP TABLE IF EXISTS `tbl_mov_equipo`;
CREATE TABLE IF NOT EXISTS `tbl_mov_equipo` (
  `codigo_mov_equipo` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_mov_equipo` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_mov_equipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_mov_equipo`
--

INSERT INTO `tbl_mov_equipo` (`codigo_mov_equipo`, `tipo_mov_equipo`) VALUES
(1, 'Fijo'),
(2, 'Móvil'),
(3, 'N/A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_nacionalidades`
--

DROP TABLE IF EXISTS `tbl_nacionalidades`;
CREATE TABLE IF NOT EXISTS `tbl_nacionalidades` (
  `codigo_pais` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_pais` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=198 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_nacionalidades`
--

INSERT INTO `tbl_nacionalidades` (`codigo_pais`, `nombre_pais`) VALUES
(1, '	Afganistán	'),
(2, '	Albania	'),
(3, '	Alemania	'),
(4, '	Andorra	'),
(5, '	Angola	'),
(6, '	Antigua y Barbuda	'),
(7, '	Arabia Saudita	'),
(8, '	Argelia	'),
(9, '	Argentina	'),
(10, '	Armenia	'),
(11, '	Australia	'),
(12, '	Austria	'),
(13, '	Azerbaiyán	'),
(14, '	Bahamas	'),
(15, '	Bangladés	'),
(16, '	Barbados	'),
(17, '	Baréin	'),
(18, '	Bélgica	'),
(19, '	Belice	'),
(20, '	Benín	'),
(21, '	Bielorrusia	'),
(22, '	Birmania	'),
(23, '	Bolivia	'),
(24, '	Bosnia-Herzegovina	'),
(25, '	Botsuana	'),
(26, '	Brasil	'),
(27, '	Brunéi	'),
(28, '	Bulgaria	'),
(29, '	Burkina Faso	'),
(30, '	Burundi	'),
(31, '	Bután	'),
(32, '	Cabo Verde	'),
(33, '	Camboya	'),
(34, '	Camerún	'),
(35, '	Canadá	'),
(36, '	Catar	'),
(37, '	Chad	'),
(38, '	Chile	'),
(39, '	China	'),
(40, '	Chipre	'),
(41, '	Colombia	'),
(42, '	Comoras	'),
(43, '	Congo	'),
(44, '	Corea del Norte	'),
(45, '	Corea del Sur	'),
(46, '	Costa de Marfil	'),
(47, '	Costa Rica	'),
(48, '	Croacia	'),
(49, '	Cuba	'),
(50, '	Dinamarca	'),
(51, '	Dominica	'),
(52, '	Ecuador	'),
(53, '	Egipto	'),
(54, '	El Salvador	'),
(55, '	Emiratos Árabes Unidos	'),
(56, '	Eritrea	'),
(57, '	Eslovaquia	'),
(58, '	Eslovenia	'),
(59, '	España	'),
(60, '	Estados Unidos	'),
(61, '	Estonia	'),
(62, '	Etiopía	'),
(63, '	Filipinas	'),
(64, '	Finlandia	'),
(65, '	Fiyi	'),
(66, '	Francia	'),
(67, '	Gabón	'),
(68, '	Gambia	'),
(69, '	Georgia	'),
(70, '	Ghana	'),
(71, '	Granada	'),
(72, '	Grecia	'),
(73, '	Guatemala	'),
(74, '	Guinea	'),
(75, '	Guinea Ecuatorial	'),
(76, '	Guinea-Bisáu	'),
(77, '	Guyana	'),
(78, '	Haití	'),
(79, '	Honduras	'),
(80, '	Hungría	'),
(81, '	India	'),
(82, '	Indonesia	'),
(83, '	Irak	'),
(84, '	Irán	'),
(85, '	Irlanda	'),
(86, '	Islandia	'),
(87, '	Islas Marshall	'),
(88, '	Islas Salomón	'),
(89, '	Israel	'),
(90, '	Italia	'),
(91, '	Jamaica	'),
(92, '	Japón	'),
(93, '	Jordania	'),
(94, '	Kazajistán	'),
(95, '	Kenia	'),
(96, '	Kirguistán	'),
(97, '	Kiribati	'),
(98, '	Kosovo	'),
(99, '	Kuwait	'),
(100, '	Laos	'),
(101, '	Lesoto	'),
(102, '	Letonia	'),
(103, '	Líbano	'),
(104, '	Liberia	'),
(105, '	Libia	'),
(106, '	Liechtenstein	'),
(107, '	Lituania	'),
(108, '	Luxemburgo	'),
(109, '	Macedonia	'),
(110, '	Madagascar	'),
(111, '	Malasia	'),
(112, '	Malaui	'),
(113, '	Maldivas	'),
(114, '	Malí	'),
(115, '	Malta	'),
(116, '	Marruecos	'),
(117, '	Mauricio	'),
(118, '	Mauritania	'),
(119, '	México	'),
(120, '	Micronesia	'),
(121, '	Moldavia	'),
(122, '	Mónaco	'),
(123, '	Mongolia	'),
(124, '	Montenegro	'),
(125, '	Mozambique	'),
(126, '	Namibia	'),
(127, '	Nauru	'),
(128, '	Nepal	'),
(129, '	Nicaragua	'),
(130, '	Níger	'),
(131, '	Nigeria	'),
(132, '	Noruega	'),
(133, '	Nueva Zelanda	'),
(134, '	Omán	'),
(135, '	Países Bajos	'),
(136, '	Pakistán	'),
(137, '	Palaos	'),
(138, '	Palestina	'),
(139, '	Panamá	'),
(140, '	Papúa Nueva Guinea	'),
(141, '	Paraguay	'),
(142, '	Perú	'),
(143, '	Polonia	'),
(144, '	Portugal	'),
(145, '	Reino Unido	'),
(146, '	República Centroafricana	'),
(147, '	República Checa	'),
(148, '	República Democrática del Congo	'),
(149, '	República Dominicana	'),
(150, '	Ruanda	'),
(151, '	Rumania	'),
(152, '	Rusia	'),
(153, '	Samoa	'),
(154, '	San Cristóbal y Nieves	'),
(155, '	San Marino	'),
(156, '	San Vicente y las Granadinas	'),
(157, '	Santa Lucía	'),
(158, '	Santo Tomé y Príncipe	'),
(159, '	Senegal	'),
(160, '	Serbia	'),
(161, '	Seychelles	'),
(162, '	Sierra Leona	'),
(163, '	Singapur	'),
(164, '	Siria	'),
(165, '	Somalia	'),
(166, '	Sri Lanka	'),
(167, '	Suazilandia	'),
(168, '	Sudáfrica	'),
(169, '	Sudán	'),
(170, '	Sudán del Sur	'),
(171, '	Suecia	'),
(172, '	Suiza	'),
(173, '	Surinam	'),
(174, '	Tailandia	'),
(175, '	Taiwán	'),
(176, '	Tanzania	'),
(177, '	Tayikistán	'),
(178, '	Timor Oriental	'),
(179, '	Togo	'),
(180, '	Tonga	'),
(181, '	Trinidad y Tobago	'),
(182, '	Túnez	'),
(183, '	Turkmenistán	'),
(184, '	Turquía	'),
(185, '	Tuvalu	'),
(186, '	Ucrania	'),
(187, '	Uganda	'),
(188, '	Uruguay	'),
(189, '	Uzbekistán	'),
(190, '	Vanuatu	'),
(191, '	Vaticano	'),
(192, '	Venezuela	'),
(193, '	Vietnam	'),
(194, '	Yemen	'),
(195, '	Yibuti	'),
(196, '	Zambia	'),
(197, '	Zimbabue	');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_persona`
--

DROP TABLE IF EXISTS `tbl_persona`;
CREATE TABLE IF NOT EXISTS `tbl_persona` (
  `codigo_persona` int(11) NOT NULL AUTO_INCREMENT,
  `id_persona` varchar(13) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `edad` varchar(2) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `codigo_pais_fk` int(11) NOT NULL,
  PRIMARY KEY (`codigo_persona`),
  UNIQUE KEY `id_persona_UNIQUE` (`id_persona`),
  KEY `fk_tbl_persona_tbl_nacionalidades_idx` (`codigo_pais_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_persona`
--

INSERT INTO `tbl_persona` (`codigo_persona`, `id_persona`, `nombre`, `apellido`, `edad`, `sexo`, `fecha_nacimiento`, `direccion`, `telefono`, `codigo_pais_fk`) VALUES
(29, '1234', 'José', 'Raudales', '22', 'masculino', '1996-03-14', 'Residencial Francisco Morazán', '33754384', 79),
(30, '1201199400903', 'Saul', 'Guzman', '23', 'masculino', '1994-12-08', 'No importa', 'No importa', 79),
(31, '1201199300123', 'Juan', 'Perez', '23', 'masculino', '2018-10-03', 'La Paz, La Paz', '12345678', 79);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_relacion_paciente`
--

DROP TABLE IF EXISTS `tbl_relacion_paciente`;
CREATE TABLE IF NOT EXISTS `tbl_relacion_paciente` (
  `codigo_relacion_paciente` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_relacion` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_relacion_paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_relacion_paciente`
--

INSERT INTO `tbl_relacion_paciente` (`codigo_relacion_paciente`, `tipo_relacion`) VALUES
(1, 'Directa'),
(2, 'Indirecta'),
(3, 'N/A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_solicitud_acceso`
--

DROP TABLE IF EXISTS `tbl_solicitud_acceso`;
CREATE TABLE IF NOT EXISTS `tbl_solicitud_acceso` (
  `codigo_solicitud_acceso` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_empleado_fk` int(11) NOT NULL,
  `estatus_acceso` int(11) NOT NULL,
  PRIMARY KEY (`codigo_solicitud_acceso`),
  KEY `fk_tbl_solicitud_acceso_tbl_empleados1_idx` (`codigo_empleado_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_solicitud_acceso`
--

INSERT INTO `tbl_solicitud_acceso` (`codigo_solicitud_acceso`, `codigo_empleado_fk`, `estatus_acceso`) VALUES
(25, 26, 1),
(26, 27, 1),
(27, 28, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tipo_alimentacion`
--

DROP TABLE IF EXISTS `tbl_tipo_alimentacion`;
CREATE TABLE IF NOT EXISTS `tbl_tipo_alimentacion` (
  `codigo_tipo_alimentacion` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_alimentacion` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_tipo_alimentacion`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_tipo_alimentacion`
--

INSERT INTO `tbl_tipo_alimentacion` (`codigo_tipo_alimentacion`, `tipo_alimentacion`) VALUES
(1, 'Eléctrica'),
(2, 'Hidráulica'),
(3, 'Vapor'),
(4, 'Gases medicinales'),
(5, 'N/A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tipo_mantenimiento`
--

DROP TABLE IF EXISTS `tbl_tipo_mantenimiento`;
CREATE TABLE IF NOT EXISTS `tbl_tipo_mantenimiento` (
  `codigo_tipo_mantenimiento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_mantenimiento` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_tipo_mantenimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_tipo_mantenimiento`
--

INSERT INTO `tbl_tipo_mantenimiento` (`codigo_tipo_mantenimiento`, `tipo_mantenimiento`) VALUES
(1, 'Preventivo'),
(2, 'Correctivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tipo_manual`
--

DROP TABLE IF EXISTS `tbl_tipo_manual`;
CREATE TABLE IF NOT EXISTS `tbl_tipo_manual` (
  `codigo_tipo_manual` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_manual` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_tipo_manual`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_tipo_manual`
--

INSERT INTO `tbl_tipo_manual` (`codigo_tipo_manual`, `tipo_manual`) VALUES
(1, 'Físico'),
(2, 'Virtual'),
(3, 'N/A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_uso_especifico`
--

DROP TABLE IF EXISTS `tbl_uso_especifico`;
CREATE TABLE IF NOT EXISTS `tbl_uso_especifico` (
  `codigo_uso_especifico` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_uso_especifico` varchar(20) NOT NULL,
  PRIMARY KEY (`codigo_uso_especifico`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_uso_especifico`
--

INSERT INTO `tbl_uso_especifico` (`codigo_uso_especifico`, `tipo_uso_especifico`) VALUES
(1, 'Diagnóstico'),
(2, 'Tratamiento'),
(3, 'Rehabilitación'),
(4, 'Asistencia general'),
(5, 'Laboratorio'),
(6, 'Soporte vital'),
(7, 'N/A');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_cargos`
--
ALTER TABLE `tbl_cargos`
  ADD CONSTRAINT `fk_tbl_cargos_tbl_departamento1` FOREIGN KEY (`codigo_departamento_fk`) REFERENCES `tbl_departamento` (`codigo_departamento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_datos_tecnicos`
--
ALTER TABLE `tbl_datos_tecnicos`
  ADD CONSTRAINT `fk_tbl_datos_tecnicos_tbl_funcion_maquina1` FOREIGN KEY (`codigo_funcion_maquina_fk`) REFERENCES `tbl_funcion_maquina` (`codigo_funcion_maquina`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_datos_tecnicos_tbl_mov_equipo1` FOREIGN KEY (`codigo_mov_equipo_fk`) REFERENCES `tbl_mov_equipo` (`codigo_mov_equipo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_datos_tecnicos_tbl_relacion_paciente1` FOREIGN KEY (`codigo_relacion_paciente_fk`) REFERENCES `tbl_relacion_paciente` (`codigo_relacion_paciente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_datos_tecnicos_tbl_tipo_alimentacion1` FOREIGN KEY (`codigo_tipo_alimentacion_fk`) REFERENCES `tbl_tipo_alimentacion` (`codigo_tipo_alimentacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_datos_tecnicos_tbl_uso_especifico1` FOREIGN KEY (`codigo_uso_especifico_fk`) REFERENCES `tbl_uso_especifico` (`codigo_uso_especifico`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_empleados`
--
ALTER TABLE `tbl_empleados`
  ADD CONSTRAINT `fk_tbl_emplados_tbl_cargos1` FOREIGN KEY (`codigo_cargo_fk`) REFERENCES `tbl_cargos` (`codigo_cargo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_emplados_tbl_persona1` FOREIGN KEY (`codigo_persona_fk`) REFERENCES `tbl_persona` (`codigo_persona`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_equipo_medico`
--
ALTER TABLE `tbl_equipo_medico`
  ADD CONSTRAINT `fk_tbl_equipo_medico_tbl_datos_tecnicos1` FOREIGN KEY (`codigo_datos_tecnicos_fk`) REFERENCES `tbl_datos_tecnicos` (`codigo_datos_tecnicos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_equipo_medico_tbl_tipo_manual1` FOREIGN KEY (`codigo_tipo_manual_fk`) REFERENCES `tbl_tipo_manual` (`codigo_tipo_manual`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_mantenimiento`
--
ALTER TABLE `tbl_mantenimiento`
  ADD CONSTRAINT `fk_tbl_mantenimiento_tbl_emplados1` FOREIGN KEY (`codigo_empleado_fk`) REFERENCES `tbl_empleados` (`codigo_empleado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_mantenimiento_tbl_equipo_medico1` FOREIGN KEY (`codigo_equipo_medico_fk`) REFERENCES `tbl_equipo_medico` (`codigo_equipo_medico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_mantenimiento_tbl_tipo_mantenimiento1` FOREIGN KEY (`codigo_tipo_mantenimiento_fk`) REFERENCES `tbl_tipo_mantenimiento` (`codigo_tipo_mantenimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_persona`
--
ALTER TABLE `tbl_persona`
  ADD CONSTRAINT `fk_tbl_persona_tbl_nacionalidades` FOREIGN KEY (`codigo_pais_fk`) REFERENCES `tbl_nacionalidades` (`codigo_pais`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_solicitud_acceso`
--
ALTER TABLE `tbl_solicitud_acceso`
  ADD CONSTRAINT `fk_tbl_solicitud_acceso_tbl_empleados1` FOREIGN KEY (`codigo_empleado_fk`) REFERENCES `tbl_empleados` (`codigo_empleado`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
