import ImageComponent from "@/components/Image"
import { GENDER_MAPPING } from "@/components/libs/constants";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList"
import { useLoaderData } from "react-router-dom"



const PeoplePage = () => {
  const peopleInfor = useLoaderData();


  return (
    <div className="bg-black text-white text-[1.2vw]">
      <div className="container">
        <div className="flex-1">
          <ImageComponent
            src={ peopleInfor && `https://image.tmdb.org/t/p/w600_and_h900_bestv2${peopleInfor.profile_path}`}
            width={600}
            height={900}
            className="mb-6"
          />
          <p className="font-bold text-[1.3vw] mb-6">Personal Info</p>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Know For</p>
              <p>{peopleInfor.know_for_department}</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>{GENDER_MAPPING[peopleInfor.gender]}</p>
            </div>
            <div>
              <p className="font-bold">Place of Birth</p>
              <p>{peopleInfor.place_of_birth}</p>
            </div>
            <div>
              <p className="font-bold">Birthday</p>
              <p>{peopleInfor.birthday}</p>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="font-bold text-[2vw] mb-6">{peopleInfor.name}</p>
          <div className="mb-6">
            <p className="font-bold text-[1.4vw] mb-4">Biography</p>
            <p className="whitespace-pre-line">{peopleInfor.biography}</p>
          </div>
          <RelatedMediaList  
            mediaList={(peopleInfor.combined_credits?.cast) || []}
            title="Known for"
          />
        </div>
      </div>
    </div>

  )
}
export default PeoplePage