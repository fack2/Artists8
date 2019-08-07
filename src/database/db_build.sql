BEGIN;

DROP TABLE IF EXISTS paintings CASCADE;
DROP TABLE IF EXISTS artists CASCADE;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(150) NOT NULL, 
    coutry VARCHAR(40)
);

INSERT INTO artists (name, country) VALUES
( 'Leonardo da Vinci', 'Italy'), 
( 'Willem de Kooning', 'Netherlands'), 
( 'Paul Cézanne', 'France'), 
( 'Paul Gauguin', 'France'), 
( 'johannes vermeer', 'Span'), 
( 'rembrandt', 'Netherlands'), 
( 'picasso', 'Netherlands'), 
( 'Edvard Munch', 'Norway'), 
( 'van gogh ', 'Netherlands')
;

CREATE TABLE paintings (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(150) NOT NULL, 
    price double precision NOT NULL, 
    description text , 
    img text, 
    id_artist INTEGER, 
    FOREIGN KEY
    (id_artist) REFERENCES artists (id)
);

INSERT INTO paintings (name, price, description, img, id_artist) VALUES
('Savior of the World', '453000000', 'Salvator Mundi is a painting by Italian Renaissance artist Leonardo da Vinci dated to c. 1500. Long thought to be a copy of a lost original veiled with overpainting, it was rediscovered, restored, and included in a major Leonardo exhibition at the National Gallery, London, in 2011–12.', 'https://files.gitter.im/95Rawan/cCkJ/salvator-mundi.jpg', '1'), 
('Interchange', '312000000', 'Interchange, also known as Interchanged, is an oil on canvas painting by the Dutch-American abstract expressionist painter Willem de Kooning. It measures 200.7 by 175.3 centimetres and was completed in 1955.', 'https://files.gitter.im/95Rawan/cCkJ/Interchange.jpeg', '2'), 
('The Card Players', '274000000', 'The Card Players is a series of oil paintings by the French Post-Impressionist artist Paul Cézanne. Painted during Cézannes final period in the early 1890s, there are five paintings in the series. The versions vary in size, the number of players, and the setting in which the game takes place.', 'https://files.gitter.im/95Rawan/cCkJ/the-card-players.jpg', '3'), 
('When Will You Marry', '219000000', 'When Will You Marry? is an oil painting from 1892 by the French Post-Impressionist artist Paul Gauguin.', 'https://files.gitter.im/95Rawan/cCkJ/when-will-you-marry.jpg', '4'), 
('guernica', '0', 'guernica', 'https://files.gitter.im/someyaaltous/yWhm/guernica.jpg', '5'), 
('mona lisa', '0', 'mona lisa', 'https://files.gitter.im/someyaaltous/w5AB/mona-lisa.jpg', '1'), 
('the girl with a pearl earring', '0', 'the girl with a pearl earring', 'https://files.gitter.im/someyaaltous/RRyR/the-girl-with-a-pearl-earring.jpg', '6'), 
('the night watch', '0', 'the night watch', 'https://files.gitter.im/someyaaltous/dodr/-the-night-watch.jpg', '7'), 
('the scream', '0', 'the scream', 'https://files.gitter.im/someyaaltous/KvhA/the-scream.jpg', '8'), 
('the starry night', '0', 'the starry night', 'https://files.gitter.im/someyaaltous/jcde/the-starry-night.jpg', '9')
;

COMMIT;