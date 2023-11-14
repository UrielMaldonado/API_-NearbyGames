import Player from '../models/player.js'

const obj = {};

obj.getAllPlayers = async (req, res) => {
  try {
    // Use Sequelize's findAll method to get all players
    const players = await Player.findAll();
    // Send the players as a JSON response
    res.status(200).json(players);
  } catch (error) {
    // Handle errors, for example, send a 500 Internal Server Error status
    console.error('Error getting all players:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



obj.findOneById = async (req, res) => {
    try {
      const id = req.params.id;
      const player = await Player.findByPk(id);
  
      if (!player) {
        return res.status(404).json({ error: 'Player not found' });
      }
      res.status(200).json(player);
    } catch (error) {
      console.error('Error finding player by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  obj.findOneByEmail = async (req, res) => {
    try {
      const email = req.params.Email;
      const player = await Player.findOne({ where: { email } });
  
      if (!player) {
        return res.status(404).json({ error: 'Player not found' });
      }
      res.status(200).json(player);
    } catch (error) {
      console.error('Error finding player by email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  obj.createOnePlayer = async (req, res) => {
    try {
      const { name, email, password, nickname, birthday, portrait_img } = req.body;
  
      const newPlayer = await Player.create({
        name,
        email,
        password,
        nickname,
        birthday,
        portrait_img,
      });
      res.status(201).json(newPlayer);
    } catch (error) {
      console.error('Error creating player:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  obj.putPlayer = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, email, password, nickname, birthday, portrait_img } = req.body;
  
      const player = await Player.findByPk(id);
  
      if (!player) {
        return res.status(404).json({ error: 'Player not found' });
      }
  
      await player.update({
        name,
        email,
        password,
        nickname,
        birthday,
        portrait_img,
      });
      res.status(200).json(player);
    } catch (error) {
      console.error('Error updating player:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  obj.delPlayer = async (req, res) => {
    try {
      const id = req.params.id;
      const player = await Player.findByPk(id);
  
      if (!player) {
        return res.status(404).json({ error: 'Player not found' });
      }
  
      await player.destroy();
  
      res.status(200).json({ message: 'Player deleted successfully' });
    } catch (error) {
      console.error('Error deleting player:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  obj.patchPlayer = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, email, password, nickname, birthday, portrait_img } = req.body;
  
      const player = await Player.findByPk(id);
  
      if (!player) {
        return res.status(404).json({ error: 'Player not found' });
      }
  
      await player.update({
        name: name || player.name,
        email: email || player.email,
        password: password || player.password,
        nickname: nickname || player.nickname,
        birthday: birthday || player.birthday,
        portrait_img: portrait_img || player.portrait_img,
      });
  
      res.status(200).json(player);
    } catch (error) {
      console.error('Error patching player:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

export default obj;