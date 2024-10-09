import { useEffect, useState } from "react"

const ImageComponent = ({ src, width, height, className }) => {
  const [currntSrc, setCurrntSrc] = useState(`
    https://placehold.co/${width}x${height}?text=Loading`
  )


  useEffect(() => {
    const img = new Image();
    if (src) {
      img.src = src
      img.onload = () => {
        setCurrntSrc(src)
      };
      return;
    }

    setCurrntSrc(` https://placehold.co/${width}x${height}?text=No Image`, ) 


    return () => {
      img.onload = null;
    }
  }, [src, width, height])

  return (
    <img
      className={currntSrc === src || !src ? className : `${className} blur-md`}
      src={currntSrc}
      width={width}
      height={height}
    />
  )
}
export default ImageComponent