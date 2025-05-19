import React, { isValidElement } from "react"
import { Fragment } from "react"

const Each = ({ data, render }) => (data.map((item, key) => {
    const rendered = render(item, key)
    if (isValidElement(rendered)) {
        return React.cloneElement(rendered, { key })
    }
    return <Fragment key={key}>{rendered}</Fragment>
}))
export default Each