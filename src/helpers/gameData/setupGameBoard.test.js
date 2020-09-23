const { setupGameBoard } = require('./setupGameBoard');


describe('setupGameBoard', () => {

  it('should generate a different game board every time', () => {

    const board1 = setupGameBoard(16, 40);
    const board2 = setupGameBoard(16, 40);

    expect(board1).not.toEqual(board2)
  })
})
