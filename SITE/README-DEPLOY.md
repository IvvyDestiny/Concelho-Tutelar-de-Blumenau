# Instruções para Deploy Online

## 1. Render.com (100% gratuito para projetos simples)
1. Acesse https://render.com e clique em “Sign up with GitHub”.
2. Autorize o acesso à sua conta do GitHub.
3. Clique em “New +” > “Web Service”.
4. Escolha o repositório do seu projeto (ex: CT-Bnu-Uniasselvi).
5. Configure:
   - **Root Directory**: `SITE`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment**: Node
   - **Branch**: main
6. Clique em “Create Web Service”.
7. Aguarde o deploy terminar. Você receberá uma URL pública para acessar seu site.

## 2. Railway.app (alternativa gratuita)
1. Acesse https://railway.app e clique em “Sign in with GitHub”.
2. Clique em “New Project” > “Deploy from GitHub repo”.
3. Escolha seu repositório e siga as instruções.
4. Configure o diretório raiz como `SITE` e o comando de start como `node server.js`.
5. O deploy é automático e você recebe uma URL pública.

## 3. Outras opções
- Heroku, Vercel, Cyclic, etc. (veja instruções antigas abaixo)

---

# Instruções antigas (Heroku, Vercel)

## Heroku
1. Crie uma conta gratuita em https://heroku.com
2. Instale o Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
3. No terminal, faça login:
   heroku login
4. No diretório do projeto, inicialize um repositório git (se ainda não existir):
   git init
5. Crie um app Heroku:
   heroku create nome-do-seu-app
6. Faça commit dos arquivos:
   git add .
   git commit -m "Deploy inicial"
7. Faça o deploy:
   git push heroku master
8. Acesse a URL fornecida pelo Heroku.

## Vercel
1. Crie uma conta em https://vercel.com
2. Instale o Vercel CLI:
   npm i -g vercel
3. No diretório do projeto, rode:
   vercel
4. Siga as instruções na tela.

Pronto! Seu site estará online para qualquer máquina acessar.
