# Lecteur

- **Site public** (`index.html`) : tout le monde écoute la musique et les playlists publiées. Lecture seule ; favoris et historique restent dans le navigateur de chaque visiteur.
- **Page de gestion** (`conf/`) : tu ajoutes, modifies et supprimes musiques, playlists et pochettes, puis tu cliques sur **Publier**. Les fichiers sont envoyés directement dans le dépôt GitHub.

> L'adresse `/conf/` n'est pas un mot de passe. Ce qui protège le site, c'est le **jeton GitHub** : il est stocké uniquement dans ton navigateur, jamais dans le dépôt. Sans jeton, la page `/conf/` ne peut rien modifier.
>
> Le dépôt est public : n'y publie que de la musique que tu as le droit de partager.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | site public |
| `conf/index.html` | page de gestion (non référencée par les moteurs de recherche) |
| `app.js`, `app.css` | code commun aux deux pages |
| `data/catalog.json` | catalogue publié (généré par « Publier ») |
| `music/`, `covers/` | créés automatiquement à la première publication |
| `.nojekyll` | indique à GitHub Pages de servir les fichiers tels quels |

## Mise en place (une seule fois)

1. **Créer le dépôt** sur GitHub : *New repository*, **Public**, coche **Add a README file** (le dépôt ne doit pas être vide).
2. **Envoyer les fichiers** de ce dossier dans le dépôt (sauf `.claude/`).
3. **Activer GitHub Pages** : *Settings → Pages → Source : Deploy from a branch*, branche `main`, dossier `/ (root)`, *Save*. Le site sera à `https://TON-PSEUDO.github.io/NOM-DU-DEPOT/`.
4. **Créer le jeton** : *Settings (de ton compte) → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token*
   - *Repository access* : **Only select repositories** → ce dépôt uniquement
   - *Permissions → Repository permissions → Contents* : **Read and write**
   - Copie le jeton (il commence par `github_pat_`).
5. Ouvre `https://TON-PSEUDO.github.io/NOM-DU-DEPOT/conf/`, clique sur ⚙ en bas de la barre latérale, colle le jeton. Compte et dépôt sont pré-remplis.

## Utilisation

1. Va sur `/conf/`, glisse tes musiques ou utilise *Fichiers* / *Dossier*.
2. Crée tes playlists, ajoute des pochettes, sélectionne et supprime ce que tu veux.
3. Le bouton **Publier** (point rose = modifications en attente) envoie tout en un seul commit.
4. Le site public se met à jour 1 à 2 minutes après.

Les modifications non publiées restent dans ton navigateur : tu peux fermer la page et reprendre plus tard.

## Limites

- 95 Mo maximum par fichier (limite GitHub de 100 Mo).
- GitHub Pages : environ 1 Go par site, soit ~150 mp3, et ~100 Go de trafic par mois.
- Utilise toujours le même navigateur pour `/conf/` : le jeton et les brouillons y sont stockés.
- Si ton jeton fuit, supprime-le sur GitHub (*Fine-grained tokens → Delete*) et crée-en un autre.
