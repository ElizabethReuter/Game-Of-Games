const apiKey = "Yulk2IjBB9"
const array = [];

$('#gameBtn').on('click', function (data) {
    console.log("button clicked!!!");
    data.preventDefault();
    var userInputName = $('#userInputName').val();
    var userInputYear = $('#userInputYear').val();
    // added functionality to the following user input, see below:
    var minNumOfPlayers = $('#minNumOfPlayers').val();
    var maxNumOfPlayers = $('#maxNumOfPlayers').val();
    var minTime = $('#minTime').val();
    var maxTime = $('#maxTime').val();
    var minAge = $('minAge').val();
    
    let searchGameParams = {
        name: userInputName,
        yearPublished: userInputYear,
        minPlayers: minNumOfPlayers,
        maxPlayers: maxNumOfPlayers,
        minPlaytime: minTime,
        maxPlaytime: maxTime,
        minAge: minAge
    }
    console.log(searchGameParams);
    $.ajax({
        url: `/api/search/${JSON.stringify(searchGameParams)}`,
        method: 'GET',
    }).then(function(res){
        console.log(res);
        $("#gameResults").empty();
        for(i=0; i<res.games.length; i++){
            // added loop with buttons for the search results so we can add them to the user database as as game they interested in or something, also appended results so that old results disappear when we do a new search/refresh the page (append)
            var newDiv = $("<div>")
            newDiv.addClass("container row");

            var newGame = $("<li>")
            newGame.text(res.games[i].name)


            var newGameBtn = $(`<button class="addGame" onclick="style.display = 'none'" data-id=${res.games[i].id}>`)
            newGameBtn.append(`<i class="fa fa-floppy-o" aria-hidden="true"></i>`);
            newDiv.append(newGame);
            newDiv.append(newGameBtn);
            $("#gameResults").append(newDiv)
        }
    })

});
// on click for our post method (users adding to database)
$(document).on("click", ".addGame", function(){
    let name = $(this).prev().text()
    let id = $(this).attr("data-id")
    $.ajax({
        url: `/api/new`,
        method: `POST`,
        data: { name, id }
    }).then(function(res){
        console.log("added")
    })
});