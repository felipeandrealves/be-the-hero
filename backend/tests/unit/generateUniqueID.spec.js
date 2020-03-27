const generateUniqueID = require('../../src/util/generateUniqueID');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueID();

    expect(id).toHaveLength(8);
  });
})