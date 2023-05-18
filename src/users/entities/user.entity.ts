
import internal from 'stream';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Users {
    @PrimaryGeneratedColumn("uuid")
    user_index: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    name: string;
  
    @Column()
    walletid: internal;

    @Column()
    kod: internal;
  }