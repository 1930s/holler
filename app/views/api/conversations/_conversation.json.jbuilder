json.set! conversation.id do
  json.id conversation.id
  json.chat_name conversation.chat_name
  json.image_url asset_path(conversation.image.url)
  json.users_id conversation.users.pluck(:id)
  json.message_ids conversation.messages.pluck(:id)
end
