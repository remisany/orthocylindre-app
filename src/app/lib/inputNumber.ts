import _ from 'lodash';

//import types
import {Results, Validations, Values} from "@/app/lib/definition";

export const convert = (value: string): number => parseFloat(value.replace(",", '.'))

const number = (value: string): boolean => {
    const newValue: number = convert(value)
    return isNaN(newValue)
}

const empty = (value: string): boolean => value === ""

const format = (value : string): boolean => /^[+-]?\d+(?:[.,]\d+)?$/.test(value)

const sign = (value: string): boolean => /^[-+]/.test(value)

const step = (value: string, step: number): boolean => {
    const newValue: number = convert(value)
    const result: number = newValue % step
    return result === 0
}

const min = (value: string, min: number): boolean => {
    const newValue: number = convert(value)
    return min <= newValue
}

const max = (value: string, max: number): boolean => {
    const newValue: number = convert(value)
    return newValue <= max
}

export const validations: Validations = {
    number: number,
    empty: empty,
    format: format,
    sign: sign,
    step: step,
    min: min,
    max: max
}

const getSphere = (sphere: number, cylinder: number): string => {
    const newSphere: number = sphere + cylinder
    return newSphere >= 0 ? `+${newSphere}` : `-${newSphere}`
}

const getCylinder = (cylinder: number): string => {
    const newCylinder: string = _.toString(cylinder).replace(/[+-]/g, "")
    return cylinder >= 0 ? `-${newCylinder}` : `+${newCylinder}`
}

const getAxis = (axis: number): string => {
    let newAxis: number = axis + 90
    newAxis = newAxis > 180 ? Math.abs(180 - newAxis) : newAxis
    return _.toString(newAxis)
}

export const getResults = (values: Values): Results => {
    const {sphereI, cylinderI, axisI} = values

    const sphere: number = convert(sphereI)
    const cylinder: number = convert(cylinderI)
    const axis: number = convert(axisI)

    const newSphere: string = getSphere(sphere, cylinder)
    const newCylinder: string = getCylinder(cylinder)
    const newAxis: string = getAxis(axis)

    return {
        sphereR: newSphere,
        cylinderR: newCylinder,
        axisR: newAxis
    }
}
