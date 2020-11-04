const apiKey = "Yulk2IjBB9"
const array = [];
console.log("======================================");
// const array = [];
$('#gameBtn').on('click', function (data) {
    console.log("button clicked!!!");
    data.preventDefault();
    var userInputName = $('#userInputName').val();
    console.log(userInputName);
    var userInputYear = $('#userInputYear').val();
    console.log(userInputYear);

    let searchGameParms = {
        name: "name",
        year_published: "year",
        min_players: "numOfPlayers"
    }
    //     var queryUrl = "https://www.boardgameatlas.com/api/search?"
    //     +userInput+
    //     "order_by=popularity&ascending=false&pretty=true&client_id=JLBr5npPhV"
    //     $.ajax({
    //         url: queryUrl,
    //         method: 'GET',
    //         headers: {
    //             'user-key': apiKey
    //         }
    //     })
    // }).then(function(res){
    //     console.log(res);
    //     $("#gameResults").empty();
    //     array = res.name;
    //     for (let i =1; i <5; i++){
    //         console.log(i);
    //     }
    //     let gameName = res.gameName;
})