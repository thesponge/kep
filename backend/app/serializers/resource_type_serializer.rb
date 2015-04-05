class ResourceTypeSerializer < ActiveModel::Serializer
  attributes :id, :category, :option, :icon #, :resources
  
  def resources
    object.resources.map do |resource|
      ResourceSerializer.new(resource, scope: scope, root: false, assignment_type: object)
    end
  end

end
