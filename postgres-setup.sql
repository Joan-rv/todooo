create table users (id serial primary key, username text not null, password text not null, created_at timestamp default now());
create table todos (id serial primary key, title text not null, finished boolean default false, created_at timestamp default now(),user_id integer references users(id) on delete cascade);
