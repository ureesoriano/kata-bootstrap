.PHONY: init build

init: build ## <name> <dir>
ifndef name
	$(error 'name' is required)
endif
ifndef dir
	$(error 'dir' is required)
endif
	mkdir -p $(dir)
	cp ./Makefile.kata $(dir)/Makefile
	cp ./Dockerfile $(dir)
	cp ./.gitignore $(dir)
	cp ./package.json $(dir)
	cp ./test.js $(dir)
	cp ./index.js $(dir)/$(name).js
	sed -i 's/XXX/$(name)/g' $(dir)/package.json $(dir)/test.js $(dir)/$(name).js
	cd $(dir) && 	docker run --rm -ti -v $(dir):/code kata-js:latest npm i

build:
	docker build \
		-t kata-js:latest \
		.
