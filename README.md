# SharePoint Admin Labs

Percorso di laboratori pratici per l'amministrazione di **SharePoint Online** e **OneDrive** in Microsoft 365.
Gli esercizi partono dalla preparazione delle identità in Microsoft Entra ID e arrivano alla governance del tenant e alla migrazione di un file server on-premises.

**Versione online:** [cvn-computergross.github.io/SharePoint-Admin](https://cvn-computergross.github.io/SharePoint-Admin/), con navigazione per moduli e caselle per tenere traccia dei passi completati.

## Indice

- [Programma](#programma)
- [Ambiente di laboratorio](#ambiente-di-laboratorio)
- [Materiale del corso](#materiale-del-corso)
- [Convenzioni](#convenzioni)

## Programma

| Modulo | Argomento | Contenuti principali | Esercizi |
|---|---|---|:---:|
| [1](Modulo-01-Identita-Entra-ID/README.md) | Identità e accesso con Microsoft Entra ID | MFA e Conditional Access, gruppi statici e dinamici, licenze, guest, PowerShell, autenticazione app-only, Entra join | 6 |
| [2](Modulo-02-OneDrive/README.md) | OneDrive for Business | Client di sincronizzazione, condivisione, co-authoring, cestini, Files On-Demand, criteri di gruppo | 1 |
| [3](Modulo-03-Siti-SharePoint/README.md) | Siti SharePoint Online | Tipologie di sito, librerie, metadati, liste, pagine, permessi, integrazione con Teams | 8 |
| [4](Modulo-04-Amministrazione-Governance/README.md) | Amministrazione e governance | Condivisione esterna, controllo accessi, quote e retention, ciclo di vita dei siti, report, PowerShell | 6 |
| [5](Modulo-05-Migrazione-File-Server/README.md) | Migrazione da file server | Migration Manager, mapping utenti, migrazione dei permessi verso SharePoint e OneDrive | 4 |

> [!IMPORTANT]
> I moduli vanno svolti **in ordine**: utenti, gruppi, app registration e siti creati nei primi esercizi vengono riutilizzati in quelli successivi.

## Ambiente di laboratorio

| Macchina | Ruolo |
|---|---|
| `SEA-DEV1` | Postazione amministrativa: portali di amministrazione, PowerShell, file server del Modulo 5 |
| `SEA-DEV2` | Client di **User02**, owner dei siti e dei gruppi |
| `SEA-DEV3` | Client di **User03**, member dei siti e dei gruppi |

**Requisiti**

- Tenant Microsoft 365 di prova con licenze **Office 365 E5** / **Microsoft 365 E5** (include Microsoft Entra ID P1/P2).
- Account con ruolo **Global Administrator** sul tenant di prova.
- Accesso a Internet dalle VM per i portali Microsoft e il download del materiale.

> [!CAUTION]
> Password, permessi applicativi ed esclusioni dalle policy sono semplificati **per il laboratorio**. Non replicarli in un tenant di produzione: ogni esercizio indica le best practice da applicare, con i riferimenti alla documentazione Microsoft Learn.

## Materiale del corso

Il materiale (script, file di prova, dati per la migrazione) è suddiviso per modulo nella cartella [Materiale](Materiale/README.md):

| Modulo 1 | Modulo 2 | Modulo 3 | Modulo 4 | Modulo 5 |
|:---:|:---:|:---:|:---:|:---:|
| [Modulo1.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo1.zip) | [Modulo2.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo2.zip) | [Modulo3.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo3.zip) | [Modulo4.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo4.zip) | [Modulo5.zip](https://github.com/cvn-computergross/SharePoint-Admin/raw/main/Materiale/Modulo5.zip) |

Visual Studio Code, PowerShell 7 e il client OneDrive si scaricano dai siti ufficiali Microsoft, come indicato negli esercizi.

## Convenzioni

- **Segnaposto:** nei comandi e negli URL sostituire `XXXXXX`, `TENANT` e `tenant_name` con il dominio e il nome del proprio tenant.
- **Valori da copiare:** nomi, descrizioni, URL e comandi sono nei riquadri di codice, con il pulsante di copia.
- **Callout:** i riquadri *Nota*, *Suggerimento*, *Importante*, *Attenzione* e *Pericolo* riportano approfondimenti, requisiti e rischi, con il link alla documentazione ufficiale.
