import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity('coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable() //owner-side
  @ManyToMany(
    (type) => Flavor,
    (flavor) => flavor.coffees, // what is "coffee" within the Flavor Entity
    {
      cascade: true,
    },
  )
  flavors: Flavor[];
}
