'use client'
import {FC, useEffect, useState} from "react";
import _ from 'lodash';
import Image from 'next/image';

//import styles
import styles from "@/app/ui/styles/cylinderForm.module.scss"

//import components
import InputNumber from "@/app/ui/components/InputNumber";

//import lib
import {inputsNumber, resultsNumber} from "@/app/lib/constants";
import {getResults} from "@/app/lib/inputNumber";

//import types
import {Errors, Results, Values} from "@/app/lib/definition";
import * as CONSTANTS from "constants";

const containerClassName: string = `
    mx-auto lg:w-1/2 flex-col p-[10px]
    h-screen container
    flex items-center justify-center
`

const cardTopClassName: string = `
    rounded-t-[8px] rounded-b-[2px] px-[8px] py-[12px] mb-[4px]
    flex flex-col ${styles.card}
`

const cardBottomClassName: string = `
    rounded-t-[2px] rounded-b-[8px] px-[8px] py-[12px]
    flex flex-col ${styles.card}
`

const pCN: string = `
    font-bold
    text-[14px] mb-[16px] px-[4px]
`

const rowClassName: string = `
    flex flex-nowrap md:flex-row
`

const CylinderForm: FC = () => {
    const [values, setValues] = useState<Values>(_.reduce(inputsNumber, (acc, {id, initialValue = ""}) => {
        acc[id as keyof Values] = initialValue
        return acc
    }, {} as Values))

    const [results, setResults] = useState<Results>(_.reduce(resultsNumber, (acc, {id, initialValue = ""}) => {
        acc[id as keyof Results] = initialValue
        return acc
    }, {} as Results))

    const [errors, setErrors] = useState<Errors>(_.reduce(inputsNumber, (acc, {id}) => {
        acc[id as keyof Errors] = false
        return acc
    }, {} as Errors))

    const isError = (errors : Errors): boolean => !_.isEmpty(_.filter(errors, error => error))

    useEffect(() => {
        const error: boolean = isError(errors)
        if (!error) setResults(getResults(values))
    }, [values, errors])

    return (
        <div className={containerClassName}>
            <form method="POST" className={cardTopClassName}>
                <p className={pCN}>Transposons... </p>
                <div className={rowClassName}>
                    {inputsNumber.map((input, index) => {
                        const {id} = input
                        return <InputNumber
                            key={index}
                            value={values[id as keyof Values]}
                            setValues={setValues}
                            error={errors[id as keyof Errors]}
                            setErrors={setErrors}
                            {...input}
                        />
                    })}
                </div>
            </form>

            <Image
                src="/arrow.svg"
                width={20}
                height={20}
                className="absolute z-10 mt-[4px]"
                alt="arrow icon"
            />

            <div className={cardBottomClassName}>
                <p className={pCN}>Résultat : </p>
                <div className={rowClassName}>
                    {resultsNumber.map((result, index) => {
                        const {id} = result
                        return <InputNumber key={index} value={results[id as keyof Results]} {...result}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default CylinderForm
