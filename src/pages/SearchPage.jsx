import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import SearchForm from "@/components/SearchForm/SearchForm"
import useFetch from "@/hooks/useFetch"
import { useState } from "react";

const SearchPage = () => {
  const [searchFormValue, setSearchFormValue] = useState({
    mediaType: 'movie',
    genres: [],
    rating: 'All'
  })
  // chuyển string -> array
  const [minRating, maxRating] =
    searchFormValue.rating === 'All' 
        ? [0, 100] 
        : searchFormValue.rating.split(' - ')

  const { data } = useFetch({
    url: `/discover/${searchFormValue.mediaType}?with_genres=${searchFormValue.genres.join(' ,')}&vote_average.gte=${minRating / 10}&vote_average.lte${maxRating / 10}`
  })

  console.log({ data })
  return (
    <div className="container flex-col">
      <p>Search</p>
      <div className="flex">
        <div className="flex-1">
          Search Form
          <SearchForm setSearchFormValue={setSearchFormValue} />
        </div>
        <div className="flex-[3]">
          <RelatedMediaList mediaList={(data.results || [])} />
        </div>
      </div>
    </div>
  )
}
export default SearchPage