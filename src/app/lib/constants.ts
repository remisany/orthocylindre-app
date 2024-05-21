//import types
import {InputsNumber, ResultsNumber} from "@/app/lib/definition";

export const inputsNumber: InputsNumber = [
    {
        id: "sphereI",
        label: "sphère",
        min: -30,
        max: 30,
        unit: "δ",
        step: 0.25,
        sign: true,
        initialValue: "+0"
    },
    {
        id: "cylinderI",
        label: "cylindre",
        min: -10,
        max: 10,
        unit: "δ",
        step: 0.25,
        sign: true,
        initialValue: "+0"
    },
    {
        id: "axisI",
        label: "axe",
        min: 0,
        max: 180,
        unit: "°",
        step: 5,
        sign: false,
        initialValue: "0"
    }
]

export const resultsNumber: ResultsNumber = [
    {id: "sphereR", label: "sphère", unit: "δ", initialValue: "+0", disabled: true},
    {id: "cylinderR", label: "cylindre", unit: "δ", initialValue: "-0", disabled: true},
    {id: "axisR", label: "axe", unit: "°", initialValue: "90", disabled: true}
]
