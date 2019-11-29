-- DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS meal_plans CASCADE;
-- DROP TABLE IF EXISTS user_recipes CASCADE;
-- DROP TABLE IF EXISTS plan_recipes CASCADE;
-- DROP TABLE IF EXISTS recipe_tags CASCADE;
-- DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  image_url VARCHAR(255), 
  summary TEXT,
  ingredients VARCHAR(150)[] NOT NULL,
  preparation TEXT[] NOT NULL,
  author VARCHAR(100),
  source_url VARCHAR(255),
  prep_time VARCHAR(50),
  servings VARCHAR(50),
  search_vector TSVECTOR
);

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL
-- );


-- CREATE TABLE tags (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE meal_plans (
--   id SERIAL PRIMARY KEY NOT NULL, 
--   name VARCHAR(100) NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
-- );

-- CREATE TABLE plan_recipes (
--   id SERIAL PRIMARY KEY NOT NULL,
--   meal_plans_id INTEGER REFERENCES meal_plans(id) ON DELETE CASCADE,
--   recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
--   position INTEGER NOT NULL
-- );

-- CREATE TABLE user_recipes (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
--   saved_date DATE NOT NULL,
--   rating INTEGER
-- );

-- CREATE TABLE recipe_tags (
--   id SERIAL PRIMARY KEY NOT NULL,
--   tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
--   recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
-- );

