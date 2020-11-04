const apiKey = "Yulk2IjBB9"
const array = [];
console.log("======================================");
// const array = [];
$('#gameBtn').on('click', function (data) {
    console.log("button clicked!!!");
    data.preventDefault();
    var userInputName = $('#userInputName').val();
    // console.log(userInputName);
    var userInputYear = $('#userInputYear').val();
    // console.log(userInputYear);
    // var gameQuery = "http://api.boardgameatlas.com/api/search?name=${name}&pretty=true&client_id=Yulk2IjBB9&year_published=${yearPublished}&min_players=${minPlayers}&max_players=${maxPlayers}&min_playtime=$(minPlaytime}&max_playtime=${maxPlaytime}&min_age=${minAge}";

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
        // if (res.length !==0){
        // for (let i =1; i <res.length; i++){
        //     console.log(i);
        //     // var gameList = $("<li>");
        // }
        // res.render(res);
    })
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

    //     let gameName = res.gameName;
})