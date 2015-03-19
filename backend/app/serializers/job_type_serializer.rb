class JobTypeSerializer < ActiveModel::Serializer
  attributes :id, :category #, :jobs
  
  def jobs
    object.jobs.map do |job|
      JobSerializer.new(job, scope: scope, root: false, job_type: object)
    end
  end

end
