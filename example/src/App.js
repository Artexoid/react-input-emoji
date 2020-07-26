import React, { useState, useRef } from 'react'

import InputEmoji from 'react-input-emoji'
import Highlight from 'react-highlight.js'

// style
import {
  GlobalStyle,
  Header,
  Title,
  Subtitle,
  Main,
  Description,
  Snippet,
  Code,
  Example,
  TableTh,
  Table,
  TableTd,
  TableTr,
  EmojiInput,
  EmojiInputCursor,
  Footer,
  Credits,
  FooterLink,
  GithubButtons
} from './style'

export default function App () {
  const [ text, setText ] = useState('')

  const inputEl = useRef(null)

  const exampleCode = `import React, { useState } from 'react'
import InputEmoji from 'react-input-emoji'

export default function Example () {
  const [ text, setText ] = useState('')

  function handleOnEnter (text) {
    console.log('enter', text)
  }

  return (
    <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
  )
}`

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>
        <Title>react-input-emoji</Title>
        <Subtitle>A React input that supports emojis</Subtitle>
        <Subtitle color='white'>
          <EmojiInput>
            😍 😜 😂 😛 <EmojiInputCursor>|</EmojiInputCursor>
          </EmojiInput>
        </Subtitle>
        <GithubButtons>
          <iframe src='https://ghbtns.com/github-btn.html?user=cesarwbr&amp;repo=react-input-emoji&amp;type=watch&amp;count=true&amp;size=large' allowtransparency='true' frameBorder='0' scrolling='0' width='152' height='30' />
          <iframe src='https://ghbtns.com/github-btn.html?user=cesarwbr&amp;repo=react-input-emoji&amp;type=fork&amp;count=true&amp;size=large' allowtransparency='true' frameBorder='0' scrolling='0' width='156' height='30' />
        </GithubButtons>
      </Header>
      <Main>
        <Description>
          InputEmoji provides a simple way to have an input element with emoji picker support. Click the picker button next to the input field and select an emoji from the popup window. Done!
        </Description>
        <h1>Install</h1>
        <Description>
          You can get it on npm.
        </Description>
        <Snippet>
          <Code>
            npm install react-input-emoji --save
          </Code>
        </Snippet>
        <h1>Usage</h1>
        <Description>
          After install import the react-input-emoji component to display your input with emoji support like so:
        </Description>
        <Example>
          <InputEmoji
            ref={inputEl}
            value={text}
            onChange={(value) => {
              console.log({value})
              setText(value)
            }}
            cleanOnEnter
            onEnter={text => {
              console.log('enter', text)
            }}
            placeholder='Type a message'
            onResize={(value) => console.log('resize', value)}
            onClick={() => console.log('clicked')}
            onFocus={() => console.log('focus')}
            onKeyDown={(e) => console.log('key down', e)}
            keepOpenend
            disableRecent
            inputClass='my-input-class'
            tabIndex={1}
            maxLength={1200}
          />
        </Example>
        <Snippet>
          <Code>
            <Highlight language='javascript'>
              {exampleCode}
            </Highlight>
          </Code>
        </Snippet>
        <h1>Props</h1>
        <Table>
          <thead>
            <tr>
              <TableTh>Prop</TableTh>
              <TableTh>Description</TableTh>
            </tr>
          </thead>
          <tbody>
            <TableTr>
              <TableTd><Code>value</Code></TableTd>
              <TableTd>The input value.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>onChange</Code></TableTd>
              <TableTd>This function is called when the value of the input changes. The first argument is the current value.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>onResize</Code></TableTd>
              <TableTd>This function is called when the width or the height of the input changes. The first argument is the current size value.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>onClick</Code></TableTd>
              <TableTd>This function is called when the input is clicked.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>onFocus</Code></TableTd>
              <TableTd>This function is called when the input has received focus.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>cleanOnEnter</Code></TableTd>
              <TableTd>Clean the input value after the keydown event.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>onEnter</Code></TableTd>
              <TableTd>This function is called after the keydown event is fired with the <Code inline>keyCode === 13</Code> returning the last value.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>placeholder</Code></TableTd>
              <TableTd>Defaults to "Type a message". Set the placeholder of the input.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>height</Code></TableTd>
              <TableTd>Defaults to 40. The total height of the area in which the element is rendered.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>maxLength</Code></TableTd>
              <TableTd>The maximum number of characters allowed in the element.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>borderRadius</Code></TableTd>
              <TableTd>Defaults to 21. The border radius of the input container.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>borderColor</Code></TableTd>
              <TableTd>Defaults to <Code inline>#EAEAEA</Code>. The border color of the input container.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>fontSize</Code></TableTd>
              <TableTd>Defaults to 15. The font size of the placeholder and input container.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><Code>fontFamily</Code></TableTd>
              <TableTd>Defaults to "sans-serif". The font family of the placeholder and input container.</TableTd>
            </TableTr>
          </tbody>
        </Table>
      </Main>
      <Footer>
        <Credits>
          Made by <FooterLink href='https://github.com/cesarwbr'>Cesar William</FooterLink> under <FooterLink href='https://cesarwilliam.mit-license.org/'>MIT license</FooterLink>
        </Credits>
      </Footer>
    </React.Fragment>
  )
}
