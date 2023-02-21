import React from "react";
import { getValue } from "./getValue";
import { preventDefault } from "./preventDefault"
import { stopPropagation } from "./stopPropagation"

interface InputProps {
    onChange: (value: string) => void
    value: string
}

function InputChange({value, onChange}:InputProps) {
    return (
        <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
    )
}