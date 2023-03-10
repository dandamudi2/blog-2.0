import Image from "next/image";
const Logo = (props:any) => {

    const { renderDefault, title } = props;
  return (
    <div>
      <Image 
        className='rounded-full object-cover' 
        width ={50}
        height={50}
        src="https://links.papareact.com/1m8"
        alt="logo"
        />
    <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
