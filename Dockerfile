# Use a imagem oficial do PostgreSQL
FROM postgres:latest

# Defina variáveis de ambiente
ENV POSTGRES_USER=crud-admin
ENV POSTGRES_PASSWORD=1234
ENV POSTGRES_DB=crud

# Copie arquivos SQL de inicialização (se necessário)
COPY ./init.sql /docker-entrypoint-initdb.d/
