import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";
@Entity()
export class Category {
	@PrimaryGeneratedColumn('increment')
    id: number

	@Column({
		type: "varchar",
		length: 140,
		nullable: false,
	})
	name: string;
}