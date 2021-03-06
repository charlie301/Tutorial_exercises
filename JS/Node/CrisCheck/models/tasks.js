//
// Task Model
//

module.exports = (sequelize, DataType) => {

  /**
  * @description: Define model datatype via sequalize
  * @param 1    : Name of model
  * @param 2    : Object defining data attributes
  * @param 3    : Static model functions
  */
  const Tasks = sequelize.define("Tasks", {
    //
    // Model datatypes and properties
    //
    id:{
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    title:{
      type: DataType.STRING,
      allowNull: false,
      validate: { notEmpty: true }
      },
    done:{
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
      }
    },
    //
    // Static model functions
    //
    {
      classMethods: {
        associate: (models) => {
          Tasks.belongsTo(models.Users);
        }
      }
    });

    return Tasks;

}; //end
