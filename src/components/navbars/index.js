import React from 'react';
import { Text, Col } from 'rsuite';
import Example from '../../fixtures/Example';
import { Markdown } from '../../fixtures/Markdown';


const examples = {
  basic: require('fs').readFileSync(__dirname + '/basic.js', 'utf8'),
  toggle: require('fs').readFileSync(__dirname + '/toggle.js', 'utf8')
};

export default React.createClass({
  render() {
    return (
      <Col md={9} sm={12}>
        <h1 className="page-header">
          Navbars
            <span className="page-header-en">
            <code>{'<Navbar>'}</code>、
            <code>{'<Navbar.Header>'}</code>、
            <code>{'<Navbar.Brand>'}</code>、
            <code>{'<Navbar.Collapse>'}</code>、
            <code>{'<Navbar.Toggle>'}</code>
          </span>
        </h1>

        <h3>默认</h3>
        <Example code={examples.basic} />


        <h3>响应式</h3>
        <p>
          在小屏幕上 <code>Navbar.Collapse</code> 中的元素会隐藏，
          可以设置一个 <code>Navbar.Toggle</code> 按钮，点击后展开被隐藏的元素。
        </p>
        <Example code={examples.toggle} />

        <h3>组件属性</h3>
        <Markdown>
          {require('./props.md')}
        </Markdown>

      </Col>
    );
  }
});
