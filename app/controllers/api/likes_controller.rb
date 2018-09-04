class Api::LikesController < ApplicationController
  def create
    @photo = Photo.find(params[:photo_id])
    @like = current_user.likes.create(photo_id: @photo.id)

    if @like.save
      render 'api/photos/show'
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = current_user.likes.find_by(photo_id: params[:id])
    puts "hhhhhhhhhhhhhhhhhh"
    puts current_user.likes.find_by(photo_id: params[:id])
    @photo = Photo.find(@like.photo_id)
    puts @photo
    if @like.destroy!
      render 'api/photos/show'
    else
     render json: @like.errors.full_messages
    end
  end

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
