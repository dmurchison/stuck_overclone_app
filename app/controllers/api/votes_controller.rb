class Api::VotesController < ApplicationController
  
  before_action :require_logged_in

  def vote
    @votable = new_vote.votable

    vote_type = params[:vote_type]
    voter_id = current_user.id
    votable_id = params[:votable_id]
    new_vote = Vote.new(voter_id: voter_id, votable_id: votable_id, vote_type: vote_type, votable_type: votable_type)

    if voter_id == @votable.author.id
      render json: ["Nice Try! Cannot vote on own posts"]
      return
    end

    existing_vote = Vote.find_by(voter_id: voter_id, votable_id: votable_id, votable_type: votable_type)

    if existing_vote.nil?
      new_vote.save!
      @votable.addVote(new_vote)
    else
      if !(new_vote.vote_type == existing_vote.vote_type)
        new_vote.save!
        @votable.addVote(new_vote)
      end
      existing_vote.destroy
      @votable.undoVote(existing_vote)
    end

    render :vote
  end

end
