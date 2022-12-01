CREATE DATABASE todoargonaute;
USE todoargonaute;
CREATE TABLE `todoargonaute`.`argonaute` (
  `argonauteID` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`argonauteID`),
  UNIQUE INDEX `argonauteID_UNIQUE` (`argonauteID` ASC) VISIBLE,
  UNIQUE INDEX `nom_UNIQUE` (`nom` ASC) VISIBLE);








