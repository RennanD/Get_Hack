import Sequelize from "sequelize";
import mongoose from 'mongoose'

import User from "../app/models/User";
import File from "../app/models/File";
import Hackathon from "../app/models/Hackathon";

import dbconfig from "../config/database";

const models = [User,File, Hackathon];

class Database {
  constructor() {
    this.init();
    
  }

  init() {
    this.connection = new Sequelize(dbconfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
