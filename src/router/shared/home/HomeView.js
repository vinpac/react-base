import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, FormGroup, FormSection } from '../../../components/Form'

const mapObject = (obj, fn) => {
  const mapped = []
  Object.keys(obj).forEach(key => mapped.push(fn(obj[key], key)))
  return mapped
}


const prettyPrint = (obj, depth = 0, indent = true) => {
  let output = ''
  let indentation = ''

  for (let i = 0; i < depth; i += 1) {
    indentation += '  '
  }

  if (typeof obj === 'string') {
    output = `'${obj}'`
  } else if (Array.isArray(obj)) {
    output = `[\n${
      obj.map(child => prettyPrint(child, depth + 1)).join(',\n')
    }\n]`
  } else if (typeof obj === 'object') {
    output = `{\n${mapObject(obj, (child, key) => (
      `${indentation}  ${key}: ${prettyPrint(child, depth + 1, false)}`
    )).join(',\n')}\n${indentation}}`
  } else {
    output = obj
  }

  return indent ? `${indentation}${output}` : output
}

class HomeView extends React.Component {

  state = { values: {} }

  render() {
    const { values } = this.state

    return (
      <div className="homeView container container--sm viewSpacer">
        <h1 className="text--center mb-4">
          React base
        </h1>
        <Form
          onChange={({ values: newValues }) => this.setState({
            values: newValues,
          })}
        >
          <Field
            component="input"
            name="name"
            className="formInput"
            placeholder="Name"
          />
          <div className="buttonGroup mt-3">
            <button className="btn btn--theme-default">
              Hello
            </button>
            <button className="btn btn--theme-default">
              World
            </button>
            <button className="btn btn--theme-default">
              !
            </button>
          </div>
          <FormSection name="social.facebook">
            <div className="inputGroup mt-3">
              <div className="inputGroup__addon">
                fb.com/
              </div>
              <Field
                component="input"
                name="url"
                className="formInput"
                placeholder="Facebook"
              />
            </div>
          </FormSection>
          <FormGroup className="mt-3">
            <Field
              component="input"
              name="checkbox"
              type="checkbox"
              className="formInput"
            />
            <label htmlFor="" className="ml-2">Aceito os termos</label>
          </FormGroup>
        </Form>
        <pre className="code mt-3">
          {prettyPrint(values).split('\n').map((line, i) => (
            <div
              key={i} // eslint-disable-line
              className="code__line"
              data-code-line-number={i}
            >
              {line}
            </div>
          ))}
        </pre>
      </div>
    )
  }
}

export default HomeView
