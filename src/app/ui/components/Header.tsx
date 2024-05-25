import {FC} from "react";
import Image from 'next/image';

const imgClassName: string = `
    lg:w-[60px] lg:h-[60px]
`

const headerClassName: string = `
    p-[10px] flex items-center justify-center w-screen
`

const h1ClassName: string = `
    font-bold uppercase px-[6px]
    lg:text-[30px] lg:px-[12px]
`

const Header: FC = () => {
    return (
        <div className={headerClassName}>
            <Image
                src="/orthocylindre.png"
                width={35}
                height={35}
                className={imgClassName}
                alt="logo orthocylindre"
            />

            <h1 className={h1ClassName}>Orthocylindre</h1>
        </div>
    );
}

export default Header
