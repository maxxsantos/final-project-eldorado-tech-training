import { Category } from './Category';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Device {
	@PrimaryGeneratedColumn('increment')
    id?: number

	@Column({
		type: "varchar",
		length: 16,
		nullable: false,
	})
	color: string;

	@Column({
		type: 'integer',
		nullable: false,
	})
	partNumber: number;

	@ManyToOne(
        () => Category,
        category => category.devices,
		{ onDelete: 'CASCADE' }
    )
	@JoinTable()
    category?: Category;
}