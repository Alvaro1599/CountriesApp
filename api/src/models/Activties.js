const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'activities',
		{
			ID: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV1,
				primaryKey: true
			},
			nameAc: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			duration: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			difficulty: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			season: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isIn: {
						args: [ [ 'Summer', 'Fall', 'Winter', 'Spring' ] ],
						msg: 'You must select a valid season'
					}
				}
			}
		},
		{
			timestamps: false,
			freezeTableName: true,
			tableName: 'usuario',
			classMethods: {}
		}
	);
};
