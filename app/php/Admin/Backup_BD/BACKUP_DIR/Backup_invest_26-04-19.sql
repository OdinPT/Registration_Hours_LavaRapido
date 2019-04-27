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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

INSERT INTO `Lim_Max_Cont` VALUES (1,1000,1,8),
(2,1100,1,9),
(3,1000,2,8),
(5,1000,3,8),
(6,1000,1,22),
(9,3000,3,22),
(11,2000,2,9);


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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

INSERT INTO `Log_PostosPistas` VALUES (4,4,1,903,"2019-03-29",2,3,104),
(5,4,1,910,"2019-03-29",2,3,104),
(6,4,1,914,"2019-03-29",2,3,104),
(7,4,1,930,"2019-03-29",2,3,104),
(8,6,2,100,"2019-04-01",2,2,101),
(9,7,1,1500,"2019-04-17",2,2,102);


DROP TABLE IF EXISTS `Log_Regbackup_Reglogin`;

CREATE TABLE `Log_Regbackup_Reglogin` (
  `ID_Backup` int(11) NOT NULL AUTO_INCREMENT,
  `Nome_Backup` varchar(60) DEFAULT NULL,
  `Data_Backup` datetime NOT NULL,
  `IdFunc_Backup` int(11) NOT NULL,
  `Tipo_registo_Rb` int(11) NOT NULL,
  PRIMARY KEY (`ID_Backup`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1 COMMENT='log registo backups e registo de login';

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
(55,"Backup_invest_26-04-19.sql","2019-04-26 02:04:18",2,16);


DROP TABLE IF EXISTS `Postos_Pistas`;

CREATE TABLE `Postos_Pistas` (
  `ID_PPistas` int(11) NOT NULL AUTO_INCREMENT,
  `ContagemPP` int(11) DEFAULT NULL,
  `DataPP` date DEFAULT NULL,
  `ID_Func_PP` int(11) NOT NULL,
  `ID_EquiPorLav_PP` int(11) NOT NULL,
  PRIMARY KEY (`ID_PPistas`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

INSERT INTO `Postos_Pistas` VALUES (1,1000,"2019-01-01",2,5),
(3,1100,"2018-12-31",2,5),
(4,930,"2019-03-24",2,7),
(5,2100,"2019-03-28",2,5),
(6,100,"2019-04-01",2,3),
(7,1500,"2019-04-17",2,5);


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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

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
(11,5,2,"13:00:00");


DROP TABLE IF EXISTS `Reg_Equipamentos_Lavagem`;

CREATE TABLE `Reg_Equipamentos_Lavagem` (
  `ID_EquiLav` int(11) NOT NULL AUTO_INCREMENT,
  `ID_Local_EquiLav` int(11) NOT NULL,
  `ID_Tipo_equiLav` int(11) NOT NULL,
  `Num_EquiLav` int(10) NOT NULL,
  PRIMARY KEY (`ID_EquiLav`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

INSERT INTO `Reg_Equipamentos_Lavagem` VALUES (3,2,8,101),
(5,1,9,102),
(6,3,9,103),
(7,1,8,104),
(8,2,9,105),
(9,3,8,106),
(14,3,8,107),
(15,3,9,108),
(16,3,22,109),
(17,1,22,110),
(19,1,9,111),
(21,3,9,112),
(22,2,8,113),
(23,2,8,115),
(24,2,8,114),
(26,8,1,130),
(29,2,9,131);


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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

INSERT INTO `Request` VALUES (1,8,1,930,"2019-03-24",4,2001,"2019-04-01",2,104,7),
(2,9,1,2100,"2019-03-28",5,2001,"2019-04-01",2,102,5),
(3,9,1,1000,"2019-01-01",1,2002,"2019-04-01",2,102,NULL),
(4,9,1,1000,"2019-01-01",1,2003,"2019-04-01",2,102,NULL),
(5,8,1,930,"2019-03-24",4,2003,"2019-04-01",2,104,NULL),
(6,9,1,2100,"2019-03-28",5,2003,"2019-04-01",2,102,NULL),
(7,8,2,100,"2019-04-01",6,2004,"2019-04-01",2,101,3),
(8,9,2," ","2019-04-01"," ",2004,"2019-04-01",2,105,8),
(9,8,2," ","2019-04-01"," ",2004,"2019-04-01",2,113,22),
(10,8,2," ","2019-04-01"," ",2004,"2019-04-01",2,115,23),
(11,8,2," ","2019-04-01"," ",2004,"2019-04-01",2,114,24),
(12,9,2," ","2019-04-01"," ",2004,"2019-04-01",2,131,29),
(13,9,1,1000,"2019-01-01",1,2005,"2019-04-15",2,102,NULL),
(14,8,1,930,"2019-03-24",4,2005,"2019-04-15",2,104,NULL),
(15,9,1,2100,"2019-03-28",5,2005,"2019-04-15",2,102,NULL),
(16,8,2,100,"2019-04-01",6,2005,"2019-04-15",2,101,NULL),
(17,9,1,1500,"2019-04-17",7,2006,"2019-04-17",2,102,5),
(18,8,1," ","2019-04-17"," ",2006,"2019-04-17",2,104,7),
(19,22,1," ","2019-04-17"," ",2006,"2019-04-17",2,110,17),
(20,9,1," ","2019-04-17"," ",2006,"2019-04-17",2,111,19);


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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

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
(52,68,2,2,2,"2019-04-22 19:08:00",2);


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
(8,"Lavagem",4,NULL),
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
(22,"Lav Auto",4,15),
(23,"Todo o ano",5,13),
(24,"Backup",6,16),
(25,"Logout",6,17),
(26,"Login",6,18);


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
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;

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
(68,2,2,2,"2019-04-22 19:08:00",7);


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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

INSERT INTO `tipo_func` VALUES (1,"Utilizador"),
(2,"Administrador"),
(3,"Super-User");


DROP TABLE IF EXISTS `tipo_registo`;

CREATE TABLE `tipo_registo` (
  `ID_tipo_reg` int(11) NOT NULL AUTO_INCREMENT,
  `Descricao_tipo_reg` varchar(200) NOT NULL,
  PRIMARY KEY (`ID_tipo_reg`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `tipo_registo` VALUES (1,"Entrada"),
(2,"Saida"),
(3,"asa");


SET foreign_key_checks = 1;
