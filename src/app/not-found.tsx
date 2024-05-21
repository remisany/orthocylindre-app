import {FC} from "react";
import Link from 'next/link'
import {roboto} from "@/app/ui/fonts";

//import styles
import styles from "@/app/ui/styles/notFound.module.scss"

//import component
import Header from "@/app/ui/components/Header";
import Footer from "@/app/ui/components/Footer";

const containerClassName: string = `
    h-screen container flex items-center justify-center flex-col p-[10px]
`

const cardTopClassName: string = `
    mx-auto w-full text-center lg:w-1/2
    rounded-t-[8px] rounded-b-[2px] px-[8px] py-[12px] mb-[4px]
    ${styles.nf_card}
`

const cardBottomClassName: string = `
    mx-auto w-full text-center lg:w-1/2
    rounded-t-[2px] rounded-b-[8px] px-[8px] py-[12px]
    ${styles.nf_card}
    ${styles.nf_card_bottom}
`

const mainClassName = `
    ${roboto.className}
`

const NotFound: FC = () => {
    return (
        <main className={mainClassName}>
            <Header/>

            <div className={containerClassName}>
                <div className={cardTopClassName}>Page inexistante...</div>
                <Link href="/" className={cardBottomClassName}>Retour</Link>
            </div>

            <Footer/>
        </main>
    );
}

export default NotFound
