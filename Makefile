.PHONY: test

TEST_PORT := 52180

test:
	python3 -m http.server -d docs $(TEST_PORT)
