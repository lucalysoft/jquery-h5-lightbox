(function($) {
	/*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

	module('jQuery#lightbox', {
		// This will run before each test in this module.
		setup: function() {
			this.elems = $('#qunit-fixture').children();
		}
	});

	test('is chainable', function() {
		expect(1);
		// Not a bad test to run on collection methods.
		strictEqual(this.elems.h5lightbox(), this.elems, 'should be chainable');
	});

	test("click target img", function() {

		var $img = $('img[data-large-src]');

		$('img').h5lightbox();
		$img.trigger('click');
		equal($("#lightbox").length, 1, 'lightbox added');
		$(document).trigger('click');
	});

	test("click other img", function() {

		var $img = $('img').not('[data-large-src]');

		$('img').h5lightbox();
		$img.trigger('click');
		equal($("#lightbox:hidden").length, 1, "no lightbox, that's okay");
	});


}(jQuery));
