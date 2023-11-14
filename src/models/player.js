import { DataTypes,  } from "sequelize";
import dbconection from "../config/db.js";

const Player= dbconection.define("tbb_players",
{
    name:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull:false,
        unique: true
    },
    password:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    nickname:{
        type:DataTypes.STRING(255),
        allowNull:false,
        unique:true
    },
    birthday:{
        type: DataTypes.DATE,
        allowNull:false,
        unique:false
    },
    portrait_img:{
        type: DataTypes.STRING(255),
    }
}
)
export default Player
/* use db_200931;

INSERT INTO tbb_players (name, email, password, nickname, birthday, portrait_img, createdAt, updatedAt)
VALUES ('John Doe', 'johndoe@example.com', 'password123', 'johndoe', '1990-01-01 00:00:00', 'portrait.jpg', '2023-11-10 20:16:12', '2023-11-10 20:16:12'),
       ('Jane Doe', 'janedoe@example.com', 'password456', 'janedoe', '1992-01-01 00:00:00', 'portrait.jpg', '2023-11-10 20:16:12', '2023-11-10 20:16:12'),
       ('Bob Smith', 'bobsmith@example.com', 'password789', 'bobsmith', '1985-01-01 00:00:00', 'portrait.jpg', '2023-11-10 20:16:12', '2023-11-10 20:16:12');
 */