module Api
  module V1
    class JobsController < ApplicationController

      def index
        @jobs = Job.all
        @job_types= JobType.all
      end

      def show 
        @job = Job.find(params[:id])  
        @job_types = @job.job_types
        @job_compensations = @job.job_compensations
        @job_priorities = @job.job_priorities
      end
      
      def create
        respond_with :api, :v1, Job.create(job_params)
      end

      def update
        respond_with job.update(job_params)
      end

      def destroy
        respond_with job.destroy
      end  

      private

      def job
        Job.find(params[:id])  
      end

      def job_params
        params.require(:job).permit(:title , :description)
      end

    end
  end
end