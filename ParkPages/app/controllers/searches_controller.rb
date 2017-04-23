class SearchesController < ApplicationController
  def search
      query_string = params[:query]
      debugger
      @search_results = {}
      @search_results[:parks] = Park.whose_name_starts_with(query_string)

      render "api/searches/index"
    end
end
