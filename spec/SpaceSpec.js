describe('space', function() {

	var space

	beforeEach(function() {
		space = new Space();
	});

	describe('has an address', function() {
		it('can add an address to a space', function() {
			space.addAddress('FakeStreet 22');
			expect(space.address).toEqual('FakeStreet 22')
		});
	});
});
