class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end
  def new
    @cocktail = Cocktail.find(params[:cocktail_id])
    @review = Review.new
  end

  def create
    strong_params = params.require(:review).permit(:content, :rating)
    @cocktail = Cocktail.find(params[:cocktail_id])
    @review = Review.new(strong_params)
    @review.cocktail = @cocktail

    if @review.save
      redirect_to cocktail_path(@cocktail)
    else
      render :new
    end
  end
end
