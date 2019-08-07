BEGIN;

DROP TABLE IF EXISTS paintings CASCADE;
DROP TABLE IF EXISTS artists CASCADE;


CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    country VARCHAR(40)
);

INSERT INTO artists (name, country) VALUES
('Leonardo da Vinci', 'Italy'),
('Willem de Kooning', 'Netherlands'),
('Paul Cézanne', 'France'),
('Paul Gauguin', 'France'),
('Johannes vermeer', 'Span'),
('Rembrandt', 'Netherlands'),
('Picasso', 'Netherlands'),
('Edvard Munch', 'Norway'),
('Van gogh ', 'Netherlands');

CREATE TABLE paintings (
    id SERIAL PRIMARY KEY,
    paintingName VARCHAR(150) NOT NULL,
    price double precision NOT NULL,
    description text ,
    img text,
    id_artist INTEGER,
    FOREIGN KEY
    (id_artist) REFERENCES artists (id)
);

INSERT INTO paintings (paintingName, price, img, description, id_artist ) VALUES
('Savior of the World', '453000000','https://files.gitter.im/95Rawan/cCkJ/salvator-mundi.jpg','Salvator Mundi is a painting by Italian Renaissance artist Leonardo da Vinci dated to c. 1500. Long thought to be a copy of a lost original veiled with overpainting, it was rediscovered, restored, and included in a major Leonardo exhibition at the National Gallery, London, in 2011–12.','1'),

('Interchange', '312000000','https://files.gitter.im/95Rawan/cCkJ/Interchange.jpeg','Interchange, also known as Interchanged, is an oil on canvas painting by the Dutch-American abstract expressionist painter Willem de Kooning. It measures 200.7 by 175.3 centimetres and was completed in 1955.','2'),

('The Card Players', '274000000','https://files.gitter.im/95Rawan/cCkJ/the-card-players.jpg','The Card Players is a series of oil paintings by the French Post-Impressionist artist Paul Cézanne. Painted during Cézannes final period in the early 1890s, there are five paintings in the series. The versions vary in size, the number of players, and the setting in which the game takes place.','3'),

('When Will You Marry?', '219000000','https://files.gitter.im/95Rawan/cCkJ/when-will-you-marry.jpg','When Will You Marry? is an oil painting from 1892 by the French Post-Impressionist artist Paul Gauguin.','4'),
('Guernica', '0','https://files.gitter.im/someyaaltous/yWhm/guernica.jpg', 'Guernica is a Picasso painting showing the bombing of Spain’s city of Guernica during the Spanish Civil War. The 1937 painting is housed in the Museo Reina Sofia in Madrid. It is considered to be one of the most important anti-war works of art in history. Although the painting is held among high esteem now, it did not automatically gather critical appeal upon its reveal.','5'),
('mona lisa', '0','https://files.gitter.im/someyaaltous/w5AB/mona-lisa.jpg', 'The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1506. He finished working on it in 1519. The painting is displayed in Louvre museum of Paris. It is believed to be a portrait of Lisa Gherardini, an Italian noblewoman. The painting is famous for its subtlety, composition, and inexplicible facial expression of the subject.','1'),
('the girl with a pearl earring', '0','https://files.gitter.im/someyaaltous/RRyR/the-girl-with-a-pearl-earring.jpg','The Girl With a Pearl Earring is a work of art by Johannes Vermeer. It was painted around 1665 and portrays a turbaned girl with a pearl earring. The painting has been called the "Dutch Mona Lisa", mostly due to the ambiguous expression of the subject. The painting is on display in Mauritschuis in The Hague, Netherlands.','6'),
('the night watch', '0','https://files.gitter.im/someyaaltous/dodr/-the-night-watch.jpg','The Night Watch was painted by Rembrandt in 1642. It depicts the departure of a city led by its captain. The painting is displayed at the Rijksmuseum in Amsterdam. The unique dark varnish makes the painting take on the appearance of a night scene.','7'),
('the scream', '0','https://files.gitter.im/someyaaltous/KvhA/the-scream.jpg','The Scream, one of the worlds most famous paintings of all time, was painted by Edvard Munch in 1893. The painting shows a frightened person screaming. The painting is housed in the National Gallery, Oslo, Norway. One interesting fact about this painting is the fact that has often been a target of art heists. The last time the painting was stolen was in 2004. It was missing for two years before finally being recovered in 2006','8'),
('the starry night', '0','https://files.gitter.im/someyaaltous/jcde/the-starry-night.jpg','The Starry Night by Vincent van Gogh is displayed in the Museum of Modern Art, New York. It is one of the western worlds most famous paintings. The painting was made in 1889 and depicts the city of Saint-Remy under the swirling sun. It has been at the MoMA in New York since 1941. The painting was completed after Van Goghs famous 1888 mental breakdown, in which the artist had famously removed his own ear','9');

COMMIT;
