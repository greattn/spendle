class WebhookLog < ApplicationRecord
  enum status: { received: 'received', processed: 'processed', failed: 'failed' }, _default: 'received'

  validates :payload, presence: true
  validates :status, presence: true
end
