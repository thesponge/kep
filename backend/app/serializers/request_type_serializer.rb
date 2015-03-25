class RequestTypeSerializer < ActiveModel::Serializer
  attributes :id, :category #, :requests
  
  def requests
    object.requests.map do |request|
      RequestSerializer.new(request, scope: scope, root: false, job_type: object)
    end
  end

end
