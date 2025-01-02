CREATE TABLE counts (
    id SERIAL PRIMARY KEY,             -- Otomatik artan birincil anahtar
    count INTEGER NOT NULL,            -- INTEGER tipi, boş bırakılamaz
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, -- Oluşturulma tarihi
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL  -- Güncellenme tarihi
);