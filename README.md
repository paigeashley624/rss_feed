# RSS Review Fetcher

RSS Review Fetcher is a Ruby on Rails application that fetches reviews from an iTunes App Store RSS feed and stores them in a local SQLite database. It provides endpoints to fetch and display the reviews on a React front end. The React front end is in the 'rss_feed_frontend' folder.  

## Features

- Fetches reviews from an iTunes App Store RSS feed.
- Stores reviews in SQLite database.
- Provides an endpoint to fetch and display the latest reviews.
- Automatically updates reviews every time the index endpoint is accessed.

## Prerequisites

- Ruby 3.1.2
- Rails 7.0.7
- SQLite3
- Bundler

## Installation

1. Clone the repository
2. Run 'bundle install'
3. Run 'db:migrate' 
4. Start Rails Server 'rails server' 
5. Run React Server 'npm run dev'  

## End Points
- Get reviews: `http://localhost:3000/reviews/fetch` (Fetches reviews from the iTunes App Store RSS feed and stores them in the database.)
- View latest reviews: `http://localhost:3000/reviews/index`(Displays reviews from the last 48 hours stored in the database.
)
