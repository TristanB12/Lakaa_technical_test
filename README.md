# Lakaa_technical_test

Pour installer et lancer l'application il faut suivre les instructions pour:
 - [le front](https://github.com/TristanB12/Lakaa_technical_test/blob/master/front/README.md)
 - [le back](https://github.com/TristanB12/Lakaa_technical_test/blob/master/api/README.md)


## Choix

Pour l'api comme je n'avais jamais fait de Ruby on Rails, j'ai choisi d'aller au plus simple.
J'ai donc mis en place un simple CRUD sur les modèles `Food` et `Indicator` avec mongoDB.


Pour le front j'ai d'abord fait une [maquette](https://www.figma.com/file/dKA7j2XUfRMpI0T8Oz0wwj/Untitled?node-id=0%3A1) sur Figma pour faciliter l'intégration par la suite.
J'ai ensuite choisi Vue.js car c'est le framework sur lequel je suis le plus à l'aise.

## Améliorations

Si j'avais continué le développement de cette application voici ce que j'aurais ajouté:

 - Possibilité de modifier/supprimer les déclarations de collecte de denrées
 - Mise en place de graphiques avec [vue-chartjs](https://vue-chartjs.org/) pour mieux suivre les collectes de denrées
 - Possibilité de paramétrer plus précisement les indicateurs (exemple: type d'input, unité, nombre min/max, valeur par défaut)
 - Ajout de statistiques calculées à partir des déclarations de collecte  
