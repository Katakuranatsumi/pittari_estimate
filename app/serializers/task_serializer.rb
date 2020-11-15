class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :detail, :created_at
end
