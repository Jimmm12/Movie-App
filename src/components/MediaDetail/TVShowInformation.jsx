
const TVShowInformantion = ({ TvInfo = {} }) => {
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{TvInfo.origin_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {
          (TvInfo.origin_country || []).map(countryCode =>
            <img
              key={countryCode.id} src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              className="w-[1.4vw] mt-1 mr-1"
            />)
        }
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{TvInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        {
          (TvInfo.networks || []).map((network) => (
            <img
              className="invert" 
              key={TvInfo.id} 
              src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`} />
          ))
        }
      </div>
    </div>
  )
}
export default TVShowInformantion