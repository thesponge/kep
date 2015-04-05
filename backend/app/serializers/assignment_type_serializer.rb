class AssignmentTypeSerializer < ActiveModel::Serializer
  attributes :id, :category, :option, :icon #, :assignments
  
  def assignments
    object.assignments.map do |assignment|
      AssignmentSerializer.new(assignment, scope: scope, root: false, assignment_type: object)
    end
  end

end
