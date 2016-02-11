var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
  this.numSquares = 0;
  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.on("mouseup", ".square", this.makeMove.bind(this));

  // this.$el.find(".undo").on("click", this.undoStroke.bind(this));
  var pos = $(".square").eq();
  // this.game.playMove(pos);
};

View.prototype.makeMove = function (e) {
  var pos = $(e.currentTarget).data("pos");
  this.game.playMove(pos);
  var currentPlayer = this.game.currentPlayer;
  $(e.currentTarget).addClass("clicked").text(function() {
    return currentPlayer;
  });

};

View.prototype.setupBoard = function () {
  for (var i = 0; i < 3; i++) {
    this.addRow();
  }
};

View.prototype.addRow = function () {
  var rowIdx = this.$el.find(".row").length;
  var $row = $("<ul>").addClass('row').data('id', this.numSquares);
  for (var colIdx = 0; colIdx < 3; colIdx++) {
    var $square = $("<li>").addClass('square').data('pos', [rowIdx, colIdx]);
    this.numSquares += 1;
    $row.append($square);
  }
  this.$el.append($row);

};

module.exports = View;
