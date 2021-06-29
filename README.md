<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.consultations77.org">
    <img alt="Consultations 7 sur 7" src="src/images/logo-consultations77.png" width="200" />
  </a>
</p>
<h1 align="center">
  Documentation du site web de Consultations 7 sur 7
</h1>

Le site a été créé avec le générateur de site statique GatsbyJs, basé sur REACT.
L'hébergement du site est réalisé avec Netlify.


## 🚀 Gestion des données

1.  **Ajouter, modifier, supprimer un Centre**
    
    L'ensemble des donéees des centres se trouve dans dossier data/dataCenters.json
    .
    ├── node_modules
    ├── src
      ├── data
        ├── dataCenters.json

    Un centre est un Objet dans le json avec les informations le concerant, exemple :

    ```
    {
      "index": 1,
      "name": "Nice Le Port",
      "address": "24 bis Rue Smolett, 06300 Nice",
      "tel": "04-93-89-21-33",
      "direction": "https://goo.gl/maps/2c4183WaEzxX16fP6",
      "image": {
        "src": "../images/centers/smolett.jpg"
      },
      "lat": 43.70345,
      "lng": 7.28437,
      "map": true,
      "open": true,
      "bgColor": "#F7F6FE",
      "slug": "/centre/smollet",
      "transport": [
        {
          "car": "Un parking payant est situé à 5 min à pied, rue Auguste Gal",
          "bus": "Le centre est situé proche des lignes 3, 4, 27, 82 et 112",
          "tramway": "Sur la ligne 1, arrêt Acropolis"
        }
      ] 
    }

    ```

    Ajouter un nouvel objet pour ajouter nouveau centre sur le site, cela créera automatiquement un nouveau marker dans la Google Map, 
    et également une page dédié au centre avec plus d'informations et une map avec un marker individuel représentant un centre.

    Modifier directement les informations d'un centre dans le JSON et les modifications seront visibles sur le site.

    Supprimer un objet complet du centre le supprimera également du site.


1.  **Start developing.**

