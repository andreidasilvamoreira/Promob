create type user_role as ENUM (
'ADMIN',
'USER'
);

create table users (
	id SERIAL primary key,
	username varchar unique not null,
	email varchar unique not null,
	password_hash varchar not null,
	role user_role not null,
	created_at timestamp not null default now(),
	updated_at timestamp not null default now()
);

create table clients (
	id SERIAL primary key,
	name varchar not null,
	phone varchar,
	email varchar,
	notes text,
	user_id integer not null,
	created_at timestamp not null default now(),
	updated_at timestamp not null default now(),
	
	constraint fk_clients_user
	foreign key(user_id)
	references users(id)
	on delete cascade 
);

create table materials (
	id SERIAL primary key,
	name varchar not null,
	type varchar not null,
	unit varchar not null,
	price numeric(10,2) not null check(price >= 0),
	user_id integer not null,
	created_at timestamp not null default now(),
	updated_at timestamp not null default now(),
	
	constraint fk_materials_user
	foreign key(user_id)
	references users(id)
	on delete cascade
);

create table products (
	id SERIAL primary key,
	name varchar not null,
	category varchar,
	description text,
	user_id integer not null,
	created_at timestamp not null default now(),
	updated_at timestamp not null default now(),
	
	constraint fk_products_user
	foreign key(user_id)
	references users(id)
	on delete cascade
);

create table product_parts (
	id SERIAL primary key,
	product_id integer not null,
	material_id integer not null,
	name varchar not null,
	quantity integer not null check(quantity > 0),
	width_mm integer not null check(width_mm > 0),
	height_mm integer not null check(height_mm > 0),
	edge_band boolean default false not null,
	created_at timestamp not null default now(),
	updated_at timestamp not null default now(),
	
	constraint fk_product_parts_product
	foreign key(product_id)
	references products(id)
	on delete cascade,
	
	constraint fk_product_parts_material
	foreign key(material_id)
	references materials(id)
	on delete restrict
);

create table projects (
	id SERIAL primary key,
	name varchar not null,
	user_id integer not null,
	client_id integer not null,
	description text,
	created_at timestamp not null default now(),
	updated_at timestamp not null default now(),
	
	constraint fk_projects_user
	foreign key(user_id)
	references users(id)
	on delete cascade,
	
	constraint fk_projects_client
	foreign key(client_id)
	references clients(id)
	on delete restrict
);

create table project_items (
	id SERIAL primary key,
	project_id integer not null,
	product_id integer not null,
	quantity integer not null check(quantity > 0),
	width_mm integer not null check(width_mm > 0),
	height_mm integer not null check(height_mm > 0),
	depth_mm integer not null check(depth_mm > 0),
	created_at timestamp not null default now(),
	updated_at timestamp not null default now(),
	
	constraint fk_project_items_project
	foreign key(project_id)
	references projects(id)
	on delete cascade,
	
	constraint fk_project_items_product
	foreign key(product_id)
	references products(id)
	on delete restrict
);

create table estimates (
	id SERIAL primary key,
	project_id integer not null,
	version integer not null check (version > 0),
	total_material_cost numeric(10,2) not null check(total_material_cost >= 0),
	margin_percent numeric(5,2) not null check(margin_percent >= 0),
	total_price numeric(10,2) not null check(total_price >= 0),
	created_at timestamp not null default now(),
	updated_at timestamp not null default now(),
	
	constraint uq_estimates_project_version unique(project_id, version),
	
	constraint fk_estimates_project
	foreign key(project_id)
	references projects(id)
	on delete cascade
);

create table estimate_items (
	id SERIAL primary key,
	description text,
	estimate_id integer not null,
	project_item_id integer not null,
	material_cost numeric(10,2) not null check(material_cost >= 0),
	labor_cost numeric(10,2) not null check(labor_cost >= 0),
	total_cost numeric(10,2) not null check(total_cost >= 0),
	created_at timestamp not null default now(),
	updated_at timestamp not null default now(),
	
	constraint fk_estimate_items_estimate
	foreign key(estimate_id)
	references estimates(id)
	on delete cascade,
	
	constraint fk_estimate_items_project_item
	foreign key(project_item_id)
	references project_items(id)
	on delete restrict
);

























