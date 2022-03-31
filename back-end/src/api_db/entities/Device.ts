import { Category } from './Category';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Device {
	@PrimaryGeneratedColumn('increment')
    id: number

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

	@OneToMany(
        () => Category,
        category => category.id,
    )
    category: Category[];
}