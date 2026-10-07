# SharePoint-Admin

Laboratori pratici SharePoint Online per amministratori, da eseguire a partire dall'ambiente dei lab MD-102: identità, OneDrive, siti SharePoint, governance e migrazione.

Versione navigabile (con caselle per segnare i passi completati): <https://cvn-computergross.github.io/SharePoint-Admin/>

## Moduli

| Modulo | Argomento | Esercizi |
|---|---|---|
| [Modulo 1](Modulo-01-Identita-Entra-ID/README.md) | Identità e accesso con Microsoft Entra ID | 6 |
| [Modulo 2](Modulo-02-OneDrive/README.md) | OneDrive for Business | 1 |
| [Modulo 3](Modulo-03-Siti-SharePoint/README.md) | Siti SharePoint Online | 8 |
| [Modulo 4](Modulo-04-Amministrazione-Governance/README.md) | Amministrazione e governance | 6 |
| [Modulo 5](Modulo-05-Migrazione-File-Server/README.md) | Migrazione da file server con Migration Manager | 4 |

## Materiale del corso

| Modulo | Download |
|---|---|
| Modulo 1 | [Modulo1.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo1.zip) |
| Modulo 2 | [Modulo2.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo2.zip) |
| Modulo 3 | [Modulo3.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo3.zip) |
| Modulo 4 | [Modulo4.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo4.zip) |
| Modulo 5 | [Modulo5.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo5.zip) |

Ogni zip contiene la cartella `MATERIALE_STUDENTI/ModuloN` con le sottocartelle `Data`, `Installer` e `Script(s)` citate negli esercizi. Gli installer più pesanti si scaricano dai siti ufficiali Microsoft: vedi [Materiale](Materiale/README.md).

## Ambiente di laboratorio

| VM | Utilizzo |
|---|---|
| `SEA-DEV1` | Postazione amministrativa (admin del tenant, PowerShell, file server del Modulo 5) |
| `SEA-DEV2` | Client di **User02** (owner) |
| `SEA-DEV3` | Client di **User03** (member) |

- Un tenant Microsoft 365 di prova con licenze **Office 365 E5** / **Microsoft 365 E5** (include Microsoft Entra ID P1/P2).
- Il materiale del corso (installer, script, dati), scaricabile dalla cartella [Materiale](Materiale/README.md).
- Nei comandi e negli URL sostituire i segnaposto `XXXXXX`, `TENANT` e `tenant_name` con i valori del proprio tenant.

> [!IMPORTANT]
> Gli esercizi sono **sequenziali**: utenti, gruppi, app registration e siti creati nei primi moduli vengono riutilizzati in quelli successivi.

> [!CAUTION]
> Password, permessi applicativi ampi ed esclusioni dalle policy sono configurati per semplicità **di laboratorio**. Non replicarli così come sono in un tenant di produzione: ogni esercizio segnala con dei callout le best practice da applicare.
