# Mode used to choose the docker-compose file to use and give access to different commands (development or production)
MODE = development

# Paths
DOCKER_PATH = ./requirements/docker
DOCKER_ENV_FILE = ${DOCKER_PATH}/.env
CLEAR_FILE = ./requirements/.dev/docker_clean.sh

# Commands
DOCKER_COMPOSE = docker compose
BASH = /bin/bash
DOCKER_EXEC = docker exec -it

ifeq ($(MODE), development)
	DOCKER_COMPOSE_FILE = ./requirements/docker/docker-compose-dev.yml
else
	DOCKER_COMPOSE_FILE = ./requirements/docker/docker-compose.yml
endif

ifeq ($(MODE),$(filter $(MODE),development production ))
all:	up
else
all:
		@echo "Invalid mode, please use 'make MODE=development' or 'make MODE=prod' to run the project."
endif

ifeq ($(MODE),$(filter $(MODE),development production ))
re:		restart

up:		up-front

# Run every container in background/detached mode
up-back:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} up --build -d

# Run every container in foreground
up-front:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} up --build

# Stop every container
stop:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} stop

# Remove every container
clean:
		@make stop
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} down

# Restart every container
restart:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} stop || true
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} up --build -d

# Show status of every container
status:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} ps

# Clean every container, network, volume, image, etc.
dclean:
		@make stop 2>/dev/null
		@${BASH} ${CLEAR_FILE} || true

# Clean every container, network, volume, image, etc. and restart
drestart:
		@${BASH} ${CLEAR_FILE} || true
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} up --build -d

# Run a command (/bash by default) in a client container
in-front:
		@${DOCKER_EXEC} ${FRONT_NAME} ${SCRIPT_TO_RUN}

# Run a command (/bash by default) in a server container
in-back:
		@${DOCKER_EXEC} ${BACK_NAME} ${SCRIPT_TO_RUN}

# Show logs of server container
server-logs:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} logs --tail=300 server

# Show logs of client container
client-logs:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} logs --tail=100 client

# Remove node_modules and dist folders in client and server
remove-modules:
		@rm -rf ./requirements/client/node_modules ./requirements/client/dist &> /dev/null || true
		@rm -rf ./requirements/server/node_modules ./requirements/server/dist &> /dev/null

run-web:
		@${DOCKER_EXEC} client yarn run web

run-android:
		@${DOCKER_EXEC} client yarn run android
endif

.PHONY: all re up up-back stop clean dclean restart drestart status logs in-front in-back remove-modules server-logs client-logs
