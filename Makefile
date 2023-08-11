all: clean build

clean: 
	rm ./docs/* -rf

build:
	pwd
	ls -l
	cd ./notebook && yarn && yarn build
	cp ./notebook/build/* ./docs/ -R
