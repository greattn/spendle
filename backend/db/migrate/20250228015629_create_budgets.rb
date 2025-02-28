class CreateBudgets < ActiveRecord::Migration[7.2]
  def change
    create_table :budgets, id: :bigint do |t|
      t.references :user, null: false, foreign_key: { on_delete: :cascade }
      t.references :category, null: false, foreign_key: { on_delete: :cascade }
      t.decimal :amount, precision: 15, scale: 2, null: false
      t.string :period, null: false, default: 'monthly' # daily, weekly, monthly
      t.timestamps
    end
    add_index :budgets, [:user_id, :category_id], unique: true
  end
end
