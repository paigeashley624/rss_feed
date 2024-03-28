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

      @reviews = parsed_data['feed']['entry'].map do |entry|

        date_and_time = entry['updated']['label']
        formatted_date_and_time =  DateTime.parse(date_and_time).strftime('%m-%d-%Y %H:%M')

        {
          author: entry['author']['name']['label'],
          score: entry['im:rating']['label'].to_i,
          content: entry['content']['label'],
          submitted_at: formatted_date_and_time
        }
      end
    else
      @error = "Failed to fetch data"
    end
  end
end
