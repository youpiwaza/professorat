-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 23 mars 2023 à 14:33
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ma_super_base`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE `utilisateurs` (
  `identifiant` int(20) UNSIGNED NOT NULL,
  `nom` varchar(200) NOT NULL,
  `prenom` varchar(200) NOT NULL,
  `age` int(11) NOT NULL,
  `anniversaire` date NOT NULL,
  `majeur` tinyint(1) NOT NULL,
  `genre` enum('Féminin','Masculin','Privé','Autre') NOT NULL,
  `compte_en_banque` int(30) NOT NULL
) ;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`identifiant`, `nom`, `prenom`, `age`, `anniversaire`, `majeur`, `genre`, `compte_en_banque`) VALUES
(1, 'Eponge', 'Bob', 12, '2023-03-09', 0, 'Autre', 150),
(2, 'Star', 'Patrick', 22, '2018-03-08', 1, 'Autre', -200),
(3, 'Ecureuil', 'Sandy', 15, '2020-03-04', 0, 'Autre', 1337),
(4, 'Evil', 'Plankton', 50, '2014-03-21', 1, 'Privé', 7),
(5, 'Krabs', 'Mr', 60, '2014-03-13', 1, 'Masculin', 20000);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`identifiant`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `identifiant` int(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
