# Detect if we're running Windows
ifdef SystemRoot
	# If so, set the file & folder deletion commands:
	FixPath = $(subst /,\,$1)
else
	# Otherwise, assume we're running *N*X:
	FixPath = $1
endif

NODE_MODULES := ./node_modules/.bin/
test:
# alternative: @./node_modules/.bin/mocha but less powerful
	$(call FixPath, $(NODE_MODULES))mocha --reporter spec

test-w:
# option to auto-run tests.
	$(call FixPath, $(NODE_MODULES))mocha --reporter spec --watch --growl

.PHONY: test test-w
