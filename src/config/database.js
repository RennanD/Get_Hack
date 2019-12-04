module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "hackapptest",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAl: true
  }
};
