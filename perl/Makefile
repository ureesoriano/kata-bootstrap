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
	cp ./cpanfile $(dir)
	cp ./cpanfile.snapshot $(dir)
	cp ./kata.t $(dir)/kata.t
	sed -i 's/XXX/$(name)/g' $(dir)/kata.t
	cd $(dir) && 	docker run --rm -ti -v $(dir):/code kata-perl:latest carton install

build:
	docker build \
		-t kata-perl:latest \
		.
