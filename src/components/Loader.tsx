import { ClipLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader
        color="grey"
        loading={true}
        size={50}
        aria-label="Loading Spinner"
      />
    </div>
  )
}

export default Loader
