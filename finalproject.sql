create database finalproject;

use finalproject;

create table users (
	id int not null auto_increment primary key,
    username varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null,
    _created datetime default current_timestamp
);

create table descriptions (
	id int not null auto_increment primary key,
    age int not null,
    gender varchar(50) not null,
    orientation varchar(100) not null,
    ethnicity varchar(50) not null,
    height varchar(50) not null,
    _created datetime default current_timestamp
);

create table locations (
	id int not null auto_increment primary key,
    city varchar(100) not null,
    state varchar(100) not null,
    _created datetime default current_timestamp
);

create table hobbies (
	id int not null auto_increment primary key,
    sports bool not null,
    foodie bool not null,
    running bool not null,
    travel bool not null,
    movies bool not null,
    reading bool not null,
    fashion bool not null,
    videogames bool not null,
    dancing bool not null,
    cycling bool not null,
    music bool not null,
    swimming bool not null,
    hiking bool not null,
    excercising bool not null,
    concerts bool not null,
    art bool not null,
    cooking bool not null,
    singing bool not null,
    baking bool not null,
    animals bool not null,
    camping bool not null,
    boardgames bool not null,
    crafts bool not null
);

create table sensorytags (
	id int not null auto_increment primary key,
    hypersight bool not null,
    hypersound bool not null,
    hypersmell bool not null,
    hypertaste bool not null,
    hypertouch bool not null,
    hyposight bool not null,
    hyposound bool not null,
    hyposmell bool not null,
    hypotaste bool not null,
    hypotouch bool not null,
    balance bool not null,
    bodyawareness bool not null
);

create table profileinfo (
	id int not null auto_increment primary key,
    userid int not null,
    firstname varchar(50) not null,
    bio varchar(2000) not null,
    spectrum varchar(200) not null,
    relationship varchar(50) not null,
    descriptionid int not null,
    locationid int not null,
    hobbiesid int not null,
    sensoryid int not null,
    _created datetime default current_timestamp,
    foreign key (userid) references users(id),
    foreign key (descriptionid) references descriptions(id),
    foreign key (locationid) references locations(id),
    foreign key (hobbiesid) references hobbies(id),
    foreign key (sensoryid) references sensorytags(id)
);

create table activities (
	id int not null auto_increment primary key,
    name varchar(50) not null,
    about varchar(2000) not null,
    address varchar(200) not null,
    link varchar(200) not null,
    picture varchar(300) not null,
    hours varchar(200) not null,
    cost int not null,
    _created datetime default current_timestamp
);

create table questions (
	id int not null auto_increment primary key,
    sentence varchar(200) not null
);

create table matches (
	firstuserid int not null,
    seconduserid int not null,
    primary key (firstuserid, seconduserid),
    foreign key (firstuserid) references users(id),
    foreign key (seconduserid) references users(id)
);

create table blocks (
	firstuserid int not null,
    seconduserid int not null,
    primary key (firstuserid, seconduserid),
    foreign key (firstuserid) references users(id),
    foreign key (seconduserid) references users(id)
);

CREATE USER
	'groupfour'@'localhost'
IDENTIFIED BY 'innovatebham';

GRANT ALL PRIVILEGES
ON finalproject.*
TO 'groupfour'@'localhost';

ALTER USER 'groupfour'@'localhost' IDENTIFIED WITH mysql_native_password BY 'innovatebham';