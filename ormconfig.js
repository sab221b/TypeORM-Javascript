module.exports = {
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'mysql',
   database: 'mydb',
   synchronize: true,
   logging: false,
   entities: [
      'src/entities/**/*.js'
   ],
   migrations: [
      'src/migration/**/*.js'
   ],
   seeds: ['src/seeds/**/*.seed.ts'],
   factories: ['src/factories/**/*.factory.ts'],
   subscribers: [
      'src/subscriber/**/*.js'
   ],
   cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber'
   }
}