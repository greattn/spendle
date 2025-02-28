class CreateWebhookLogs < ActiveRecord::Migration[7.2]
  def change
    create_table :webhook_logs, id: :bigint do |t|
      t.text :payload, null: false
      t.string :status, null: false, default: 'received'
      t.datetime :received_at, null: false
      t.timestamps
    end
    add_index :webhook_logs, :received_at # Tối ưu truy vấn theo thời gian
  end
end
