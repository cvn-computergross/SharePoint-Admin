# Modulo 5 – Esercizio 1: Utenti e gruppi (cloud e locali)

[← Indice modulo](README.md) · [Esercizio 2 →](Esercizio-02.md)

> [!NOTE]
> In questo modulo si simula un file server on-premises usando **utenti e gruppi locali** della VM `SEA-DEV1`. Il collegamento con gli utenti cloud omonimi avverrà tramite un **file di mapping utenti** (Esercizio 4).

## Passo 1 · Creazione Utenti e Gruppi su Entra

**Accedere alla VM `SEA-DEV1` come administrator, con credenziali admin di dominio**

1. Aprire Edge e entrare su https://admin.cloud.microsoft/ .
2. Andare su Users -> Active Users -> Add a User.
3. Procedere con la creazione di User06 con le seguenti info e licenze:
   `First Name`: User
   `Last Name`: 06
   `Display name`: User06
   `Username`: User06
   `Select location`: Italy
   `Licenses`: Microsoft Teams Enterprise, Office 365 E5 (no Teams).
4. Togliere la spunta a `Automatically create a password` e a `Require this user to change their password when they first sign in` e impostare `Computergross@!` .

   ```text
   Automatically create a password
   ```

   ```text
   Require this user to change their password when they first sign in
   ```

   ```text
   Computergross@!
   ```

5. Terminare la creazione e salvare UPN .

![Esercizio 1 – Passo 1 – Creazione Utenti e Gruppi su Entra](images/es01-01.png)

6. Andare su Users -> Active Users -> Add a User.
7. Procedere con la creazione di User07 con le seguenti info e licenze:
   `First Name`: User
   `Last Name`: 07
   `Display name`: User07
   `Username`: User07
   `Select location`: Italy
   `Licenses`: Microsoft Teams Enterprise, Office 365 E5 (no Teams).
8. Togliere la spunta a `Automatically create a password` e a `Require this user to change their password when they first sign in` e impostare `Computergross@!` .

   ```text
   Automatically create a password
   ```

   ```text
   Require this user to change their password when they first sign in
   ```

   ```text
   Computergross@!
   ```

9. Terminare la creazione e salvare UPN .
10. Andare su Teams & Groups -> Active Teams & Groups -> Security Groups.
11. Premere **+ Add a security group** e inserire le seguenti informazioni:
   `Name`: Paghe
12. Aprire il gruppo, andare su Members e premere **+ Add members**.
13. Selezionare User07.

![Esercizio 1 – Passo 1 – Creazione Utenti e Gruppi su Entra](images/es01-02.png)

14. Andare su Teams & Groups -> Active Teams & Groups -> Security Groups.
15. Premere **+ Add a security group** e inserire le seguenti informazioni:
   `Name`: Fatture
16. Aprire il gruppo, andare su Members e premere **+ Add members**.
17. Selezionare User06.

![Esercizio 1 – Passo 1 – Creazione Utenti e Gruppi su Entra](images/es01-03.png)

## Passo 2 · Creazione degli utenti locali

1. Aprire Computer Management, andare su System Tools > Local Users and Groups > Users
2. Premere tasto destro e selezionare **New User**.

### Utente user06

2. Compilare i campi:
    - **User name**:

      ```text
      user06
      ```

    - **Full name**:

      ```text
      user06
      ```

3. Impostare **Password**:

   ```text
   Password0!
   ```

4. **Togliere la spunta** da **User must change password at next logon**.
5. Selezionare Create.

### Utente user07

1. Ripetere la procedura: tasto destro su **Users** e selezionare **New User**.
    - **User name**:

      ```text
      user07
      ```

    - **Full name**:

      ```text
      user07
      ```

2. **Password**: `Password0!`, con la stessa spunta **User must change password at next logon** rimossa.

   ```text
   Password0!
   ```

3. Selezionare Create.

![Esercizio 1 – Utente user07](images/es01-04.png)

## Passo 3 · Creazione dei gruppi locali

Andare su Computer Management, andare su System Tools > Local Users and Groups > Groups

### Gruppo Fatture

1. Premere tasto destro e New Group.
2. **Group name**:

   ```text
   Fatture
   ```

3. Selezionare **Create**.

### Gruppo Paghe

1. Ripetere la procedura: **New Group**, **Group name**: `Paghe`, impostazioni base predefinite.

   ```text
   Paghe
   ```

2. Selezionare **Create**.

![Esercizio 1 – Gruppo Paghe](images/es01-05.png)

## Passo 4 · Aggiunta degli utenti ai gruppi

1. Fare doppio clic sul gruppo **Fatture** per aprirne le proprietà.
2. Selezionare la scheda **Members**, poi **Add...**.

![Esercizio 1 – Passo 4 – Aggiunta degli utenti ai gruppi](images/es01-06.png)

3. Digitare **`user06`**, selezionare **Check Names** e confermare con **OK**.
4. Selezionare **OK** per chiudere le proprietà del gruppo.

![Esercizio 1 – Passo 4 – Aggiunta degli utenti ai gruppi](images/es01-07.png)

5. Fare doppio clic sul gruppo **Paghe** per aprirne le proprietà.
6. Selezionare la scheda **Members**, poi **Add...**.
7. Digitare **`user07`**, selezionare **Check Names** e confermare con **OK**.

![Esercizio 1 – Passo 4 – Aggiunta degli utenti ai gruppi](images/es01-08.png)

8. Selezionare **OK** per chiudere le proprietà del gruppo.

---

[← Indice modulo](README.md) · [Esercizio 2 →](Esercizio-02.md)
