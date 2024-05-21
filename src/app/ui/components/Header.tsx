import {FC} from "react";
import Image from 'next/image';

const headerClassName: string = `
    absolute p-[14px] flex items-center justify-center w-screen
`

const h1ClassName: string = `
    font-bold uppercase px-[6px]
`

const Header: FC = () => {
    return (
        <div className={headerClassName}>
            <Image
                src="/orthocylindre.png"
                width={35}
                height={35}
                alt="logo orthocylindre"
            />

            <h1 className={h1ClassName}>Orthocylindre</h1>
        </div>
    );
}

export default Header
