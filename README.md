# GitHub Actions Training

GitHub CI/CD Service - Deploy To Shared Hosting With Github Actions

1. Create a GitHub workflow file;

   ```sh
   mkdir .github
   mkdir .github/worflows
   touch main.yml
   ```

2. Inside the file paste the updated steps for **[Get Latest Code](https://github.com/actions/checkout)** & **[Sync Files](https://github.com/marketplace/actions/rsync-deployments-action)**

   ```yml
   name: 🚀 Deploy website on push

   on:
       push:
           branches: [ main ]

   jobs:
       web-deploy:
           name: 🎉 Deploy
           runs-on: ubuntu-latest
           steps:
           - name: 🚚 Get latest code
           uses: actions/checkout@v2
           - name: 📂 Sync files
           uses: burnett01/rsync-deployments@4.1
           with:
               switches: -avzr --delete --exclude="" --include="" --filter=""
               path: /
               remote_path: ${{ secrets.REMOTE_PATH }}
               remote_host: ${{ secrets.REMOTE_HOST }}
               remote_port: ${{ secrets.REMOTE_PORT }}
               remote_user: ${{ secrets.REMOTE_USER }}
               remote_key: ${{ secrets.REMOTE_PRIVATE_KEY }}
   ```

3. Create a SSH keys on this folder

   ```sh
   ssh-keygen -t rsa -b 4096 -C username@hostname
   ```

4. When it promted for _Enter file in which to save the key_ change the name of the file, e.g: `repo-name`

   ```sh
   $ Generating public/private rsa key pair.
   $ Enter file in which to save the key (/Users/gunalirezqi/.ssh/id_rsa): repo-name
   $ Enter passphrase (empty for no passphrase):
   $ Enter same passphrase again:
   ```

5. Copy secret SSK key:

   ```sh
   cat repo-name | pbcopy
   ```

6. Create a `REMOTE_PRIVATE_KEY` GitHub secret on your repo: **Settings** > **Secrets** > **New secret** and paste the secret SSH key

7. Copy public SSK key
   ```sh
   cat repo-name.pub | pbcopy
   ```
8. Create a deploy key on your GitHub repo: **Settings** > **Deploy keys** > **Add deploy key** and paste the public secret key

9. 🚀
