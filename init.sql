CREATE TABLE CHARACTER (
    id SERIAL primary key,
    name VARCHAR(255),
    age INT,
    active boolean default true
);

CREATE TABLE POKEMON (
    id SERIAL primary key,
    name VARCHAR(255)
);

CREATE TABLE CHARACTER_TEAM (
    id SERIAL primary key,
    id_character SERIAL,
    id_pokemon SERIAL, 
     CONSTRAINT fk_character
      FOREIGN KEY(id_character) 
        REFERENCES CHARACTER(id),
        CONSTRAINT fk_pokemon
      FOREIGN KEY(id_pokemon) 
        REFERENCES POKEMON(id)
);

INSERT INTO POKEMON (name) VALUES ('Bulbasaur');
INSERT INTO POKEMON (name) VALUES ('Ivysaur');
INSERT INTO POKEMON (name) VALUES ('Venusaur');
INSERT INTO POKEMON (name) VALUES ('Charmander');
INSERT INTO POKEMON (name) VALUES ('Charmeleon');
INSERT INTO POKEMON (name) VALUES ('Charizard');
INSERT INTO POKEMON (name) VALUES ('Squirtle');
INSERT INTO POKEMON (name) VALUES ('Wartortle');
INSERT INTO POKEMON (name) VALUES ('Blastoise');
INSERT INTO POKEMON (name) VALUES ('Caterpie');
