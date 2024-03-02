
function Images({className,alt,src}) {
  return (
   <img className={` ${className}`} src={src} alt={alt} />
  )
}

export default Images
