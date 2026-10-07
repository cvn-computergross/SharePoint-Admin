# Guida al laboratorio

Benvenuto nei laboratori di amministrazione di **SharePoint Online** e **OneDrive**.
Il percorso è diviso in cinque moduli: si parte dalle identità in Microsoft Entra ID e si arriva alla governance del tenant e alla migrazione di un file server.

## Prima di iniziare

!!! info "Ambiente"
    Il laboratorio usa tre macchine virtuali e un tenant Microsoft 365 di prova con licenze E5.

| Macchina | Con chi si accede | A cosa serve |
|---|---|---|
| `SEA-DEV1` | Amministratore del tenant | Portali di amministrazione, PowerShell, file server del Modulo 5 |
| `SEA-DEV2` | **User02** | Client dell'owner di siti e gruppi |
| `SEA-DEV3` | **User03** | Client del member di siti e gruppi |

Gli utenti User02 e User03 vengono creati nel Modulo 1: fino a quel momento si lavora da `SEA-DEV1`.

## Come seguire gli esercizi

1. **Segui i moduli in ordine.** Utenti, gruppi, app e siti creati all'inizio vengono riutilizzati negli esercizi successivi.
2. **Spunta i passi completati.** Ogni passo ha una casella: la barra di avanzamento mostra a che punto sei e resta salvata nel browser, anche se chiudi la pagina. *Azzera* ricomincia l'esercizio.
3. **Copia i valori dai riquadri.** Nomi, descrizioni, URL e comandi sono nei riquadri grigi: usa il pulsante di copia in alto a destra.
4. **Sostituisci i segnaposto.** `XXXXXX`, `TENANT` e `tenant_name` vanno sostituiti con il dominio e il nome del tuo tenant.
5. **Leggi i riquadri colorati.** Spiegano il perché dei passi, i requisiti di licenza e le differenze con un ambiente di produzione.

!!! danger "Solo per il laboratorio"
    Password, permessi applicativi ed esclusioni dalle policy sono semplificati per il laboratorio. Non replicarli in un tenant di produzione.

## Moduli

<div class="grid cards" markdown>

-   :material-account-key: **[Modulo 1 · Identità e accesso](Modulo-01-Identita-Entra-ID/index.md)**

    ---

    MFA e Conditional Access, gruppi e licenze, utenti guest, PowerShell, autenticazione app-only, Microsoft Entra join.

    *6 esercizi*

-   :material-cloud-sync: **[Modulo 2 · OneDrive for Business](Modulo-02-OneDrive/index.md)**

    ---

    Client di sincronizzazione, condivisione, co-authoring, cestini, Files On-Demand e criteri di gruppo.

    *1 esercizio*

-   :material-web: **[Modulo 3 · Siti SharePoint Online](Modulo-03-Siti-SharePoint/index.md)**

    ---

    Tipologie di sito, librerie e metadati, liste, pagine, permessi e integrazione con Microsoft Teams.

    *8 esercizi*

-   :material-shield-check: **[Modulo 4 · Amministrazione e governance](Modulo-04-Amministrazione-Governance/index.md)**

    ---

    Condivisione esterna, controllo accessi, quote e retention, ciclo di vita dei siti, report e PowerShell.

    *6 esercizi*

-   :material-folder-move: **[Modulo 5 · Migrazione da file server](Modulo-05-Migrazione-File-Server/index.md)**

    ---

    Migration Manager, mapping degli utenti e migrazione dei permessi verso SharePoint e OneDrive.

    *4 esercizi*

-   :material-download: **[Materiale del corso](Materiale/index.md)**

    ---

    Script, file di prova e dati per gli esercizi, divisi per modulo.

</div>
