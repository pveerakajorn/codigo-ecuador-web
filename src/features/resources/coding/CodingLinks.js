import React from "react"
import { connect } from "react-redux"
import { Divider } from "semantic-ui-react"
import { studentLinks } from "./StudentLinks"
import { entrepreneurLinks } from "./EntrepreneurLinks"
import { educatorLinks } from "./EducatorLinks"
import { parentLinks } from "./ParentLinks"

function CodingLinks(props) {
  let codingLinks
  const lang = localStorage.getItem("language")
  switch (props.type) {
    case "Student":
      codingLinks = studentLinks
      break

    case "Parent":
      codingLinks = parentLinks
      break

    case "Educator":
      codingLinks = educatorLinks
      break

    case "Entrepreneur":
      codingLinks = entrepreneurLinks
      break

    default:
      codingLinks = educatorLinks
  }
  debugger
  codingLinks = codingLinks[lang]
  return (
    <div>
      {codingLinks.map(resource => (
        <div className="resource">
          <br />
          <div className="large coding-item-title">{resource.title}</div>
          <br />
          <div className="coding-item-subtitle">{resource.subtitle}</div>
          <br />
          <br />

          <div className="right">
            <button className="coding-item-button">
              <a href={resource.buttonLink}>Learn More</a>
            </button>
          </div>
          <br />
          <Divider className="coding-item-divider" />
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return { language: state.language }
}

export default connect(mapStateToProps)(CodingLinks)
