FROM mysql

WORKDIR /sql

COPY todolist*.sql /docker-entrypoint-initdb.d/

COPY . /sql/
