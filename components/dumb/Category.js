import React from 'react'

export default function Category(props) {
  const {category} = props
  return (
    <div className="ml-2">
      <span className="badge badge-primary">{category}</span>
    </div>
  )
}
