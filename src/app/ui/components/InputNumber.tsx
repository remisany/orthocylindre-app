import {ChangeEvent, FC, FocusEvent} from "react";
import clsx from "clsx";

//import styles
import styles from "@/app/ui/styles/inputNumber.module.scss"

//import lib
import {validations} from "@/app/lib/inputNumber"

//import types
import {Errors, FCInputNumber, Values} from "@/app/lib/definition";

const groupClassNameTailwind: string = `
    flex-auto md:w-1/3 mx-1 rounded-[4px] border-[2px]
    ${styles.in_group}
`

const labelClassName: string = `
    text-[12px] mt-[-10px] px-[4px] left-[6px]
    ${styles.in_group_label}
`

const inputClassName: string = `
    text-[16px] py-[8px] px-[6px] mx-[6px]
    ${styles.in_group_input}
`

const unitClassName: string = `
    text-[16px] my-[8px] pl-[6px] mx-[6px] border-l-[2px] my-[6px]
    ${styles.in_group_unit}
`

const InputNumber: FC<FCInputNumber> = ({id, label, min, max, unit, step, sign, value, setValues, error = false, setErrors, disabled}) => {
    const groupClassName: string = clsx(
        groupClassNameTailwind,
        {[styles.in_group_error]: error, [styles.in_group_disabled]: disabled}
    )

    const editValue = (value: string): void => setValues && setValues((prev: Values) => ({...prev, [id]: value}))

    const onBlur = (event: FocusEvent<HTMLInputElement>): void => {
        let value: string = event.target.value
        const empty: boolean = validations.empty(value)
        const sign: boolean = validations.sign(value)

        if (!empty && !error && !sign) editValue(`+${value}`)
    }

    const errorFalse = (): void => setErrors && setErrors((prev: Errors) => ({...prev, [id]: false}))
    const errorTrue = (): void => setErrors && setErrors((prev: Errors) => ({...prev, [id]: true}))

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value
        const number: boolean = validations.number(value)

        if (!number) {
            const format: boolean = validations.format(value)
            const stepValue: boolean = step ? validations.step(value, step) : true
            const minValue: boolean = min ? validations.min(value, min) : true
            const maxValue: boolean = max ? validations.max(value, max) : true

            format && stepValue && minValue && maxValue ? errorFalse() : errorTrue()
        } else {
            errorTrue()
        }

        editValue(value)
    }

    return (
        <div className={groupClassName}>
            <label className={labelClassName} htmlFor={id}>{label}</label>

            <input
                className={inputClassName}
                type="text"
                id={id}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
                onBlur={sign ? onBlur : undefined}
                value={value}
                disabled={disabled}
            />

            <div className={unitClassName}>{unit}</div>
        </div>
    );
}

export default InputNumber
