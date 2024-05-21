export type Results = {
    sphereR: string;
    cylinderR: string;
    axisR: string;
};

export type Values = {
    sphereI: string;
    cylinderI: string;
    axisI: string;
}

export type Errors = {
    sphereI: boolean;
    cylinderI: boolean;
    axisI: boolean;
}

export type Validations = {
    number: (value: string) => boolean;
    empty: (value: string) => boolean;
    format: (value: string) => boolean;
    sign: (value: string) => boolean;
    step: (value: string, step: number) => boolean;
    min: (value: string, min: number) => boolean;
    max: (value: string, max: number) => boolean;
}

type InputNumber = {
    id: string;
    label: string;
    min: number;
    max: number;
    unit: string;
    step: number;
    sign: boolean;
    initialValue: string;
}

export type InputsNumber = Array<InputNumber>

type ResultNumber = {
    id: string;
    label: string;
    unit: string;
    initialValue: string;
    disabled: boolean;
}

export type ResultsNumber = Array<ResultNumber>

export type FCInputNumber = {
    id: string;
    label: string;
    min?: number;
    max?: number;
    unit: string;
    step?: number,
    sign?: boolean,
    value: string,
    setValues?: Function,
    error?: boolean,
    setErrors?: Function,
    disabled?: boolean
}
