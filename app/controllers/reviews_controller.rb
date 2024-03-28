require 'json'
require 'net/http'
require 'date'

class ReviewsController < ApplicationController
  def fetch
    rss_url = 'https://itunes.apple.com/us/rss/customerreviews/id=525463029/sortBy=mostRecent/page=1/json'

    uri = URI(rss_url)
    response = Net::HTTP.get_response(uri)

    if response.code == '200'
      rss_data = response.body

      parsed_data = JSON.parse(rss_data)

      parsed_data['feed']['entry'].each do |entry|
        date_and_time = entry['updated']['label']
        submitted_at = DateTime.parse(date_and_time)

        hours_difference = ((DateTime.now - submitted_at) * 24).to_i

        next if hours_difference > 48

        review_attributes = {
          entry_id: entry['id']['label'],
          author: entry['author']['name']['label'],
          score: entry['im:rating']['label'].to_i,
          content: entry['content']['label'],
          submission_time: submitted_at
        }

        Review.find_or_create_by(review_attributes)
      end

      @reviews = Review.order(submission_time: :desc)
      # .limit(10)

    else
      @error = "Failed to fetch data"
      render json: { error: @error }, status: :unprocessable_entity
    end
  end


  def index
    fetch()
    @reviews = Review.all
    render  json: @reviews
  end

end
