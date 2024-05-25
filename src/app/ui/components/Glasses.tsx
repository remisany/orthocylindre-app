import {FC} from "react";

//import styles
import styles from "@/app/ui/styles/glasses.module.scss"

/*
/*const containerClassName: string = `
    absolute flex items-center w-full px-[5px]
    lg:w-1/2
`

const branchClassName: string = `
    w-[10px] h-[50px] self-start mt-[20px]
    ${styles.g_branch}
`

const branchLeftClassName: string = `
    ${branchClassName}
    rounded-l-[10px]
`

const branchRightClassName: string = `
    ${branchClassName}
    rounded-r-[10px]
`

const roundClassName: string = `
    border-[10px] h-[300px] grow-[3] rounded-[20px]
    ${styles.g_round}
`

const centerClassName: string = `
    border-t-[10px] h-[240px] grow-[1]
    ${styles.g_center}
`
* */

const containerClassName: string = `
    absolute flex items-center w-full px-[5px]
    lg:w-1/2
`;

const branchClassName: string = `
    w-[10px] h-[60px] mt-[30px] self-start
    ${styles.g_branch}
`;

const branchLeftClassName: string = `
    ${branchClassName} rounded-tl-[10px]
`;

const branchRightClassName: string = `
    ${branchClassName} rounded-tr-[10px]
`;

const frameClassName: string = `
    relative grow-[7] h-[300px] border-[10px] rounded-[30px] mx-[5px]
    ${styles.g_round}
`;

const centerClassName: string = `
    w-[20px] border-t-[10px] mt-[30px] self-start ${styles.g_round} grow-[1]
`;

const Glasses: FC = () => {
    return (
        <div className={containerClassName}>
            <div className={branchLeftClassName}></div>
            <div className={frameClassName}></div>
            <div className={centerClassName}></div>
            <div className={frameClassName}></div>
            <div className={branchRightClassName}></div>
        </div>
    );
}

export default Glasses
