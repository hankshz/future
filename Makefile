setup:
	sudo apt-get update
	sudo apt-get install -y npm python3-pip
	pip3 install awscli --upgrade --user
	export PATH=~/.local/bin:$PATH
	aws configure
	
dist:
	rm -f lambda.zip
	(cd lambda; npm install)
	(cd lambda; zip -q -r ../lambda.zip *)
	aws lambda update-function-code --function-name futureManufacturing --zip-file fileb://lambda.zip
