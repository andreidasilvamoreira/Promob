INSERT INTO users (username, email, password_hash, role)
VALUES
  ('admin', 'admin@promob.com', 'hashed_admin_password', 'ADMIN'),
  ('andrei', 'andrei@promob.com', 'hashed_andrei_password', 'USER'),
  ('maria', 'maria@promob.com', 'hashed_maria_password', 'USER');

INSERT INTO clients (name, phone, email, notes, user_id)
VALUES
  ('João Silva', '11988887777', 'joao@email.com', 'Cliente residencial', 2),
  ('Empresa XPTO', '1133332222', 'contato@xpto.com', 'Cliente corporativo', 2),
  ('Carlos Pereira', '11955554444', 'carlos@email.com', 'Prefere atendimento por WhatsApp', 3),
  ('Oficina Central', '1144441111', 'oficina@email.com', 'Projeto recorrente', 3);

INSERT INTO materials (name, type, unit, price, user_id)
VALUES
  ('MDF Branco 15mm', 'BOARD', 'sheet', 220.00, 2),
  ('MDF Carvalho 18mm', 'BOARD', 'sheet', 310.00, 2),
  ('Fita de Borda Branca', 'EDGE_BAND', 'meter', 2.50, 2),
  ('Parafuso 4x40', 'HARDWARE', 'unit', 0.35, 2),
  ('Corrediça Telescópica 40cm', 'HARDWARE', 'pair', 28.00, 2),
  ('Puxador Alumínio 128mm', 'ACCESSORY', 'unit', 18.00, 2),

  ('MDF Preto 15mm', 'BOARD', 'sheet', 240.00, 3),
  ('Fita de Borda Preta', 'EDGE_BAND', 'meter', 2.80, 3),
  ('Dobradiça Caneco 35mm', 'HARDWARE', 'unit', 12.00, 3),
  ('Pé Nivelador', 'ACCESSORY', 'unit', 7.50, 3);

INSERT INTO products (name, category, description, user_id)
VALUES
  ('Armário Aéreo 2 Portas', 'AEREO', 'Armário aéreo com duas portas', 2),
  ('Balcão 3 Gavetas', 'BALCAO', 'Balcão inferior com três gavetas', 2),
  ('Guarda-Roupa Casal', 'ROUPEIRO', 'Guarda-roupa de casal com portas de abrir', 3),
  ('Painel de TV', 'PAINEL', 'Painel de TV para sala', 3);


INSERT INTO product_parts (
  product_id,
  material_id,
  name,
  quantity,
  width_mm,
  height_mm,
  edge_band
)
VALUES
  (1, 1, 'Lateral esquerda', 1, 300, 700, true),
  (1, 1, 'Lateral direita', 1, 300, 700, true),
  (1, 1, 'Base', 1, 800, 300, true),
  (1, 1, 'Tampo', 1, 800, 300, true),
  (1, 1, 'Prateleira interna', 1, 770, 280, true),
  (1, 1, 'Porta esquerda', 1, 397, 690, true),
  (1, 1, 'Porta direita', 1, 397, 690, true),

  (2, 2, 'Lateral esquerda', 1, 500, 720, true),
  (2, 2, 'Lateral direita', 1, 500, 720, true),
  (2, 2, 'Base', 1, 900, 500, true),
  (2, 2, 'Tampo', 1, 900, 500, true),
  (2, 2, 'Frente gaveta pequena', 2, 430, 180, true),
  (2, 2, 'Frente gaveta grande', 1, 430, 260, true),

  (3, 7, 'Lateral esquerda', 1, 550, 2300, true),
  (3, 7, 'Lateral direita', 1, 550, 2300, true),
  (3, 7, 'Base', 1, 1800, 550, true),
  (3, 7, 'Tampo', 1, 1800, 550, true),
  (3, 7, 'Divisória central', 1, 550, 2200, true),
  (3, 7, 'Porta esquerda', 1, 600, 2200, true),
  (3, 7, 'Porta direita', 1, 600, 2200, true),

  (4, 7, 'Painel principal', 1, 1600, 1200, true),
  (4, 7, 'Prateleira inferior', 1, 1200, 250, true);


INSERT INTO projects (name, user_id, client_id, description)
VALUES
  ('Cozinha João Silva', 2, 1, 'Projeto de cozinha compacta'),
  ('Escritório XPTO', 2, 2, 'Mobiliário planejado do escritório'),
  ('Quarto Casal Carlos', 3, 3, 'Guarda-roupa e painel de TV'),
  ('Recepção Oficina Central', 3, 4, 'Móvel de recepção e painel');


INSERT INTO project_items (
  project_id,
  product_id,
  quantity,
  width_mm,
  height_mm,
  depth_mm
)
VALUES
  (1, 1, 2, 800, 700, 300),
  (1, 2, 1, 900, 720, 500),

  (2, 1, 4, 800, 700, 300),
  (2, 2, 2, 900, 720, 500),

  (3, 3, 1, 1800, 2300, 550),
  (3, 4, 1, 1600, 1200, 250),

  (4, 2, 1, 1200, 900, 550),
  (4, 4, 1, 1800, 1300, 250);

INSERT INTO estimates (
  project_id,
  version,
  total_material_cost,
  margin_percent,
  total_price
)
VALUES
  (1, 1, 1800.00, 30.00, 2340.00),
  (1, 2, 1900.00, 35.00, 2565.00),
  (2, 1, 4200.00, 25.00, 5250.00),
  (3, 1, 3800.00, 40.00, 5320.00),
  (4, 1, 2100.00, 20.00, 2520.00);


INSERT INTO estimate_items (
  description,
  estimate_id,
  project_item_id,
  material_cost,
  labor_cost,
  total_cost
)
VALUES
  ('2x Armário aéreo da cozinha', 1, 1, 700.00, 250.00, 950.00),
  ('1x Balcão da cozinha', 1, 2, 1100.00, 350.00, 1450.00),

  ('2x Armário aéreo da cozinha - revisão', 2, 1, 760.00, 300.00, 1060.00),
  ('1x Balcão da cozinha - revisão', 2, 2, 1140.00, 365.00, 1505.00),

  ('4x Armário aéreo do escritório', 3, 3, 1800.00, 700.00, 2500.00),
  ('2x Balcão do escritório', 3, 4, 2400.00, 350.00, 2750.00),

  ('1x Guarda-roupa casal', 4, 5, 2600.00, 900.00, 3500.00),
  ('1x Painel de TV', 4, 6, 1200.00, 620.00, 1820.00),

  ('1x Balcão recepção', 5, 7, 1300.00, 400.00, 1700.00),
  ('1x Painel recepção', 5, 8, 800.00, 220.00, 1020.00);