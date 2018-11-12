class Api::PhotosController < ApplicationController
  def index
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = ENV['UPLOAD_PRESET']
    @photos = Photo.all
  end

  def new
    @photo = Photo.new
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render :show
    else
      # render1 json: @photo, status: :unprocessable_entity
      render json: @photo.errors.full_messages
    end
  end

  def edit
    @photo = Photo.find(params[:id]) if current_user
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update_attributes(photo_params)
      redirect_to api_photo_url(@photo)
    else
      flash.now[:errors] = @photo.errors.full_messages
      render :edit
    end
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.destroy
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :caption)
  end
end
