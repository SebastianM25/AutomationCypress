DOCKER_COMPOSE=docker-compose
CONTAINER=app


DC_RUN=$(DOCKER_COMPOSE) run -T
DC_EXEC=$(DOCKER_COMPOSE) exec -T


sh:
    $(DOCKER_COMPOSE) run --rm $(CONTAINER) /bin/bash


test:
    $(DC_RUN) $(CONTAINER) npm run cy:run
    sudo chmod -R 777 cypress/reports


test-api:
    $(DC_RUN) $(CONTAINER) npm run cy:run -- --spec "cypress/e2e/SmokeTesting/*.spec.js"


