class Api::CommentsController < ApplicationController
  def index
    # puts "id #{params[:photo_id]}"
    @photo = Photo.find(params[:photo_id])
    @comments = @photo.comments
    @comments.each do |comment|
      # puts comment.id
      # puts comment.photo_id
      # puts comment.user_id
      # puts comment.body
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.photo_id = params[:photo_id]

    if @comment.save
      render :show
    else
      render json: @comment, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @oldcommentid = params[:id]
    @comment.destroy
    render :destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
