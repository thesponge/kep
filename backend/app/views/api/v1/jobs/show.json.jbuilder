json.(@job, :id, :title, :description)

json.job_types_ids @job_types.ids

json.job_compensations_ids @job_compensations.ids

json.job_priorities_ids @job_priorities.ids