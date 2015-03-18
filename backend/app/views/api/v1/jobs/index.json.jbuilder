json.jobs(@jobs) do |job|
  json.(job, :id, :title, :description)
  json.job_types_ids job.job_types.ids
end

json.job_types(@job_types) do |job_type|
  json.(job_type, :id, :category)
end

