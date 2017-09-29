import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Field,
  FormGroup,
  FieldArray,
  FormSection,
} from '../../../components/Form'
import Preloader from '../../../components/Preloader/Preloader'

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
    if (obj.length) {
      output = `[\n${obj
        .map(child => prettyPrint(child, depth + 1))
        .join(',\n')}\n${indentation}]`
    } else {
      output = '[]'
    }
  } else if (typeof obj === 'object') {
    if (!obj) {
      output = JSON.stringify(obj)
    } else if (Object.keys(obj).length !== 0) {
      output = `{\n${mapObject(
        obj,
        (child, key) =>
          `${indentation}  ${key}: ${prettyPrint(child, depth + 1, false)}`,
      ).join(',\n')}\n${indentation}}`
    } else {
      output = '{}'
    }
  } else {
    output = obj
  }

  return indent ? `${indentation}${output}` : output
}

class ArrayInput extends React.Component {
  static formPassPropsAsInput = true;
  static formKeyName = 'items';

  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    onFocus: null,
    onBlur: null,
    onChange: null,
    items: [],
  }

  constructor(props) {
    super(props)

    this.state = {
      items: props.items,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.items !== nextProps.items) {
      this.setState({
        items: nextProps.items,
      })
    }
  }

  handleSubmit = () => {
    const { values: { item } } = this.form.getFieldsState()
    this.setState({
      items: [
        ...this.state.items,
        item,
      ],
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.items)
      }
    })
    this.form.reset()
  }

  handleKeyDown = (event) => {
    if (event.which === 13) {
      event.preventDefault()
      this.handleSubmit()
    }
  }

  render() {
    const { items } = this.state

    return (
      <Form ref={(form) => { this.form = form }} component="div">
        <ul>
          {items.map((item, i) => (
            <li
              key={i} // eslint-disable-line
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="inputGroup">
          <Field
            name="item"
            component="input"
            type="text"
            className="formInput"
            placeholder="Adicione um item"
            onKeyDown={this.handleKeyDown}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
          />
          <button
            type="button"
            className="inputGroup__addon btn btn--theme-default"
            onClick={this.handleSubmit}
          >
            Adicionar
          </button>
        </div>
      </Form>
    )
  }
}

class HomeView extends React.Component {
  state = { values: {}, errors: {}, meta: {} }

  render() {
    const { values, errors, meta } = this.state

    return (
      <div className="homeView viewSpacer">
        <div className="container container--sm">
          <h1 className="text--center mb-4">React base</h1>
          <Form
            ref={(form) => { this.form = form }}
            onChange={({ values: newValues, errors: newErrors, meta: newMeta }) =>
              this.setState({
                values: newValues,
                errors: newErrors,
                meta: newMeta,
              })}
          >
            <Field
              component="input"
              name="name"
              className="formInput"
              placeholder="Name"
              validate={value => !value ? 'Required' : null}
            />
            <div className="buttonGroup mt-3">
              <button className="btn btn--theme-default">Hello</button>
              <button className="btn btn--theme-default">World</button>
              <button className="btn btn--theme-outline-primary">!</button>
            </div>
            <FormSection name="social.facebook">
              <div className="inputGroup mt-3">
                <div className="inputGroup__addon">fb.com/</div>
                <Field
                  component="input"
                  name="url"
                  className="formInput"
                  placeholder="Facebook"
                />
              </div>
              <FormGroup className="mt-3">
                <FieldArray component={ArrayInput} name="items" />
              </FormGroup>
            </FormSection>
            <FormGroup className="mt-3">
              <Field
                component="input"
                name="checkbox"
                type="checkbox"
                className="formInput"
              />
              <label htmlFor="" className="ml-2">
                Aceito os termos
              </label>
            </FormGroup>
            <button
              type="button"
              onClick={() => this.form.reset()}
              className="btn btn--theme-default mt-2 mb-2 btn--block"
            >
              Reset form
            </button>
          </Form>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="code mt-3">
                <div className="code__header">
                  <h4 className="code__title">
                    Values
                  </h4>
                </div>
                <pre className="code__body">
                  {prettyPrint(values)
                    .split('\n')
                    .map((line, i) => (
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
            </div>
            <div className="col-md-4">
              <div className="code mt-3">
                <div className="code__header">
                  <h4 className="code__title">
                    Errors
                  </h4>
                </div>
                <pre className="code__body">
                  {prettyPrint(errors)
                    .split('\n')
                    .map((line, i) => (
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
            </div>
            <div className="col-md-4">
              <div className="code mt-3">
                <div className="code__header">
                  <h4 className="code__title">
                    Meta
                  </h4>
                </div>
                <pre className="code__body">
                  {prettyPrint(meta)
                    .split('\n')
                    .map((line, i) => (
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeView
