CREATE INDEX IF NOT EXISTS idx_clients_user_id
ON clients(user_id);

CREATE INDEX IF NOT EXISTS idx_materials_user_id
ON materials(user_id);

CREATE INDEX IF NOT EXISTS idx_products_user_id
ON products(user_id);

CREATE INDEX IF NOT EXISTS idx_product_parts_product_id
ON product_parts(product_id);

CREATE INDEX IF NOT EXISTS idx_product_parts_material_id
ON product_parts(material_id);

CREATE INDEX IF NOT EXISTS idx_projects_user_id
ON projects(user_id);

CREATE INDEX IF NOT EXISTS idx_projects_client_id
ON projects(client_id);

CREATE INDEX IF NOT EXISTS idx_project_items_project_id
ON project_items(project_id);

CREATE INDEX IF NOT EXISTS idx_project_items_product_id
ON project_items(product_id);

CREATE INDEX IF NOT EXISTS idx_estimates_project_id
ON estimates(project_id);

CREATE INDEX IF NOT EXISTS idx_estimate_items_estimate_id
ON estimate_items(estimate_id);

CREATE INDEX IF NOT EXISTS idx_estimate_items_project_item_id
ON estimate_items(project_item_id);