.PHONY: test

TEST_PORT := 51280

test:
	python3 -m http.server -d docs $(TEST_PORT)
