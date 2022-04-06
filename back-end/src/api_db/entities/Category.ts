import { Device } from './Device';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";
@Entity()
export class Category {
	@PrimaryGeneratedColumn('increment')
    id?: number

	@Column({
		type: "varchar",
		length: 140,
		nullable: false,
	})
	name?: string;

	@OneToMany(
		() => Device,
		device => device.category,
		{ 
			nullable: true,
			cascade: true,
		},
	)
	devices?: Device[];
}
