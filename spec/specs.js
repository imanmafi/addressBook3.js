describe('Contact', function() {
  it('creates a new contact with the given specs', function() {
    var testContact = new Contact("Dunning", "Kruger");
    expect(testContact.firstName).to.equal("Dunning");
    expect(testContact.lastName).to.equal("Kruger");
    expect(testContact.addresses).to.eql([]);
  });

  it('add the fullName method to all contacts', function(){
    var testContact = new Contact("Sherlock", "Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe('Address', function() {
  it('creates a new address with the given specs', function() {
    var testAddress = new Address("123 Sesame Street", "New York", "NY", "work");
    expect(testAddress.street).to.equal("123 Sesame Street");
    expect(testAddress.city).to.equal("New York");
    expect(testAddress.state).to.equal("NY");
    expect(testAddress.addressType).to.equal('work');
  });

  it('adds the fullAddress method to all addresses', function() {
    var testAddress = new Address("123 Sesame Street", "New York", "NY", 'work');
    expect(testAddress.fullAddress()).to.equal("123 Sesame Street, New York, NY");
  });
});
