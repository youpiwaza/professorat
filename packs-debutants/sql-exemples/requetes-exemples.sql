-- * Pour tester simplement
--    Importer la table utilisateur fournie (voir support phpMyAdmin)
--    Copier/coller une par une les requêtes dans l'onglet SQL de cette table

-- ! Exemples CRUD

-- * Ajouter un utilisateur
INSERT INTO `utilisateurs`
        (`identifiant`, `nom`,      `prenom`, `age`,  `anniversaire`, `majeur`, `genre`, `compte_en_banque`)
VALUES  (NULL,          'Escargot', 'Garry',  '4',    '2016-03-02',   '0',      'Autre', '1000000');



-- * Afficher un utilisateur (spécifique)
SELECT  *
FROM    `utilisateurs`
WHERE   `prenom` LIKE 'garry';



-- * Modifier un utilisateur
UPDATE  `utilisateurs`
SET     `compte_en_banque` = '10'
WHERE   `utilisateurs`.`identifiant` = 6;



-- * Supprimer un utilisateur
DELETE
FROM    `utilisateurs`
WHERE   `utilisateurs`.`identifiant` = 6;



-- ! Avancé

-- * Afficher les utilisateurs majeurs
SELECT  *
FROM    `utilisateurs`
WHERE   `age` >= 18;

-- * ou avec la date d'anniversaire
--    Attention les dates sont mal remplies et ne correspondent pas à l'âge :3
SELECT
  NOW()
  ,DATEDIFF( NOW(), `anniversaire` )        AS 'Nombre de jours'
  ,DATEDIFF( NOW(), `anniversaire` ) / 365  AS "Nombre d'années"

FROM  `utilisateurs`
-- WHERE "Nombre d'années" >= 18;
WHERE "Nombre d'années" < 18;



-- * Afficher les utilisateurs dont le prénom commence par P
-- % remplace n'importe quel caractères, ou suite de caractères, dans la recherche
SELECT  *
FROM    `utilisateurs`
WHERE   `prenom` LIKE 'P%';



-- * Afficher les utilisateurs triés en fonction de leur compte en banque
SELECT    *
FROM      `utilisateurs`
ORDER BY  `utilisateurs`.`compte_en_banque` DESC;
-- ORDER BY  `utilisateurs`.`compte_en_banque` ASC;



-- * Afficher les utilisateurs en fonction de leur date de naissance
SELECT    *
FROM      `utilisateurs`
ORDER BY  `utilisateurs`.`anniversaire` ASC;



-- * Afficher le nombre d'utilisateurs
SELECT  COUNT(*)
FROM    `utilisateurs`;



-- * Afficher le compte en banque le plus riche
SELECT
  MAX(`compte_en_banque`)
FROM
  `utilisateurs`;



-- * Afficher la moyenne d’âges
SELECT
  AVG(`age`)
FROM
  `utilisateurs`;


-- * Afficher la somme de leurs comptes en banque
SELECT
  SUM(`age`)
FROM
  `utilisateurs`;
