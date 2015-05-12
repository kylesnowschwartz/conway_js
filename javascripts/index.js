$(document).ready(function() {
  var conway = new Conway(100);
  conway.renderGrid();
  var time = setInterval( function () {
    conway.updateNeighborsForAllCells();
    conway.updateAllCells();
  }, 50);
});

