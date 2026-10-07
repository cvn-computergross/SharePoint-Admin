# SharePoint-Admin

Laboratori pratici SharePoint Online per amministratori, da eseguire a partire dall'ambiente dei lab MD-102: identità, OneDrive, siti SharePoint, governance e migrazione.

## Moduli

| Modulo | Argomento | Esercizi |
|---|---|---|
| [Modulo 1](Modulo-01-Identita-Entra-ID/README.md) | Identità e accesso con Microsoft Entra ID | 6 |
| [Modulo 2](Modulo-02-OneDrive/README.md) | OneDrive for Business | 1 |
| [Modulo 3](Modulo-03-Siti-SharePoint/README.md) | Siti SharePoint Online | 8 |
| [Modulo 4](Modulo-04-Amministrazione-Governance/README.md) | Amministrazione e governance | 6 |
| [Modulo 5](Modulo-05-Migrazione-File-Server/README.md) | Migrazione da file server con Migration Manager | 4 |

## Ambiente di laboratorio

| VM | Utilizzo |
|---|---|
| `SEA-DEV1` | Postazione amministrativa (admin del tenant, PowerShell, file server del Modulo 5) |
| `SEA-DEV2` | Client di **User02** (owner) |
| `SEA-DEV3` | Client di **User03** (member) |

- Un tenant Microsoft 365 di prova con licenze **Office 365 E5** / **Microsoft 365 E5** (include Microsoft Entra ID P1/P2).
- Il materiale del corso (`Modulo1` … `Modulo5`: installer, script, dati) fornito dal docente.
- Nei comandi e negli URL sostituire i segnaposto `XXXXXX`, `TENANT` e `tenant_name` con i valori del proprio tenant.

> [!IMPORTANT]
> Gli esercizi sono **sequenziali**: utenti, gruppi, app registration e siti creati nei primi moduli vengono riutilizzati in quelli successivi.

> [!CAUTION]
> Password, permessi applicativi ampi ed esclusioni dalle policy sono configurati per semplicità **di laboratorio**. Non replicarli così come sono in un tenant di produzione: ogni esercizio segnala con dei callout le best practice da applicare.

## Legenda dei callout

> [!NOTE]
> Informazioni di contesto e approfondimenti.

> [!TIP]
> Suggerimenti e best practice.

> [!IMPORTANT]
> Requisiti (licenze, ruoli, prerequisiti) da rispettare.

> [!WARNING]
> Comportamenti da conoscere per evitare errori.

> [!CAUTION]
> Operazioni rischiose o irreversibili.

I callout con un link rimandano alla documentazione ufficiale su [Microsoft Learn](https://learn.microsoft.com/sharepoint/).
