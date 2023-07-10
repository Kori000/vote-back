import {
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  VersionColumn,
  Index,
} from 'typeorm'

export abstract class Common {
  // 主键id
  @Index('idx_id', { unique: true })
  @PrimaryGeneratedColumn()
  id: number

  // 创建时间
  @CreateDateColumn()
  create_time: Date

  // 更新时间
  @UpdateDateColumn()
  update_time: Date

  // 软删除
  @Column({
    default: false,
    select: false,
  })
  is_delete: boolean

  // 更新次数
  @VersionColumn({
    select: false,
  })
  version: number
}
