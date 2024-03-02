
export default function Images({src,alt,className}) {
  return (
    <img src={src} alt={alt} className={`w-full h-full ${className}`} />
  )
}
