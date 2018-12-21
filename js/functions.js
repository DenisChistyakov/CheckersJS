/**
* Global variables
*/
var checkerWhite = 'cartman.png';//sv_shashka.gif'; //'
var checkerBlack = 'kyle.png';//'tem_shashka.gif'; //
var whiteStep = false;
var blackStep = true;     
var whitePrevious = null;
var blackPrevious = null;

var activeWhiteCellID = null;     
var activeBlackCellID = null; 

var defaultBlackCheckersCount = 12;
var defaultWhiteCheckersCount = 12;
var blackCheckersCount = defaultBlackCheckersCount;
var whiteCheckersCount = defaultWhiteCheckersCount;

function addBoard () {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i % 2 == 0 && j % 2 == 0)|| (i % 2 != 0 && j % 2 != 0)) {
                //$("#board").append('<div class="cell white-cell white-cell-x_' + i +'-y_' + j + '" id="white-cell-x-' + i +'-y-' + j + '">' + i + ':' + j + '</div>');
                $("#board").append('<div class="cell white-cell white-cell-x_' + i +'-y_' + j + '" id="white-cell-x-' + i +'-y-' + j + '"></div>');
            }
            else {
                //$("#board").append('<div class="cell black-cell black-cell-x_' + i +'-y_' + j + '" id="white-cell-x-' + i +'-y-' + j + '">' + i + ':' + j + '</div>');
                $("#board").append('<div class="cell black-cell black-cell-x_' + i +'-y_' + j + '" id="white-cell-x-' + i +'-y-' + j + '"></div>');
            }
        }
    }
}

function addDraughts () {
    $("div").filter(".black-cell").slice(0,12).addClass('black-checker').append('<img src="images/' + checkerBlack + '" class="black-checker cell-img" />');
    $("div").filter(".black-cell").slice(20,32).addClass('white-checker').append('<img src="images/' + checkerWhite + '" class="white-checker cell-img" />');
}

function initCheckers () {
    addBoard ();
    addDraughts ();
}