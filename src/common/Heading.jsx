
export default function Heading({className,text}) {
  return (
   <h2 className={`font-bold  text-3xl md:text-5xl font-inter ${className}`}>{text}</h2>
  )
}
