# Instruções para Deploy Online

## 1. Heroku (recomendado para iniciantes)
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

## 2. Vercel (alternativa fácil)
1. Crie uma conta em https://vercel.com
2. Instale o Vercel CLI:
   npm i -g vercel
3. No diretório do projeto, rode:
   vercel
4. Siga as instruções na tela.

## 3. Outras opções
- Você pode usar qualquer serviço que rode Node.js (Railway, Render, Cyclic, etc).
- Sempre garanta que a porta seja definida por process.env.PORT.

Pronto! Seu site estará online para qualquer máquina acessar.
