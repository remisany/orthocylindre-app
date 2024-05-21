import React, {FC} from 'react';
import { roboto } from '@/app/ui/fonts';
import styles from "@/app/ui/styles/page.module.scss";

//import components
import Header from "@/app/ui/components/Header";
import CylinderForm from "@/app/ui/components/CylinderForm";
import Footer from "@/app/ui/components/Footer";

const mainClassName = `
    flex flex-col py-[10px] h-svh justify-between
    ${styles.container}
    ${roboto.className}
`

const Home: FC = () => {
    return (
      <main className={mainClassName}>
        <Header/>
        <CylinderForm/>
        <Footer/>
      </main>
  );
}

export default Home
