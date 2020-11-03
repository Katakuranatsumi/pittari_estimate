class TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def create
    task = Task.new(task_params)

    if task.save
      render json: task, status: :created
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    task = Task.find(params[:id])

    if task.destroy
      render status: :ok
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  def update
  end

  private

  def task_params
    params.require(:task).permit(:title, :detail)
  end
end
