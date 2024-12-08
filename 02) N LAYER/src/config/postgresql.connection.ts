import { Sequelize } from 'sequelize'
import 'dotenv/config'

const sequelize = new Sequelize("admin", "admin", "admin", {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  })

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export { sequelize, connectDB }