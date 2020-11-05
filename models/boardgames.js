// set up table for user input data, see below:
// we are getting an error for Boardgames, we should ask for help on this during class
module.exports = function(sequelize, DataTypes) {
    var Boardgames = sequelize.define("Boardgames", {
        games: {
            type: DataTypes.STRING,
            description: DataTypes.TEXT,
            allowNull: true
        }
    });
    return Boardgames;
};