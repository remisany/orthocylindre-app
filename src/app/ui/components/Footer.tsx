import {FC} from "react";
import Image from 'next/image';

//import styles
import styles from "@/app/ui/styles/footer.module.scss"

const footerClassName: string = `
    p-[10px] w-screen
`

const containerClassName: string = `
    flex items-center justify-center w-full rounded-[8px] py-[10px]
    ${styles.f_card}
`

const aClassName: string = `
    px-[6px] underline
    ${styles.f_link}
`

const Footer: FC = () => {
    return (
        <div className={footerClassName}>
            <div className={containerClassName}>
                <Image
                    src="/orthotrainement.png"
                    width={35}
                    height={35}
                    className="animate-wave"
                    alt="logo orthotrainement"
                />

                <a
                    href="https://orthotrainement.fr/"
                    target="_blank"
                    className={aClassName}
                >Découvrez ORTHOTRAÎNEMENT !
                </a>
            </div>
        </div>
    );
}

export default Footer
