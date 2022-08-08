class Api::VotesController < ApplicationController
  
  before_action :require_logged_in, only: [:vote]

  def vote
    vote_type = params[:vote_type]
    voter_id = current_user.id
    votable_id = params[:votable_id]
    new_vote = Vote.new(voter_id: voter_id, votable_id: votable_id, vote_type: vote_type, votable_type: votable_type)
    @votable = new_vote.votable

    if voter_id == @votable.author.id
      render json: ["Nice Try! Cannot vote on own posts"]
      return
    end

    existing_vote = Vote.find_by(voter_id: voter_id, votable_id: votable_id, )

  end


end