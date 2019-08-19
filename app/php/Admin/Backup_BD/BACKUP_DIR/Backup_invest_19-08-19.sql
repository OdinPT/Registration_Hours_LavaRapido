CREATE DATABASE IF NOT EXISTS `invest`;

USE `invest`;

SET foreign_key_checks = 0;

DROP TABLE IF EXISTS `Lim_Max_Cont`;

CREATE TABLE `Lim_Max_Cont` (
  `ID_LimMaxCont` int(11) NOT NULL AUTO_INCREMENT,
  `Limit_Diario` int(11) NOT NULL,
  `ID_Local_LimMaxCont` int(11) NOT NULL,
  `Tipo_Equip_LimMaxCont` int(11) NOT NULL,
  PRIMARY KEY (`ID_LimMaxCont`),
  KEY `LimMax_FK_locais` (`ID_Local_LimMaxCont`),
  CONSTRAINT `LimMax_FK_locais` FOREIGN KEY (`ID_Local_LimMaxCont`) REFERENCES `locais` (`ID_Local`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

INSERT INTO `Lim_Max_Cont` VALUES (1,1000,1,8),
(2,1100,1,9),
(3,1000,2,8),
(5,1000,3,8),
(6,1000,1,22),
(9,3000,3,22),
(11,2000,2,9),
(12,1000,4,8),
(13,1000,3,9),
(14,2300,1,29);


DROP TABLE IF EXISTS `Log_PostosPistas`;

CREATE TABLE `Log_PostosPistas` (
  `ID_PP_Log` int(11) NOT NULL AUTO_INCREMENT,
  `ID_PPistas_Log` int(11) DEFAULT NULL,
  `ID_PPLocal_Log` int(11) DEFAULT NULL,
  `Contagem_PP_Log` int(11) DEFAULT NULL,
  `Data_PP_Log` date DEFAULT NULL,
  `ID_FuncPP_Log` int(11) DEFAULT NULL,
  `Tipo_operacao` int(11) DEFAULT NULL,
  `Num_Equi` int(11) NOT NULL,
  PRIMARY KEY (`ID_PP_Log`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=latin1;

INSERT INTO `Log_PostosPistas` VALUES (4,4,1,903,"2019-03-29",2,3,104),
(5,4,1,910,"2019-03-29",2,3,104),
(6,4,1,914,"2019-03-29",2,3,104),
(7,4,1,930,"2019-03-29",2,3,104),
(8,6,2,100,"2019-04-01",2,2,101),
(9,7,1,1500,"2019-04-17",2,2,102),
(10,9,1,999,"2019-05-10",2,2,102),
(11,8,1,998,"2019-05-10",2,3,102),
(12,9,1,987,"2019-05-10",2,3,102),
(13,8,1,997,"2019-05-16",2,3,102),
(14,10,1,100,"2019-05-16",2,2,102),
(15,11,1,1000,"2019-05-23",2,2,111),
(16,13,1,1001,"2019-05-23",2,2,111),
(17,14,1,1010,"2019-05-23",2,2,111),
(18,15,1,1011,"2019-05-23",2,2,111),
(19,18,1,999,"2019-05-23",2,2,102),
(20,18,1,1000,"2019-05-23",2,3,102),
(21,18,1,1006,"2019-05-23",2,3,102),
(22,19,1,1000,"2019-05-23",2,2,104),
(23,19,1,990,"2019-05-23",2,3,104),
(24,23,1,2000,"2019-05-24",2,2,102),
(25,24,1,1000,"2019-05-24",2,2,104),
(26,23,1,3000,"2019-05-24",2,3,102),
(27,23,1,9000,"2019-05-24",2,3,102),
(28,30,1,1010,"2019-05-24",2,2,102),
(29,30,1,1010,"2019-05-24",2,3,102),
(30,30,1,1310,"2019-05-24",2,3,102),
(31,30,1,1310,"2019-05-24",2,3,102),
(32,30,1,1310,"2019-05-24",2,3,102),
(33,30,1,1310,"2019-05-24",2,3,102),
(34,30,1,1310,"2019-05-24",2,3,102),
(35,30,1,1310,"2019-05-24",2,3,102),
(36,30,1,1310,"2019-05-24",2,3,102),
(37,30,1,1310,"2019-05-24",2,3,102),
(38,31,1,998,"2019-05-25",2,2,104),
(39,31,1,1000,"2019-05-25",2,3,104),
(40,32,1,999,"2019-05-25",2,2,102),
(41,32,1,1300,"2019-05-25",2,3,102),
(42,33,1,1020,"2019-05-29",2,2,102),
(43,34,1,999,"2019-05-30",2,2,102),
(44,36,1,666,"2019-05-30",2,2,102),
(45,36,1,990,"2019-06-05",2,2,102),
(46,37,1,998,"2019-06-09",2,2,102),
(47,39,1,666,"2019-06-10",2,2,102),
(48,40,1,101,"2019-06-15",2,2,102),
(49,41,1,234,"2019-06-15",2,2,102),
(50,43,1,888,"2019-06-17",2,2,102),
(51,44,1,876,"2019-06-17",2,2,102),
(52,45,1,654,"2019-06-17",2,2,102),
(53,46,1,243,"2019-06-17",2,2,102),
(54,48,1,444,"2019-06-17",2,2,102),
(55,49,1,123,"2019-06-17",2,2,102),
(56,50,1,456,"2019-06-17",2,2,104),
(57,51,1,333,"2019-06-17",2,2,111),
(58,52,1,232,"2019-06-19",2,2,102),
(59,54,1,432,"2019-06-19",2,2,102),
(60,55,1,212,"2019-06-19",2,2,102),
(61,56,2,432,"2019-06-19",2,2,105),
(62,57,1,897,"2019-06-19",2,2,102),
(63,58,1,342,"2019-06-19",2,2,102),
(64,59,1,204,"2019-06-19",2,2,102),
(65,60,1,231,"2019-06-19",2,2,104),
(66,61,1,213,"2019-06-20",2,2,102),
(67,64,1,234,"2019-06-20",2,2,102),
(68,65,2,121,"2019-06-21",2,2,101),
(69,66,2,123,"2019-06-23",2,2,101),
(70,68,2,232,"2019-06-23",2,2,101),
(71,71,2,111,"2019-06-23",2,2,105),
(72,73,2,22,"2019-07-02",2,2,101),
(73,74,2,999,"2019-07-02",2,2,105),
(74,75,2,321,"2019-07-02",2,2,101),
(75,76,3,323,"2019-07-03",1,2,103),
(76,77,3,564,"2019-07-04",1,2,103),
(77,78,3,432,"2019-07-04",1,2,103),
(78,79,2,789,"2019-07-04",2,2,101),
(79,80,2,102,"2019-07-04",2,2,101),
(80,81,3,254,"2019-07-04",1,2,103),
(81,82,3,234,"2019-07-04",1,2,103),
(82,83,3,321,"2019-07-04",3,2,114),
(83,84,3,111,"2019-07-05",1,2,103),
(84,85,3,98,"2019-07-05",1,2,103),
(85,86,3,231,"2019-07-05",1,2,106),
(86,84,2,111,"2019-07-07",2,2,101),
(87,15,2,111,"2019-07-07",2,3,101),
(88,15,2,111,"2019-07-07",2,3,101),
(89,85,2,111,"2019-07-12",2,2,101),
(90,88,2,132,"2019-07-12",2,2,101),
(91,89,3,111,"2019-07-14",1,2,103),
(92,91,3,123,"2019-07-14",1,2,103),
(93,93,3,342,"2019-07-16",1,2,103),
(94,97,2,111,"2019-08-06",2,2,101),
(95,99,2,444,"2019-08-07",2,2,105),
(96,100,2,488,"2019-08-08",2,2,101),
(97,101,1,1,"2019-08-08",6,2,102),
(98,104,2,444,"2019-08-08",2,2,101),
(99,105,1,222,"2019-08-08",1,2,102),
(100,106,1,454,"2019-08-09",5,2,102),
(101,107,3,555,"2019-08-10",2,2,103),
(102,108,3,987,"2019-08-10",1,2,103),
(103,109,3,988,"2019-08-10",2,2,103),
(104,110,3,987,"2019-08-10",2,2,103),
(105,111,3,888,"2019-08-11",1,2,103),
(106,112,3,432,"2019-08-11",2,2,103),
(107,113,3,213,"2019-08-11",1,2,107),
(108,114,3,321,"2019-08-11",2,2,103),
(109,115,2,1122,"2019-08-12",2,2,101),
(110,116,2,1121,"2019-08-12",2,2,101),
(111,117,1,2300,"2019-08-13",2,2,102),
(112,118,1,12,"2019-08-16",2,2,102);


DROP TABLE IF EXISTS `Log_Regbackup_Reglogin`;

CREATE TABLE `Log_Regbackup_Reglogin` (
  `ID_Backup` int(11) NOT NULL AUTO_INCREMENT,
  `Nome_Backup` varchar(60) DEFAULT NULL,
  `Data_Backup` datetime NOT NULL,
  `IdFunc_Backup` int(11) NOT NULL,
  `Tipo_registo_Rb` int(11) NOT NULL,
  PRIMARY KEY (`ID_Backup`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=latin1 COMMENT='log registo backups e registo de login';

INSERT INTO `Log_Regbackup_Reglogin` VALUES (1,"Backup_invest_18-04-19.sql","2019-04-18 00:00:00",2,16),
(11,"Backup_invest_22-04-19.sql","2019-04-22 15:37:17",2,16),
(12,"Backup_invest_22-04-19.sql","2019-04-22 15:37:45",2,16),
(13,"Backup_invest_22-04-19.sql","2019-04-22 15:48:42",2,16),
(14,NULL,"2019-04-22 18:48:40",2,17),
(15,NULL,"2019-04-22 19:01:38",2,17),
(16,NULL,"2019-04-22 19:02:35",2,17),
(17,NULL,"2019-04-22 19:06:41",2,17),
(18,NULL,"2019-04-22 19:07:06",1,17),
(20,NULL,"2019-04-22 19:30:18",1,17),
(21,NULL,"2019-04-22 19:30:53",1,18),
(22,NULL,"2019-04-22 19:32:41",2,17),
(23,"Backup_invest_24-04-19.sql","2019-04-24 19:36:05",2,16),
(24,"Backup_invest_24-04-19.sql","2019-04-24 19:39:55",2,16),
(25,"Backup_invest_24-04-19.sql","2019-04-24 19:40:14",2,16),
(26,"Backup_invest_24-04-19.sql","2019-04-24 19:41:59",2,16),
(27,"Backup_invest_24-04-19.sql","2019-04-24 19:42:20",2,16),
(28,"Backup_invest_24-04-19.sql","2019-04-24 19:45:11",2,16),
(29,"Backup_invest_25-04-19.sql","2019-04-25 19:24:24",2,16),
(30,"Backup_invest_26-04-19.sql","2019-04-26 00:15:35",2,16),
(31,"Backup_invest_26-04-19.sql","2019-04-26 00:54:31",2,16),
(32,"Backup_invest_26-04-19.sql","2019-04-26 01:13:17",2,16),
(33,"Backup_invest_26-04-19.sql","2019-04-26 01:15:01",2,16),
(34,"Backup_invest_26-04-19.sql","2019-04-26 01:18:08",2,16),
(35,"Backup_invest_26-04-19.sql","2019-04-26 01:23:08",2,16),
(36,"Backup_invest_26-04-19.sql","2019-04-26 01:24:01",2,16),
(37,"Backup_invest_26-04-19.sql","2019-04-26 01:24:39",2,16),
(38,"Backup_invest_26-04-19.sql","2019-04-26 01:29:56",2,16),
(39,"Backup_invest_26-04-19.sql","2019-04-26 01:32:55",2,16),
(40,"Backup_invest_26-04-19.sql","2019-04-26 01:35:07",2,16),
(41,"Backup_invest_26-04-19.sql","2019-04-26 01:37:23",2,16),
(42,"Backup_invest_26-04-19.sql","2019-04-26 01:37:31",2,16),
(43,"Backup_invest_26-04-19.sql","2019-04-26 01:42:31",2,16),
(44,"Backup_invest_26-04-19.sql","2019-04-26 01:42:56",2,16),
(45,"Backup_invest_26-04-19.sql","2019-04-26 01:43:49",2,16),
(46,"Backup_invest_26-04-19.sql","2019-04-26 01:44:19",2,16),
(47,"Backup_invest_26-04-19.sql","2019-04-26 01:48:05",2,16),
(48,"Backup_invest_26-04-19.sql","2019-04-26 01:49:02",2,16),
(49,"Backup_invest_26-04-19.sql","2019-04-26 01:49:44",2,16),
(50,"Backup_invest_26-04-19.sql","2019-04-26 01:50:52",2,16),
(51,"Backup_invest_26-04-19.sql","2019-04-26 01:54:14",2,16),
(52,"Backup_invest_26-04-19.sql","2019-04-26 01:54:50",2,16),
(53,"Backup_invest_26-04-19.sql","2019-04-26 01:58:05",2,16),
(54,"Backup_invest_26-04-19.sql","2019-04-26 01:59:30",2,16),
(55,"Backup_invest_26-04-19.sql","2019-04-26 02:04:18",2,16),
(56,NULL,"2019-04-27 00:59:11",1,17),
(57,NULL,"2019-04-27 01:08:23",1,17),
(58,NULL,"2019-05-10 16:42:24",1,17),
(59,NULL,"2019-05-11 11:04:45",2,17),
(60,NULL,"2019-05-17 00:51:00",2,17),
(61,NULL,"2019-05-17 00:52:30",2,17),
(62,NULL,"2019-05-17 11:37:50",2,17),
(63,NULL,"2019-05-22 23:30:16",2,17),
(64,NULL,"2019-05-22 23:31:20",1,17),
(65,NULL,"2019-06-21 02:12:13",2,17),
(66,NULL,"2019-06-21 02:15:06",1,17),
(67,NULL,"2019-06-21 03:34:24",3,17),
(68,NULL,"2019-06-21 03:35:39",1,17),
(69,NULL,"2019-06-21 03:36:11",2,17),
(70,NULL,"2019-06-21 03:38:42",3,17),
(71,NULL,"2019-06-21 03:43:40",3,17),
(72,NULL,"2019-06-21 03:44:10",1,17),
(73,NULL,"2019-07-02 02:30:57",2,17),
(74,NULL,"2019-07-02 02:38:59",1,17),
(75,NULL,"2019-07-02 02:39:43",2,17),
(76,NULL,"2019-07-02 02:40:05",1,17),
(77,NULL,"2019-07-02 02:41:43",2,17),
(78,NULL,"2019-07-03 18:05:32",2,17),
(79,NULL,"2019-07-04 02:01:11",1,17),
(80,NULL,"2019-07-04 02:57:24",1,17),
(81,NULL,"2019-07-04 03:00:01",2,17),
(82,NULL,"2019-07-04 03:07:19",2,17),
(83,NULL,"2019-07-04 03:13:06",2,17),
(84,NULL,"2019-07-04 03:13:20",1,17),
(85,NULL,"2019-07-04 15:13:29",2,17),
(86,NULL,"2019-07-04 15:14:45",1,17),
(87,NULL,"2019-07-04 15:15:38",2,17),
(88,NULL,"2019-07-04 15:16:16",1,17),
(89,NULL,"2019-07-04 20:54:13",1,17),
(90,NULL,"2019-07-04 20:55:26",1,17),
(91,NULL,"2019-07-04 23:36:29",1,17),
(92,NULL,"2019-07-04 23:44:24",3,17),
(93,NULL,"2019-07-05 00:18:01",1,17),
(94,NULL,"2019-07-05 17:21:12",2,17),
(95,NULL,"2019-07-07 22:05:59",1,17),
(96,NULL,"2019-07-12 22:54:39",2,17),
(97,NULL,"2019-07-13 23:46:42",2,17),
(98,NULL,"2019-07-13 23:46:53",2,17),
(99,NULL,"2019-07-14 01:06:44",1,17),
(100,NULL,"2019-07-14 02:20:51",1,17),
(101,NULL,"2019-07-14 02:21:32",1,17),
(102,NULL,"2019-07-14 02:21:51",2,17),
(103,NULL,"2019-07-16 15:51:09",1,17),
(104,NULL,"2019-07-16 15:51:30",1,17),
(105,NULL,"2019-08-08 01:07:47",2,17),
(106,NULL,"2019-08-08 01:20:01",6,17),
(107,NULL,"2019-08-08 01:26:44",2,17),
(108,NULL,"2019-08-08 01:27:36",6,17),
(109,NULL,"2019-08-08 01:28:32",2,17),
(110,NULL,"2019-08-08 01:35:01",1,17),
(111,NULL,"2019-08-08 01:35:33",6,17),
(112,NULL,"2019-08-09 02:55:46",5,17),
(113,NULL,"2019-08-10 01:29:30",2,17),
(114,NULL,"2019-08-10 01:55:34",1,17),
(115,NULL,"2019-08-10 02:02:16",1,17),
(116,NULL,"2019-08-10 03:02:45",2,17),
(117,NULL,"2019-08-10 03:05:24",1,17),
(118,NULL,"2019-08-10 03:06:41",2,17),
(119,NULL,"2019-08-11 17:36:26",1,17),
(120,NULL,"2019-08-11 22:21:13",2,17),
(121,NULL,"2019-08-11 22:21:35",1,17),
(122,"Backup_invest_13-08-19.sql","2019-08-13 02:49:47",2,16),
(123,NULL,"2019-08-16 03:33:02",2,17),
(124,NULL,"2019-08-16 03:34:55",2,17),
(125,NULL,"2019-08-16 03:38:27",2,17),
(126,NULL,"2019-08-16 03:39:14",2,17),
(127,NULL,"2019-08-17 22:05:18",2,17),
(128,NULL,"2019-08-17 22:07:10",2,17),
(129,"Backup_invest_19-08-19.sql","2019-08-19 21:32:43",2,16);


DROP TABLE IF EXISTS `Postos_Pistas`;

CREATE TABLE `Postos_Pistas` (
  `ID_PPistas` int(11) NOT NULL AUTO_INCREMENT,
  `ContagemPP` int(11) DEFAULT NULL,
  `DataPP` date DEFAULT NULL,
  `ID_Func_PP` int(11) NOT NULL,
  `ID_EquiPorLav_PP` int(11) NOT NULL,
  PRIMARY KEY (`ID_PPistas`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=latin1;

INSERT INTO `Postos_Pistas` VALUES (1,1000,"2019-06-19",2,3),
(3,1100,"2018-12-31",2,5),
(4,930,"2019-03-24",2,7),
(5,2100,"2019-03-28",2,5),
(6,100,"2019-04-01",2,3),
(7,1500,"2019-04-17",2,5),
(8,997,"2019-05-10",2,5),
(9,987,"2019-05-09",2,5),
(10,100,"2019-05-16",2,5),
(11,1000,"2019-05-23",2,19),
(12,1000,"2019-05-23",2,19),
(13,1001,"2019-05-23",2,19),
(14,1010,"2019-05-23",2,19),
(15,111,"2019-05-23",2,19),
(16,1011,"2019-05-23",2,19),
(17,1011,"2019-05-23",2,19),
(18,1006,"2019-05-23",2,5),
(19,990,"2019-05-23",2,7),
(20,1000,"2019-05-23",2,5),
(21,1000,"2019-05-23",2,5),
(22,1000,"2019-05-24",2,5),
(23,9000,"2019-05-24",2,5),
(24,1000,"2019-05-24",2,7),
(25,1001,"2019-05-24",2,19),
(26,1001,"2019-05-24",2,19),
(27,1001,"2019-05-24",2,19),
(28,1001,"2019-05-24",2,19),
(29,1010,"2019-05-24",2,19),
(30,1310,"2019-05-24",2,5),
(33,1020,"2019-05-29",2,5),
(34,999,"2019-05-30",2,5),
(35,987,"2019-05-30",2,5),
(36,990,"2019-06-05",2,5),
(37,998,"2019-06-09",2,5),
(38,987,"2019-06-10",2,5),
(39,666,"2019-06-10",2,5),
(49,123,"2019-06-17",2,5),
(50,456,"2019-06-17",2,7),
(51,333,"2019-06-17",2,19),
(60,231,"2019-06-19",2,7),
(65,121,"2019-06-21",2,3),
(66,123,"2019-06-23",2,3),
(67,123,"2019-06-23",2,3),
(68,232,"2019-06-23",2,3),
(69,121,"2019-06-23",2,3),
(70,232,"2019-06-28",2,3),
(83,321,"2019-07-08",2,3),
(88,132,"2019-07-12",2,3),
(91,123,"2019-07-14",1,6),
(92,123,"2019-07-17",1,3),
(93,342,"2019-07-18",1,60),
(96,121,"2019-08-05",2,3),
(97,111,"2019-08-06",2,3),
(98,111,"2019-08-07",2,3),
(99,444,"2019-01-07",2,8),
(103,123,"2019-08-08",2,3),
(105,222,"2019-08-08",1,6),
(106,454,"2019-08-09",5,5),
(110,987,"2019-08-10",2,6),
(114,321,"2019-08-11",2,6),
(115,1122,"2019-08-12",2,3),
(116,1121,"2019-08-12",2,3),
(117,2300,"2019-08-13",2,5);


DROP TABLE IF EXISTS `Prev_entrada`;

CREATE TABLE `Prev_entrada` (
  `ID_Prev` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Func_PrevEntrada` int(11) NOT NULL,
  `ID_TipoReg_PrevEntrada` int(11) NOT NULL,
  `Hora_entrada_prevista` time DEFAULT NULL,
  PRIMARY KEY (`ID_Prev`),
  KEY `preventrada_FK_funcionarios` (`ID_Func_PrevEntrada`),
  KEY `preventrada_FK_TipoReg` (`ID_TipoReg_PrevEntrada`),
  CONSTRAINT `preventrada_FK_TipoReg` FOREIGN KEY (`ID_TipoReg_PrevEntrada`) REFERENCES `tipo_registo` (`ID_tipo_reg`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `preventrada_FK_funcionarios` FOREIGN KEY (`ID_Func_PrevEntrada`) REFERENCES `funcionarios` (`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

INSERT INTO `Prev_entrada` VALUES (1,1,1,"08:00:00"),
(2,1,2,"13:00:00"),
(3,1,1,"14:00:00"),
(4,1,2,"18:00:00"),
(5,2,1,"08:00:00"),
(6,2,2,"13:00:00"),
(7,2,1,"14:00:00"),
(8,2,2,"18:00:00"),
(9,3,1,"08:00:00"),
(10,5,1,"08:00:00"),
(11,5,2,"13:00:00"),
(12,6,1,"08:00:00"),
(13,6,2,"13:00:00"),
(14,3,2,"12:00:00");


DROP TABLE IF EXISTS `Reg_Equipamentos_Lavagem`;

CREATE TABLE `Reg_Equipamentos_Lavagem` (
  `ID_EquiLav` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Local_EquiLav` int(11) NOT NULL,
  `ID_Tipo_equiLav` int(11) NOT NULL,
  `Num_EquiLav` int(10) NOT NULL,
  `Desc_EquiLav` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_EquiLav`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

INSERT INTO `Reg_Equipamentos_Lavagem` VALUES (3,2,8,101,"Pista 1"),
(5,1,9,102,"Aspirador 1"),
(6,3,9,103,"Aspirador 1"),
(7,1,8,104,"Pista 1"),
(8,2,9,105,"Aspirador 1"),
(9,3,8,106,"Pista 1"),
(14,3,8,107,"Pista 2"),
(15,3,9,108,"Aspirador 2"),
(16,3,28,109,"Lav auto 1"),
(17,1,28,110,"Lav auto 1"),
(19,1,9,111,"Aspirador 2"),
(48,2,8,112,"Pista 2"),
(59,2,8,113,"Pista 3"),
(60,3,8,114,"Pista 3"),
(61,2,9,115,"Aspirador 2");


DROP TABLE IF EXISTS `Request`;

CREATE TABLE `Request` (
  `ID_Request` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Tipo_Req` int(11) NOT NULL,
  `ID_Local_Req` int(11) NOT NULL,
  `Contagem_Req` varchar(100) DEFAULT NULL,
  `Data_Req` date NOT NULL,
  `ID_PPista` varchar(11) DEFAULT NULL,
  `ID_Pedido` varchar(11) DEFAULT NULL,
  `Data_Pedido` date NOT NULL,
  `ID_Func_Req` int(11) DEFAULT NULL,
  `Num_Equip` varchar(100) DEFAULT NULL,
  `Id_EquiLav` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_Request`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

INSERT INTO `Request` VALUES (1,8,2,"","2019-08-19","",2001,"2019-08-19",2,101,3),
(2,9,2,"","2019-08-19","",2001,"2019-08-19",2,105,8),
(3,8,2,"","2019-08-19","",2001,"2019-08-19",2,112,48),
(4,8,2,"","2019-08-19","",2001,"2019-08-19",2,113,59),
(5,9,2,"","2019-08-19","",2001,"2019-08-19",2,115,61),
(6,9,3,"","2019-08-19","",2001,"2019-08-19",2,103,6),
(7,8,3,"","2019-08-19","",2001,"2019-08-19",2,106,9),
(8,8,3,"","2019-08-19","",2001,"2019-08-19",2,107,14),
(9,9,3,"","2019-08-19","",2001,"2019-08-19",2,108,15),
(10,28,3,"","2019-08-19","",2001,"2019-08-19",2,109,16),
(11,8,3,"","2019-08-19","",2001,"2019-08-19",2,114,60),
(12,9,1,"","2019-08-19","",2001,"2019-08-19",2,102,5),
(13,8,1,"","2019-08-19","",2001,"2019-08-19",2,104,7),
(14,28,1,"","2019-08-19","",2001,"2019-08-19",2,110,17),
(15,9,1,"","2019-08-19","",2001,"2019-08-19",2,111,19);


DROP TABLE IF EXISTS `Tolerancias`;

CREATE TABLE `Tolerancias` (
  `ID_Tolerancia` int(11) NOT NULL AUTO_INCREMENT,
  `Hora_Tolerancia` time DEFAULT NULL,
  PRIMARY KEY (`ID_Tolerancia`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `Tolerancias` VALUES (1,"00:05:00"),
(2,"00:10:00"),
(3,"00:15:00");


DROP TABLE IF EXISTS `empresa`;

CREATE TABLE `empresa` (
  `ID_empresa` int(11) NOT NULL AUTO_INCREMENT,
  `Nome_empresa` varchar(50) NOT NULL,
  `Niff_empresa` varchar(11) NOT NULL,
  PRIMARY KEY (`ID_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `empresa` VALUES (1,"Invest",123456789),
(2,"Le Foyer",01234),
(3,"teste",13212312);


DROP TABLE IF EXISTS `empresa_func`;

CREATE TABLE `empresa_func` (
  `ID_ef` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Funcionario_emp_ef` int(11) DEFAULT NULL,
  `Id_empresa_func` int(11) NOT NULL,
  PRIMARY KEY (`ID_ef`),
  KEY `emp_fk_func` (`Id_empresa_func`),
  KEY `emp_func_FK_funcionarios` (`ID_Funcionario_emp_ef`) USING BTREE,
  CONSTRAINT `empresa_func_ibfk_1` FOREIGN KEY (`ID_Funcionario_emp_ef`) REFERENCES `funcionarios` (`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `empresa_func_ibfk_2` FOREIGN KEY (`Id_empresa_func`) REFERENCES `empresa` (`ID_empresa`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

INSERT INTO `empresa_func` VALUES (2,1,2),
(6,6,1),
(7,6,2),
(9,5,2);


DROP TABLE IF EXISTS `func_contactos`;

CREATE TABLE `func_contactos` (
  `ID_fc` int(11) NOT NULL AUTO_INCREMENT,
  `ID_funcionario_fc` int(11) NOT NULL,
  `ID_contactos_fc` int(11) NOT NULL,
  `Registo` varchar(200) NOT NULL,
  PRIMARY KEY (`ID_fc`),
  KEY `fc_FK_contactos` (`ID_contactos_fc`),
  KEY `fc_FK_funcionario` (`ID_funcionario_fc`),
  CONSTRAINT `func_contactos_ibfk_1` FOREIGN KEY (`ID_funcionario_fc`) REFERENCES `funcionarios` (`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `func_contactos_ibfk_2` FOREIGN KEY (`ID_contactos_fc`) REFERENCES `tipo_contactos` (`ID_Contactos`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

INSERT INTO `func_contactos` VALUES (5,1,2,212312312);


DROP TABLE IF EXISTS `funcionarios`;

CREATE TABLE `funcionarios` (
  `ID_funcionario` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `NIFF_funcionario` varchar(15) NOT NULL,
  `Contacto_predef` int(13) DEFAULT NULL,
  `ID_TipoFuncionario` int(11) NOT NULL,
  `Login_funcionario` int(1) NOT NULL DEFAULT '1',
  `Ccookie_funcionario` int(1) NOT NULL,
  `ID_Tolerancia_Func` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID_funcionario`),
  KEY `func_FK_tipofunc` (`ID_TipoFuncionario`),
  KEY `funcionarios_FK_Acesso` (`Login_funcionario`),
  KEY `Func_FK_Tolerancias` (`ID_Tolerancia_Func`),
  CONSTRAINT `Func_FK_Tolerancias` FOREIGN KEY (`ID_Tolerancia_Func`) REFERENCES `Tolerancias` (`ID_Tolerancia`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `funcionarios_ibfk_1` FOREIGN KEY (`ID_TipoFuncionario`) REFERENCES `tipo_func` (`ID_tipofunc`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `funcionarios_ibfk_2` FOREIGN KEY (`Login_funcionario`) REFERENCES `multiusos` (`ID_acesso`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

INSERT INTO `funcionarios` VALUES (1,"Odin","Odin",1,968451973,3,1,1,1),
(2,"root","root",123456789,968451970,3,1,1,2),
(3,"jean","jean",012312,968451970,2,1,1,2),
(4,"nadia",1234,1231,111,1,1,1,1),
(5,"teste","teste","teste",12312,3,1,0,1),
(6,"teste1","teste1",31221,968451973,1,1,0,1);


DROP TABLE IF EXISTS `locais`;

CREATE TABLE `locais` (
  `ID_Local` int(11) NOT NULL AUTO_INCREMENT,
  `Descricao_Local` varchar(50) NOT NULL,
  `Cod_Postal_Local` varchar(10) NOT NULL,
  `ID_Empresa_Local` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_Local`),
  KEY `local_fk_emp` (`ID_Empresa_Local`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

INSERT INTO `locais` VALUES (1,"Arruda","7580-001",1),
(2,"Sede","7580-001",1),
(3,"Sede Le Foyer","7580-001",2),
(4,"teste","7580-003",2);


DROP TABLE IF EXISTS `local_contactos`;

CREATE TABLE `local_contactos` (
  `ID_lc` int(11) NOT NULL AUTO_INCREMENT,
  `ID_local_Lc` int(11) NOT NULL,
  `ID_Contactos_lc` int(11) NOT NULL,
  `Descricao` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_lc`),
  KEY `localContactos_fk_contactos` (`ID_Contactos_lc`),
  KEY `localContactos_fk_local` (`ID_local_Lc`),
  CONSTRAINT `local_contactos_ibfk_1` FOREIGN KEY (`ID_local_Lc`) REFERENCES `locais` (`ID_Local`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `local_contactos_ibfk_2` FOREIGN KEY (`ID_Contactos_lc`) REFERENCES `tipo_contactos` (`ID_Contactos`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS `local_funcionarios`;

CREATE TABLE `local_funcionarios` (
  `ID_LF` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Funcionario_LF` int(11) NOT NULL,
  `ID_Local_LF` int(11) NOT NULL,
  PRIMARY KEY (`ID_LF`),
  KEY `localFunc_FK_Local` (`ID_Local_LF`),
  KEY `localFunc_FK_Funcionarios` (`ID_Funcionario_LF`),
  CONSTRAINT `local_funcionarios_ibfk_1` FOREIGN KEY (`ID_Funcionario_LF`) REFERENCES `funcionarios` (`ID_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `local_funcionarios_ibfk_2` FOREIGN KEY (`ID_Local_LF`) REFERENCES `locais` (`ID_Local`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

INSERT INTO `local_funcionarios` VALUES (3,1,3),
(4,2,2),
(5,2,3),
(6,2,1),
(7,5,1),
(8,3,3),
(10,6,1),
(11,6,2),
(14,6,3);


DROP TABLE IF EXISTS `log_reghoras`;

CREATE TABLE `log_reghoras` (
  `ID_grh` int(11) NOT NULL AUTO_INCREMENT,
  `ID_reg_horas_lrh` int(11) DEFAULT NULL,
  `ID_func_lrh` int(11) NOT NULL,
  `ID_loc_lrh` int(11) NOT NULL,
  `tipo_registo_lrh` int(11) NOT NULL,
  `hora_lrh` datetime NOT NULL,
  `Tipo_Operacao` int(11) NOT NULL DEFAULT '3',
  PRIMARY KEY (`ID_grh`),
  KEY `logregHoras_FK_registoHoras` (`ID_reg_horas_lrh`),
  KEY `logregHoras_FK_Tiporegisto` (`tipo_registo_lrh`),
  KEY `logregHoras_FK_multiusos_TIPOPERACAO` (`Tipo_Operacao`),
  CONSTRAINT `logregHoras_FK_Tiporegisto` FOREIGN KEY (`tipo_registo_lrh`) REFERENCES `tipo_registo` (`ID_tipo_reg`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `logregHoras_FK_multiusos_TIPOPERACAO` FOREIGN KEY (`Tipo_Operacao`) REFERENCES `multiusos` (`ID_acesso`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `logregHoras_FK_registoHoras` FOREIGN KEY (`ID_reg_horas_lrh`) REFERENCES `registo_horas` (`ID_Reg_horas`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;

INSERT INTO `log_reghoras` VALUES (1,1,1,1,1,"2018-09-06 21:36:00",2),
(2,2,1,1,2,"2018-09-06 21:36:00",2),
(3,3,1,2,1,"2018-09-07 01:31:00",2),
(4,4,2,1,1,"2018-09-09 19:10:00",2),
(5,5,2,1,2,"2018-09-09 19:11:00",2),
(6,6,2,1,1,"2018-09-09 19:11:00",2),
(7,12,2,3,1,"2018-09-09 19:18:00",2),
(8,13,2,2,2,"2018-09-09 19:18:00",2),
(9,17,2,1,1,"2018-09-18 21:27:00",2),
(10,18,2,1,2,"2018-09-18 21:27:00",2),
(11,19,2,1,1,"2018-09-20 20:14:00",2),
(12,20,2,1,1,"2018-09-23 16:28:00",2),
(13,21,2,1,2,"2018-09-23 16:28:00",2),
(14,22,2,1,1,"2018-09-30 13:49:00",2),
(15,23,2,1,1,"2018-10-01 17:10:00",2),
(16,25,2,1,1,"2018-10-01 17:44:00",2),
(17,34,2,1,1,"2018-03-10 15:00:00",2),
(18,35,2,1,1,"2018-03-10 15:10:00",2),
(19,36,2,1,2,"2018-03-10 16:10:00",2),
(20,37,2,1,1,"2018-03-10 16:30:00",2),
(21,39,2,1,1,"2018-03-31 16:30:00",2),
(22,40,2,1,1,"1970-01-01 01:00:00",2),
(23,42,2,1,2,"2018-10-03 17:50:00",2),
(24,43,2,1,2,"2018-10-03 17:45:00",2),
(25,44,2,1,1,"2018-10-03 17:40:00",2),
(26,45,2,1,1,"2018-09-10 17:00:00",2),
(27,46,1,3,1,"2018-11-22 10:50:00",2),
(28,47,1,3,2,"2018-11-22 10:50:00",2),
(29,NULL,1,3,2,"2018-11-23 16:40:00",2),
(30,49,1,3,1,"2018-11-29 18:00:00",2),
(31,50,1,3,1,"2018-12-01 12:55:00",2),
(32,51,5,1,1,"2018-12-01 16:14:00",2),
(33,52,5,1,1,"2018-12-06 17:23:00",2),
(34,52,5,1,1,"2018-12-06 17:23:00",4),
(35,52,5,1,1,"2018-12-06 17:23:00",4),
(36,53,2,2,1,"2019-01-30 15:30:00",2),
(37,54,2,1,1,"2019-02-01 14:49:00",2),
(38,55,2,1,2,"2019-02-01 14:49:00",2),
(39,55,2,1,2,"2019-02-01 14:49:00",4),
(40,56,2,1,1,"2019-02-25 19:55:00",2),
(41,57,2,1,2,"2019-02-25 19:55:00",2),
(42,58,2,1,1,"2019-02-28 14:59:00",2),
(43,59,2,1,2,"2019-02-28 14:59:00",2),
(44,60,1,3,1,"2019-02-28 16:22:00",2),
(45,61,1,3,2,"2019-02-28 16:22:00",2),
(46,62,2,2,1,"2019-03-11 17:22:00",2),
(47,63,2,1,1,"2019-03-12 13:37:00",2),
(48,64,2,1,2,"2019-03-12 13:37:00",2),
(49,65,2,2,1,"2019-03-26 19:41:00",2),
(50,66,2,2,2,"2019-03-26 19:41:00",2),
(51,67,2,2,1,"2019-04-22 19:07:00",2),
(52,68,2,2,2,"2019-04-22 19:08:00",2),
(53,69,2,1,1,"2019-05-24 02:21:00",2),
(54,70,2,1,2,"2019-05-24 02:21:00",2),
(55,71,2,2,1,"2019-07-07 22:24:00",2),
(56,72,2,1,1,"2019-08-12 19:27:00",2),
(57,73,2,1,2,"2019-08-12 19:27:00",2),
(58,74,2,1,1,"2019-08-17 22:18:00",2),
(59,75,2,1,2,"2019-08-17 22:18:00",2),
(60,76,2,1,1,"2019-08-19 20:04:00",2),
(61,77,2,1,2,"2019-08-19 20:05:00",2),
(62,78,2,2,1,"2019-08-19 20:36:00",2),
(63,79,2,2,2,"2019-08-19 20:36:00",2),
(64,80,2,1,1,"2019-08-19 20:36:00",2),
(65,81,2,1,2,"2019-08-19 20:36:00",2),
(66,82,2,2,1,"2019-08-19 21:25:00",2);


DROP TABLE IF EXISTS `multiusos`;

CREATE TABLE `multiusos` (
  `ID_acesso` int(10) NOT NULL,
  `Descrisao` varchar(20) NOT NULL,
  `Tipo_multiuso` int(11) DEFAULT NULL,
  `ID_fk_multiuso` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_acesso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `multiusos` VALUES (0,"Não",1,NULL),
(1,"Sim",1,NULL),
(2,"Inserir",2,NULL),
(3,"Atualização",2,NULL),
(4,"Delete",2,NULL),
(6,"Não visível",3,NULL),
(7,"Visível",3,NULL),
(8,"Pista",4,NULL),
(9,"Aspirador",4,NULL),
(10,"Janeiro",5,1),
(11,"Fevereiro",5,2),
(12,"Março",5,3),
(13,"Abril",5,4),
(14,"Maio",5,5),
(15,"Junho",5,6),
(16,"Julho",5,7),
(17,"Agosto",5,8),
(18,"Setembro",5,9),
(19,"Outubro",5,10),
(20,"Novembro",5,11),
(21,"Dezembro",5,12),
(23,"Todo o ano",5,13),
(24,"Backup",6,16),
(25,"Logout",6,17),
(26,"Login",6,18),
(28,"Lav Auto",4,NULL);


DROP TABLE IF EXISTS `registo_horas`;

CREATE TABLE `registo_horas` (
  `ID_Reg_horas` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Func_rh` int(11) NOT NULL,
  `ID_Local_rh` int(11) DEFAULT NULL,
  `Tipo_Registo_rh` int(11) NOT NULL,
  `Hora_entradaManha_rh` datetime NOT NULL,
  `Visivel_rh` int(11) NOT NULL DEFAULT '7',
  PRIMARY KEY (`ID_Reg_horas`),
  KEY `rh_FK_TipoRegisto` (`Tipo_Registo_rh`),
  KEY `registo_horas_FK_Local_Func` (`ID_Local_rh`),
  KEY `registo_horas_FK_funcionario` (`ID_Func_rh`),
  KEY `registo_horas_FK_multiusos` (`Visivel_rh`),
  CONSTRAINT `registo_horas_FK_multiusos` FOREIGN KEY (`Visivel_rh`) REFERENCES `multiusos` (`ID_acesso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `registo_horas_ibfk_1` FOREIGN KEY (`Tipo_Registo_rh`) REFERENCES `tipo_registo` (`ID_tipo_reg`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `registo_horas_ibfk_2` FOREIGN KEY (`ID_Local_rh`) REFERENCES `locais` (`ID_Local`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=latin1;

INSERT INTO `registo_horas` VALUES (1,1,1,1,"2018-09-06 21:36:00",7),
(2,1,1,2,"2018-09-06 21:36:00",7),
(3,1,2,1,"2018-09-07 01:31:00",7),
(4,2,1,1,"2018-09-09 19:10:00",7),
(5,2,1,2,"2018-09-09 19:11:00",7),
(6,2,1,1,"2018-09-09 19:11:00",7),
(7,2,1,2,"2018-09-09 19:11:00",7),
(8,2,1,1,"2018-09-09 19:11:00",7),
(9,2,1,2,"2018-09-09 19:11:00",7),
(10,2,1,1,"2018-09-09 19:11:00",7),
(11,2,1,2,"2018-09-09 19:11:00",7),
(12,2,2,1,"2018-09-09 19:18:00",7),
(13,2,2,2,"2018-09-09 19:18:00",7),
(14,2,2,1,"2018-09-09 19:18:00",7),
(15,2,2,1,"2018-09-09 19:18:00",7),
(16,2,2,2,"2018-09-09 19:18:00",7),
(17,2,1,1,"2018-09-18 21:27:00",7),
(18,2,1,2,"2018-09-18 21:27:00",7),
(19,2,1,1,"2018-09-20 20:14:00",7),
(20,2,1,1,"2018-09-23 16:28:00",7),
(21,2,1,2,"2018-09-23 15:00:00",7),
(22,2,1,1,"2018-09-30 13:49:00",7),
(23,2,1,1,"2018-10-01 17:10:00",7),
(24,2,1,1,"2018-10-01 17:10:00",7),
(25,2,1,1,"2018-10-01 17:44:00",7),
(26,2,1,1,"2018-10-01 17:44:00",7),
(27,2,1,1,"2018-10-01 17:44:00",7),
(28,2,1,1,"2018-10-01 17:44:00",7),
(29,2,1,1,"2018-10-01 17:44:00",7),
(30,2,1,1,"2018-10-01 17:44:00",7),
(31,2,1,1,"2018-10-01 17:44:00",7),
(32,2,1,1,"2018-10-01 17:44:00",7),
(33,2,1,1,"2018-10-01 17:44:00",7),
(34,2,1,1,"2018-03-10 15:00:00",7),
(35,2,1,1,"2018-03-10 15:10:00",7),
(36,2,1,2,"2018-03-10 16:10:00",7),
(37,2,1,1,"2018-03-10 16:30:00",7),
(38,2,1,1,"2018-03-10 16:30:00",7),
(39,2,1,1,"2018-03-31 16:30:00",7),
(40,2,1,1,"1970-01-01 01:00:00",7),
(41,2,1,1,"1970-01-01 01:00:00",7),
(42,2,1,2,"2018-10-03 17:50:00",7),
(43,2,1,2,"2018-10-03 17:45:00",7),
(44,2,1,1,"2018-10-03 17:40:00",7),
(45,2,1,1,"2018-09-10 17:00:00",7),
(46,1,3,1,"2018-11-22 10:50:00",7),
(47,1,3,2,"2018-11-22 10:50:00",7),
(49,1,3,2,"1970-01-01 01:00:00",7),
(50,1,3,1,"2018-12-01 12:55:00",7),
(51,5,1,1,"2018-12-01 16:14:00",7),
(52,5,1,1,"2018-12-06 17:23:00",7),
(53,2,2,1,"2019-01-31 15:30:00",7),
(54,2,1,1,"2019-02-01 14:49:00",7),
(55,2,1,2,"2019-02-01 14:49:00",6),
(56,2,1,1,"2019-02-25 19:55:00",7),
(57,2,1,2,"2019-02-25 19:55:00",7),
(58,2,1,1,"2019-02-28 14:59:00",7),
(59,2,1,2,"2019-02-28 14:59:00",7),
(60,1,3,1,"2019-02-28 16:22:00",7),
(61,1,3,2,"2019-02-28 16:22:00",7),
(62,2,2,1,"2019-03-11 17:22:00",7),
(63,2,1,1,"2019-03-12 13:37:00",7),
(64,2,1,2,"2019-03-12 13:37:00",7),
(65,2,2,1,"2019-03-26 19:41:00",7),
(66,2,2,2,"2019-03-26 19:41:00",7),
(67,2,2,1,"2019-04-22 19:07:00",7),
(68,2,2,2,"2019-04-22 19:08:00",7),
(69,2,1,1,"2019-05-24 02:21:00",7),
(70,2,1,2,"2019-05-24 02:21:00",7),
(71,2,2,1,"2019-07-07 22:24:00",7),
(72,2,1,1,"2019-08-12 19:27:00",7),
(73,2,1,2,"2019-08-12 19:27:00",7),
(74,2,1,1,"2019-08-17 22:18:00",7),
(75,2,1,2,"2019-08-17 22:18:00",7),
(76,2,1,1,"2019-08-19 20:04:00",7),
(77,2,1,2,"2019-08-19 20:05:00",7),
(78,2,2,1,"2019-08-19 20:36:00",7),
(79,2,2,2,"2019-08-19 20:36:00",7),
(80,2,1,1,"2019-08-19 20:36:00",7),
(81,2,1,2,"2019-08-19 20:36:00",7),
(82,2,2,1,"2019-08-19 21:25:00",7);


DROP TABLE IF EXISTS `tipo_contactos`;

CREATE TABLE `tipo_contactos` (
  `ID_Contactos` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo_Contacto_Contactos` varchar(30) NOT NULL,
  PRIMARY KEY (`ID_Contactos`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `tipo_contactos` VALUES (1,"telemóvel"),
(2,"Fax"),
(3,"e-mail");


DROP TABLE IF EXISTS `tipo_func`;

CREATE TABLE `tipo_func` (
  `ID_tipofunc` int(11) NOT NULL AUTO_INCREMENT,
  `Descricao__tipofunc` text NOT NULL,
  PRIMARY KEY (`ID_tipofunc`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `tipo_func` VALUES (1,"Utilizador"),
(2,"Administrador"),
(3,"Super-User");


DROP TABLE IF EXISTS `tipo_registo`;

CREATE TABLE `tipo_registo` (
  `ID_tipo_reg` int(11) NOT NULL AUTO_INCREMENT,
  `Descricao_tipo_reg` varchar(200) NOT NULL,
  PRIMARY KEY (`ID_tipo_reg`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

INSERT INTO `tipo_registo` VALUES (1,"Entrada"),
(2,"Saida");


SET foreign_key_checks = 1;
