# Sorgenti del sito GitHub Pages

Questa cartella contiene i componenti del sito (tema MkDocs Material, loghi, CSS, script di build).

Le guide **non** vanno copiate qui: il sito si genera dalle cartelle `Modulo-*`, `Materiale` e dal `README.md` della repo.

Sito pubblicato: <https://cvn-computergross.github.io/SharePoint-Admin/>

## Come si aggiorna

A ogni push su `main` il workflow `.github/workflows/pages.yml`:

1. esegue `scripts/build_docs.py`, che converte le guide nel formato MkDocs, genera la navigazione dalla struttura della repo e trasforma i passi degli esercizi in caselle spuntabili;
2. compila il sito e lo scrive nel branch **`GitHub-Page`**, che GitHub Pages pubblica.

Il branch `GitHub-Page` contiene solo il sito compilato e viene riscritto a ogni aggiornamento: non modificarlo a mano.

| Percorso | Contenuto |
|---|---|
| `home.md` | Pagina iniziale del sito: guida al laboratorio e schede dei moduli |
| `mkdocs.yml` | Configurazione del sito (titolo, tema, estensioni Markdown) |
| `requirements.txt` | Versioni di MkDocs e del tema Material |
| `overrides/` | Personalizzazioni del tema (footer) |
| `docs/assets/`, `docs/stylesheets/`, `docs/javascripts/` | Loghi, CSS e script delle caselle spuntabili |
| `scripts/build_docs.py` | Conversione delle guide in pagine MkDocs + navigazione |

## Anteprima locale

Dalla cartella principale della repo:

```powershell
python -m venv .venv
.venv\Scripts\pip install -r website/requirements.txt
python website/scripts/build_docs.py . website
.venv\Scripts\mkdocs serve -f website/mkdocs.gen.yml
```

Aprire <http://127.0.0.1:8000>. I file generati (`website/docs/index.md`, `website/docs/Modulo-*`, `website/docs/Materiale`, `website/mkdocs.gen.yml`) non vanno committati.
