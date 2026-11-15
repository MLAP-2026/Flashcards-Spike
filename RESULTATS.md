# Résultats du spike PWA

**Téléphone :** A56
**Version Android :** 17
**Navigateur :** Chrome Android
**URL testée :** https://mlap-2026.github.io/Flashcards-Spike/

## Checklist

| # | Étape | Résultat | Remarque |
|---|---|---|---|
| 3.1a | Ouverture de la page en ligne | OK | |
| 3.1b | Installation depuis le menu | OK | Icône créée |
| 3.1c | Lancement depuis l'icône en mode autonome | OK après correction | Cause : un raccourci Chrome avait été créé au lieu de l'application installée. Corrigé côté téléphone, puis retesté |
| 3.2 | Écriture, fermeture complète, réouverture, relecture | OK | Retesté après correction |
| 3.3 | Mode avion, ouverture depuis l'icône | OK | Retesté après correction |
| 3.4 | Chiffrement, déchiffrement, mauvais mot de passe | OK | Test du chiffrement réussi |
| 3.5 | Notes | OK | Ce fichier |

## Conclusion

Le spike valide les trois hypothèses sur Android : persistance IndexedDB après fermeture complète, mode hors ligne depuis l'icône installée, chiffrement AES-GCM avec refus d'un mauvais mot de passe.

Correctif ajouté : icônes PNG 192 et 512 px dans le manifest, et cache `spike-v2` qui les met en cache. Cela rend l'installation reconnue comme application.

Point à retenir : la relecture ne s'affiche pas automatiquement à l'ouverture de la page. Ce n'est pas bloquant, mais `flashcards-coeur` devra charger les données au démarrage.
