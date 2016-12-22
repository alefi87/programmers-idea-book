REPORTER = spec
MOCHA_BIN = ./node_modules/.bin/_mocha
ISTANBUL_BIN = ./node_modules/.bin/istanbul
GREP = ''

test-strings :
	@NODE_ENV=test $(MOCHA_BIN) \
		--reporter $(REPORTER) \
		--recursive \
		--grep $(GREP) \
		*/test

test : test-strings

coverage :
	@NODE_ENV=test $(ISTANBUL_BIN) \
		cover ./node_modules/.bin/_mocha --\
			--recursive \
			--reporter dot \
			*/test

test-all : test coverage

.PHONY: test-strings test coverage test-all
