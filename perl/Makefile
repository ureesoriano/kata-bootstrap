.PHONY: init build shell test test-watch install-dependencies

docker-run := docker run \
	--rm -ti --init \
	-v $(shell pwd):/code \
	kata-perl:latest

prove := carton exec -- provewatcher -v --watch .

init: build ## <name> <dir>
ifndef name
	$(error 'name' is required)
endif
ifndef dir
	$(error 'dir' is required)
endif
	mkdir -p $(dir)
	cp ./Makefile $(dir)
	cp ./Dockerfile $(dir)
	cp ./cpanfile $(dir)
	cp ./cpanfile.snapshot $(dir)
	cp ./kata.t $(dir)/kata.t
	sed -i 's/XXX/$(name)/g' $(dir)/kata.t
	cd $(dir) && 	docker run --rm -ti -v $(dir):/code kata-perl:latest carton install

build:
	docker build \
		-t kata-perl:latest \
		.

shell: install-dependencies
	$(docker-run) bash

test: install-dependencies
	$(docker-run) carton exec -- prove -v kata.t

test-watch: install-dependencies
	$(docker-run) $(prove) kata.t

install-dependencies: build
	$(docker-run) carton install
